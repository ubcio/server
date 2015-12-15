var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var careerFairsSchema = new Schema({

  date: String,
  description: String,
  link: String,
  location: String,
  name: String
  
});
// Create a CareerFairs model for careerFairsSchema
var careerFairs = mongoose.model('careerFairs', careerFairsSchema);
// make this available to our users in our Node applications
module.exports = careerFairs;
