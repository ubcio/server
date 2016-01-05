var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var seminarsSchema = new Schema({

  date: String,
  description: String, 
  link: String,
  location: String,
  name: String

  
});
// Create a Companies model for seminarsSchema
var Seminars = mongoose.model('seminars', seminarsSchema);
// make this available to our users in our Node applications
module.exports = Seminars;
