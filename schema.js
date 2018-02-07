const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 


var contactInfo = new Schema ({
	firstName: String,
	lastName: String,
	phoneNumber:String,
	message:String,
	email:String
});


 module.exports = mongoose.model('contactInfo', contactInfo); 
