var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var jobPostingsSchema = new Schema({

  title: String,
  company: String,
  location: String,
  deadline: String,
  term: String,
  link: String,
  
});
// Create a Companies model for jobPostingsSchema
var jobPostings = mongoose.model('jobPostings', jobPostingsSchema);
// make this available to our users in our Node applications
module.exports = jobPostings;