var router = require('express').Router();
var Wine = require('../../../../models/Wine');

router.get('/', function(req, res) {
    Wine.find({}).then(function(wine) {
        res.json(wine);
    });
});

router.post('/', function(req, res) {
    var name = req.body.name;
    var date = req.body.date;
    var details = req.body.details;

    var newWine = new Wine({
        name: name,
        date: date,
        details: details,
    });

    newWine.save().then(function(wine){
        console.log(wine);
        res.json(wine);
    });

});


module.exports = router;