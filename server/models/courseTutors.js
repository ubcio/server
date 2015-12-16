var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var courseTutorsSchema = new Schema({

  name: String,
  tutors: [Number]

});
// Create a Companies model for courseTutorsSchema
var CourseTutors = mongoose.model('courseTutors', courseTutorsSchema);
// make this available to our users in our Node applications
module.exports = CourseTutors;
