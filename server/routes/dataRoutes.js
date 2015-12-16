var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
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

// mongoose.connect('mongodb://localhost/my_database');
/* GET home page. */
router.get('/careerFairs', function(req, res, next) {

  CareerFairs.find({}, function(err, fairs) {
    if (err) { 
      console.log("Error occured in getting items from DB for CareerFairs");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      fairs.forEach(function(fair) {
        result.push(fair);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/companies', function(req, res, next) {

  Companies.find({}, function(err, companies) {
    if (err) { 
      console.log("Error occured in getting items from DB for Companies");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      companies.forEach(function(company) {
        result.push(company);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/courses', function(req, res, next) {

  Courses.find({}, function(err, courses) {
    if (err) { 
      console.log("Error occured in getting items from DB for Courses");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      courses.forEach(function(course) {
        result.push(course);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/degreeRequirements', function(req, res, next) {

  DegreeRequirements.find({}, function(err, degrees) {
    if (err) { 
      console.log("Error occured in getting items from DB for DegreeRequirements");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      degrees.forEach(function(degree) {
        result.push(degree);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/hackathons', function(req, res, next) {

  Hackathons.find({}, function(err, hackathons) {
    if (err) { 
      console.log("Error occured in getting items from DB for Hackathons");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      hackathons.forEach(function(hackathon) {
        result.push(hackathon);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/jobPostings', function(req, res, next) {

  JobPostings.find({}, function(err, jobPostings) {
    if (err) { 
      console.log("Error occured in getting items from DB for JobPostings");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      jobPostings.forEach(function(hackathon) {
        result.push(hackathon);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/professors', function(req, res, next) {

  Professors.find({}, function(err, professors) {
    if (err) { 
      console.log("Error occured in getting items from DB for Professors");
      res.status(500).send(err);
    }
    else {
      var result = [];
      var jsonResult;
      professors.forEach(function(professor) {
        result.push(professor);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.send(result);
      })  
    }
  });

});

router.get('/seminars', function(req, res, next) {

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
      })  
    }
  });

});

router.get('/tutors', function(req, res, next) {

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
      })  
    }
  });

});

router.get('/courseTutors', function(req, res, next) {

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
      })  
    }
  });

});

module.exports = router;
