var router = require('express').Router();

router.use('/register', require('./register'));

router.use('/wines', require('./wines'));

module.exports = router;
