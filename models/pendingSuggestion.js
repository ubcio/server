var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pendingSuggestionSchema = new Schema({

  suggestion: String,
  email: String,
  
});
// Create a Companies model for professorsSchema
var pendingSuggestion = mongoose.model('pendingSuggestion', pendingSuggestionSchema);
// make this available to our users in our Node applications
module.exports = pendingSuggestion;
