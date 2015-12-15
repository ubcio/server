var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var companiesSchema = new Schema({

  name: String,
  reviews: [{review: String, createDate: String}]
  
});
// Create a Companies model for companiesSchema
var Companies = mongoose.model('companies', companiesSchema);
// make this available to our users in our Node applications
module.exports = Companies;