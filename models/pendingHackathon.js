var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingHackathonSchema = new Schema({

  link: String,
  name: String,
  time: String,
  location: String,
  description: String,
  email: String
  
});
// Create a Companies model for professorsSchema
var pendingHackathon = mongoose.model('pendingHackathon', pendingHackathonSchema);
// make this available to our users in our Node applications
module.exports = pendingHackathon;


