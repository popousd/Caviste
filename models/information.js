var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var informationSchema = new Schema({
	name : String,
	adress : String,
	phone : String,

});

module.exports = mongoose.model('information', informationSchema);