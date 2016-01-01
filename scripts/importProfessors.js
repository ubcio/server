"use strict";

var fs = require("fs");
var mongoose = require('mongoose');
var Professors = require('../models/professors.js');
var ImportScript = require('./importScript.js');
var Paths = require('../jsonpaths');

class ProfessorsImportScript extends ImportScript {

    constructor() {
      super();
      this.mongourl = 'mongodb://localhost:27017/ubcio';
      mongoose.connect(this.mongourl);
      this.filepath = Paths.professorsPath;
      this.professorsImportScript(this.filepath);
    }

    professorsImportScript(filepath){
      console.log("\n *STARTING SCRIPT* \n");
      console.log(this.filepath);
      var jsonContent = this.getDataFromJsonFile(this.filepath);
      var requestedresult = this.readJsonIntoProfessors(jsonContent);
      var output = requestedresult.then(function(datas){
        var counter = 0
        datas.forEach(function(item, i){
          console.log(i);
          console.log(item);
          var query = {'name': item["name"]};
          Professors.findOneAndUpdate(query, item, {upsert:true}, function(err, doc){
            console.log('\nInserting PROFESSOR into DB\n');
            if (err) { 
              console.log('ERROR: Insertion of Course into DB failed');
            } else { 
              console.log('SUCCESS: PROFESSOR: '+ i + ":" +item['name'] +' successfully entered into the DB.');
              counter++;
              if (counter >= (datas.length - 1)) mongoose.connection.close();
            };
          });
        })
      });
    }

    readJsonIntoProfessors(jsonContent){
      var resultarray = []
      var content = jsonContent.professors;
      console.log(content.length);
      for (var i = 0; i < content.length; i++){

        var item = content[i];
        // console.log(item);
        console.log('\nPROFESSOR SL: '+i);console.log('XXXXXX PROFESSOR XXXXXXX');
        console.log('\n'+item["name"]);
        var professorJson = {name: item["name"]};
        if (item["courses"]){
          var courses = item["courses"];
          var subCourse;
          for (var property in courses) {
            var courseList = []
            var courseItem = {courseName: property, reviewsIndex: courses[property]}
            console.log(property + ": " + courses[property]);
            courseList.push(courseItem);
          }
          professorJson.courses = courseList
        }
        if (item["reviews"]) {
          var reviewsArray = [];
          var reviews = item["reviews"];
          for (var j = 0; j < reviews.length; j++){
             var review = reviews[j];
             console.log('');
             console.log('######## REVIEW ########');
             console.log(review["course"]);
             console.log(review.createDate);console.log(review.review);
             console.log('#####################');
             var reviewJson = {course: review['course'], createDate: review['createDate'], review: review["review"]};
             reviewsArray.push(reviewJson);
          }
          professorJson.reviews = reviewsArray;
        }

        resultarray.push(professorJson)

        console.log('XXXXXXXXXXXXXXXXXXXXX');
      }

      return Promise.all(resultarray);
  }


}

module.exports = ProfessorsImportScript;