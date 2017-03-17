var express = require('express');
var path = require('path');
require('./config');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require('./web'));

var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log(`App running on port: ${port}`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});