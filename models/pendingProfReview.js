var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingProfReviewSchema = new Schema({

  name: String,
  course: String,
  review: String,
  email: String
  
});
// Create a Companies model for professorsSchema
var pendingProfReview = mongoose.model('pendingProfReview', pendingProfReviewSchema);
// make this available to our users in our Node applications
module.exports = pendingProfReview;


