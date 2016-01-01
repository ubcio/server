var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var degreesSchema = new Schema({

  name: String,
  websites: [{buttonName: String, website: String}]
  
});
// Create a Companies model for degreesSchema
var Degrees = mongoose.model('degrees', degreesSchema);
// make this available to our users in our Node applications
module.exports = Degrees;
