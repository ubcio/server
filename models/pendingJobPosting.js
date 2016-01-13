var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingJobPostingSchema = new Schema({

  link: String,
  title: String,
  company: String,
  location: String,
  deadline: String,
  term: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingJobPosting = mongoose.model('pendingJobPosting', pendingJobPostingSchema);
// make this available to our users in our Node applications
module.exports = pendingJobPosting;


