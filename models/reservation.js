var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new Schema({
	cave : [{type: Schema.Types.ObjectId, ref: 'wine'}]
	number : String,
});

module.exports = mongoose.model('reservation', reservationSchema);