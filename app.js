var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var jwt = require("jwt-simple");
var auth = require("./auth.js")();
var users = require("./models/User.js");  
var cfg = require ("./config.js");
require('./config/index');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(auth.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/user", auth.authenticate(), function(req, res) {  
    res.json(users[req.user.id]);
});


app.post("/token", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});


app.use("/", require('./web'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`App running on port: ${port}`);
});

module.exports = app;