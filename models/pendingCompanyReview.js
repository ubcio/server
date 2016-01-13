var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingCompanyReviewSchema = new Schema({

  company: String,
  review: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingCompanyReview = mongoose.model('pendingCompanyReview', pendingCompanyReviewSchema);
// make this available to our users in our Node applications
module.exports = pendingCompanyReview;


