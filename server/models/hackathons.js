var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var hackathonsSchema = new Schema({

  date: String,
  description: String,
  link: String,
  location: String,
  name: String
  
});
// Create a Companies model for hackathonsSchema
var Hackathons = mongoose.model('hackathons', hackathonsSchema);
// make this available to our users in our Node applications
module.exports = Hackathons;