var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingCourseTipSchema = new Schema({

  course: String,
  tip: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingCourseTip = mongoose.model('pendingCourseTip', pendingCourseTipSchema);
// make this available to our users in our Node applications
module.exports = pendingCourseTip;



