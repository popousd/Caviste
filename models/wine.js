var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wineSchema = new Schema({
	name : String,
	date : String,
	details : String
});

module.exports = mongoose.model('wine', wineSchema);