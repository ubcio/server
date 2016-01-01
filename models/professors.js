var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var professorsSchema = new Schema({

  name: String,
  reviews: [{review: String, createDate: String, course: String}],
  courses: {courseName: String, reviewsIndex: [Number]}
  
});
// Create a Companies model for professorsSchema
var Professors = mongoose.model('professors', professorsSchema);
// make this available to our users in our Node applications
module.exports = Professors;


