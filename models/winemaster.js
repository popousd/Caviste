var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var winemasterSchema = new Schema({

	user : {type : Schema.Types.ObjectId, ref: 'User'}
    cave : {type: Schema.Types.ObjectId, ref: 'wine'},
    reservation : [{type: Schema.Types.ObjectId, ref: 'reservation'}],
    information : [{type : Schema.Types.ObjectId , ref:'information'}],
});

module.exports = mongoose.model('winemaster', commercantSchema);