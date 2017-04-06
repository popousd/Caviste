var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    
	user : {type : Schema.Types.ObjectId, ref: 'User'}
    cave : {type: Schema.Types.ObjectId, ref: 'wine'},
    reservation : [{type: Schema.Types.ObjectId, ref: 'reservation'}],

});

module.exports = mongoose.model('customer', customerSchema);