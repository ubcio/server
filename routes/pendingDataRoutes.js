require("babel-register");
// SETUP REQUIREMENTS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// DB SCHEMA REQUIREMENTS
var PendingProfReview = require('../models/pendingProfReview.js');
var PendingCareerFair = require('../models/pendingCareerFair.js');
var PendingCompanyReview = require('../models/pendingCompanyReview.js');
var PendingCourseReview = require('../models/pendingCourseReview.js');
var PendingCourseTip = require('../models/pendingCourseTip.js');
var PendingHackathon = require('../models/pendingHackathon.js');
var PendingJobPosting = require('../models/pendingJobPosting.js');
var PendingSeminar = require('../models/pendingSeminar.js');
var PendingSuggestion = require('../models/pendingSuggestion.js');
var PendingTutorService = require('../models/pendingTutorService.js');
var ErrLog = require('../public/javascripts/errorLogger.js');


// DB URL
var mongourl = 'mongodb://localhost:27017/ubcio';

router.post('/pendingCareerFair', function(req, res) {
  console.log('Request Received');
  console.log('pendingCareerFairData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingCareerFair(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingCareerFair. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingCompanyReview', function(req, res) {
  console.log('Request Received');
  console.log('pendingCompanyReviewData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingCompanyReview(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingCompanyReview. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingCourseReview', function(req, res) {
  console.log('Request Received');
  console.log('pendingCourseReviewData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingCourseReview(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingCourseReview. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingCourseTip', function(req, res) {
  console.log('Request Received');
  console.log('pendingCourseTipData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingCourseTip(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingCourseTip. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingHackathon', function(req, res) {
  console.log('Request Received');
  console.log('pendingHackathonData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingHackathon(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingHackathon. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingJobPosting', function(req, res) {
  console.log('Request Received');
  console.log('pendingJobPostingData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingJobPosting(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingJobPosting. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingProfessorReview', function(req, res) {
  console.log('Request Received');
  console.log('profReviewData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingProfReview(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingProfReview. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingSeminar', function(req, res) {
  console.log('Request Received');
  console.log('pendingSeminarData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingSeminar(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingSeminar. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingSuggestion', function(req, res) {
  console.log('Request Received');
  console.log('pendingSuggestionData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingSuggestion(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingSuggestion. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

router.post('/pendingTutorService', function(req, res) {
  console.log('Request Received');
  console.log('pendingTutorServiceData is :'+ JSON.stringify(req.body));
  mongoose.connect(mongourl);
  var review = new PendingTutorService(req.body);
  review.save(function (err) {
    if (err) {

      console.log("Error occured in insertion of PendingTutorService. Check logs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else {
      console.log("Data Input into DB");
      res.status(200).send("Data input into DB");
      mongoose.connection.close();
    }
  })
})

module.exports = router;
