// SETUP REQUIREMENTS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// DB SCHEMA REQUIREMENTS
var CareerFairs = require('../models/careerFairs.js');
var Companies = require('../models/companies.js');
var Courses = require('../models/courses.js');
var CourseTutors = require('../models/courseTutors.js');
var DegreeRequirements = require('../models/degreeRequirements.js');
var Hackathons = require('../models/hackathons.js');
var JobPostings = require('../models/jobPostings.js');
var Professors = require('../models/professors.js');
var Seminars = require('../models/seminars.js');
var Tutors = require('../models/tutors.js');

// DB URL
var mongourl = 'mongodb://localhost:27017/ubcio';


// NEED TO COMPLETE
router.get('/careerFairs', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  CareerFairs.find({}, function(err, fairs) {
    if (err) { 
      console.log("Error occured in getting items from DB for CareerFairs");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      fairs.forEach(function(fair) {
        result.push(fair);
        counter++;
        if (counter >= fairs.length) {
          var jsonResult = JSON.Stringify(result);
          res.send(result);
          mongoose.connection.close();
        }
      })
    }
  });

});

// NEED TO COMPLETE
router.get('/companies', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Companies.find({}, function(err, companies) {
    if (err) { 
      console.log("Error occured in getting items from DB for Companies");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      companies.forEach(function(company) {
        result.push(company);
        counter++;
        if (counter >= courses.length) {
          var jsonResult = JSON.stringify(result);
          res.send(result);
          mongoose.connection.close();
        }  
      })
    }
  });

});


router.get('/courses', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Courses.find({}, function(err, courses) {
    if (err) { 
      console.log("Error occured in getting items from DB for Courses");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      courses.forEach(function(course) {
        result.push(course);
        counter++;
        if (counter >= courses.length) {
          var jsonResult = JSON.stringify(result);
          res.send(result);
          mongoose.connection.close();
        }  
      })
    }
  });

});

router.get('/degreeRequirements', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  DegreeRequirements.find({}, function(err, degrees) {
    if (err) { 
      console.log("Error occured in getting items from DB for DegreeRequirements");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      degrees.forEach(function(degree) {
        result.push(degree);
        counter++;
        if (counter >= degrees.length) {
          var jsonResult = JSON.stringify(result);
          res.send(result);
          mongoose.connection.close();
        }  
      })
    }
  });

});

// NEED TO COMPLETE
router.get('/hackathons', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Hackathons.find({}, function(err, hackathons) {
    if (err) { 
      console.log("Error occured in getting items from DB for Hackathons");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      hackathons.forEach(function(hackathon) {
        result.push(hackathon);
        counter++;
        if (counter >= hackathons.length) {
          var jsonResult = JSON.stringify(result);
          res.send(result);
          mongoose.connection.close();
        }  
      })
    }
  });

});

// NEED TO COMPLETE
router.get('/jobPostings', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  JobPostings.find({}, function(err, jobPostings) {
    if (err) { 
      console.log("Error occured in getting items from DB for JobPostings");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult;
      jobPostings.forEach(function(hackathon) {
        result.push(hackathon);
      })
    }
  });

});

router.get('/professors', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Professors.find({}, function(err, professors) {
    if (err) { 
      console.log("Error occured in getting items from DB for Professors");
      res.status(500).send(err);
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      professors.forEach(function(professor) {
        result.push(professor);
        counter++;
        if (counter >= professors.length) {
          var jsonResult = JSON.stringify(result);
          res.send(result);
          mongoose.connection.close();
        }  
      })
    }
  });

});

// NEED TO COMPLETE
router.get('/seminars', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Seminars.find({}, function(err, seminars) {
    if (err) { 
      console.log("Error occured in getting items from DB for Seminars");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      seminars.forEach(function(seminar) {
        result.push(seminar);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
        mongoose.connection.close();
      })  
    }
  });

});

// NEED TO COMPLETE
router.get('/tutors', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  Tutors.find({}, function(err, tutors) {
    if (err) { 
      console.log("Error occured in getting items from DB for Tutors");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      tutors.forEach(function(tutor) {
        result.push(tutor);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
        mongoose.connection.close();
      })  
    }
  });

});

// NEED TO COMPLETE
router.get('/courseTutors', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  CourseTutors.find({}, function(err, courseTutors) {
    if (err) { 
      console.log("Error occured in getting items from DB for CourseTutors");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      courseTutors.forEach(function(courseTutor) {
        result.push(courseTutor);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
        mongoose.connection.close();
      })  
    }
  });

});

module.exports = router;
