var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingSeminarSchema = new Schema({

  link: String,
  name: String,
  time: String,
  location: String,
  description: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingSeminar = mongoose.model('pendingSeminar', pendingSeminarSchema);
// make this available to our users in our Node applications
module.exports = pendingSeminar;


