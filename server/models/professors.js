var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var professorsSchema = new Schema({

  name: String,
  reviews: [{review: String, createDate: String, course: String}],
  courses: String,
  deadline: String,
  term: String,
  link: String,
  
});
// Create a Companies model for professorsSchema
var Professors = mongoose.model('professors', professorsSchema);
// make this available to our users in our Node applications
module.exports = Professors;



{
  "professors": [
    {
      "name": "Ron Garcia",
      "reviews": [
        {
          "review": "This was the first serious computer science course I have ever taken - I didn't know what to expect. Ron set up a very friendly casual learning environment, remembered 150+ student names, and was just an all around great teacher. I'd like to leave some constructive criticism but I took the course a few terms ago and I can't remember a single thing I disliked about Ron's teaching. Occasionally parts of the course itself bugged me but it was not all in Ron's control. I would highly recommend to anyone to take a class with Ron",
          "createDate": "2015-11-19",
          "course": "CPSC 110"
        }
      ],
      "courses": {
        "All": [
          0
        ],
        "CPSC 110": [
          0
        ]
      }
    }
  ]
}