var router = require('express').Router();
var User = require('../../../../models/User');

router.get('/', function(req, res) {
    User.find({}).then(function(users) {
        res.json(users);
    });
});

router.post('/', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;


    var newUser = new User({
        username: username,
        email: email,
        password: password,
    });

    newUser.save().then(function(user){
        console.log(user);
        res.json(user);
    });



    //.save().then(function(userSaved) {
    //     res.json(userSaved);
    // });

});

module.exports = router;