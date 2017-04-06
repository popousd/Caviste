var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
	username : String,
	email : String,
	password : String
});

module.exports = mongoose.model('User', userSchema);