require("babel-register");
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


// NEED TO COMPLETE
router.get('/careerFairs', function(req, res, next) {
  console.log('Request Received');
  mongoose.connect(mongourl);
  CareerFairs.find({}, function(err, fairs) {
    if (err) { 

      console.log("Error occured in getting items from DB for CareerFairs");
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (fairs.length <= 0){
      console.log("No Items available in CareerFairs");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      fairs.forEach(function(fair) {
        result.push(fair);
        counter++;
        if (counter >= fairs.length) {
          var jsonResult = JSON.Stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (companies.length <= 0){
      console.log("No Items available in Companies");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      companies.forEach(function(company) {
        result.push(company);
        counter++;
        if (counter >= courses.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (courses.length <= 0){
      console.log("No Items available in Courses");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      courses.forEach(function(course) {
        result.push(course);
        counter++;
        if (counter >= courses.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (degrees.length <= 0){
      console.log("No Items available in DegreeRequirements");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      degrees.forEach(function(degree) {
        result.push(degree);
        counter++;
        if (counter >= degrees.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (hackathons.length <= 0){
      console.log("No Items available in Hackathons");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      hackathons.forEach(function(hackathon) {
        result.push(hackathon);
        counter++;
        if (counter >= hackathons.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (jobPostings.length <= 0){
      console.log("No Items available in JobPostings");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult;
      jobPostings.forEach(function(hackathon) {
        result.push(hackathon);
        counter++;
        if (counter >= jobPostings.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
          mongoose.connection.close();
        }  
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (professors.length <= 0){
      console.log("No Items available in Professors");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = []; var jsonResult; var counter = 0;
      professors.forEach(function(professor) {
        result.push(professor);
        counter++;
        if (counter >= professors.length) {
          var jsonResult = JSON.stringify(result);
          res.status(200).send(result);
          console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (seminars.length <= 0){
      console.log("No Items available in Seminars");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = [];
      var jsonResult;
      seminars.forEach(function(seminar) {
        result.push(seminar);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.status(200).send(result);
        console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (tutors.length <= 0){
      console.log("No Items available in Tutors");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = [];
      var jsonResult;
      tutors.forEach(function(tutor) {
        result.push(tutor);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.status(200).send(result);
        console.log('Closing connection to DB');
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
      ErrLog.logError(err);
      ErrLog.sendText(err);
      res.status(500).send(err);
      mongoose.connection.close();
    } else if (courseTutors.length <= 0){
      console.log("No Items available in CourseTutors");
      console.log('Closing connection to DB');
      mongoose.connection.close();
      res.status(200).send("No data available in DB.");
    }
    else {
      var result = [];
      var jsonResult;
      courseTutors.forEach(function(courseTutor) {
        result.push(courseTutor);
      }).then(function(){
        var jsonResult = JSON.Stringify(result);
        res.status(200).send(result);
        console.log('Closing connection to DB');
        mongoose.connection.close();
      })  
    }
  });

});


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
