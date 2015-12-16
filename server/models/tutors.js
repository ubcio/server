var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var tutorsSchema = new Schema({

  name: String,
  bio: String, 
  email: String,
  price: Number,
  reviews: [{review: String, createDate: String}],

});
// Create a Companies model for tutorsSchema
var Tutors = mongoose.model('tutors', tutorsSchema);
// make this available to our users in our Node applications
module.exports = Tutors;
