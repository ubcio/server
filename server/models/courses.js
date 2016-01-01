var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var coursesSchema = new Schema({
  
  name: String,
  description: String,
  credits: String,
  prerequisites: String,
  corequisite: String,
  tips: [{tip: String, createDate: String}],
  reviews: [{review: String, createDate: String, professor: String}]

});

// Create a Courses model for coursesSchema
var Courses = mongoose.model('courses', coursesSchema);
// make this available to our users in our Node applications
module.exports = Courses;