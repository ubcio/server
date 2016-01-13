var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingTutorServiceSchema = new Schema({

  name: String,
  email: String,
  hourlyPrice: Number,
  courses: String,
  bio: String,
  
});
// Create a Companies model for professorsSchema
var pendingTutorService = mongoose.model('pendingTutorService', pendingTutorServiceSchema);
// make this available to our users in our Node applications
module.exports = pendingTutorService;


