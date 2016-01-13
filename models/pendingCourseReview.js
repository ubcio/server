var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingCourseReviewSchema = new Schema({

  course: String,
  tip: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingCourseReview = mongoose.model('pendingCourseReview', pendingCourseReviewSchema);
// make this available to our users in our Node applications
module.exports = pendingCourseReview;


