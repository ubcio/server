"use strict";

var fs = require("fs");
var Paths = require('../paths');
var mongoose = require('mongoose');
var CareerFairs = require('../models/careerFairs.js');
var ImportScript = require('./importScript.js');

class CareerFairsImportScript extends ImportScript {

    constructor() {
      super();
      this.coursesImportScript(this.filepath);
    }

    coursesImportScript(filepath){
      console.log("\n *STARTING SCRIPT* \n");
      var jsonContent = this.getDataFromJsonFile(filepath);
      this.readJsonIntoCourses(jsonContent);
      console.log("\n *EXITING SCRIPT* \n");
    }

    readJsonIntoCourses(jsonContent){
      for (var i = 0; i < jsonContent.length; i++){
        var item = jsonContent[i];
        var query = {'name': item["name"]};
        console.log('\nCOURSE SL: '+i);console.log('XXXXXX COURSE XXXXXXX');
        console.log('\n'+item["name"]);console.log(item["description"]);console.log(item["credits"]);
        var courseJson = {name: item["name"], description: item["description"], credits: item["credits"]};
        if (item["tips"]) {
          var tipsArray = [];
          var tips = item["tips"];
          for (var j = 0; j < tips.length; j++){
             var tip = tips[i];
             console.log('######## TIP ########');console.log(tip["createDate"]);
             console.log(tip["tip"]);console.log('#####################');
             var tipJson = {tip: tip["tip"], createDate: tip['createDate']};
             tipsArray.push(tipJson);
          }
          courseJson.tips = tipsArray;
        }
        console.log('\nInserting COURSE into DB\n');
        Courses.findOneAndUpdate(query, courseJson, {upsert:true}, function(err, doc){
            if (err) { console.log('ERROR: Insertion of Course into DB failed');
            } else { console.log('SUCCESS: COURSE: '+ + ' successfully entered into the DB.');};
        });
        console.log('XXXXXXXXXXXXXXXXXXXXX');
      }
  }
}

module.exports = CoursesImportScript;