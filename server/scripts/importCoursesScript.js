"use strict";

var fs = require("fs");
var Paths = require('../paths');
var mongoose = require('mongoose');
var Courses = require('../models/courses.js');
var ImportScript = require('./importScript.js');

class CoursesImportScript extends ImportScript {

    constructor() {
      super();
      this.coursesImportScript(this.filepath);
    }

    coursesImportScript(filepath){
      console.log("\n *STARTING SCRIPT* \n");
      var jsonContent = this.getDataFromJsonFile(filepath);
      var requestedresult = this.readJsonIntoCourses(jsonContent);
      var output = requestedresult.then(function(datas){
        datas.forEach(function(item, i){
          console.log(i);
          console.log(item);
          var query = {'name': item["name"]};
          Courses.findOneAndUpdate(query, item, {upsert:true}, function(err, doc){
            console.log('\nInserting COURSE into DB\n');
            if (err) { 
              console.log('ERROR: Insertion of Course into DB failed');
            } else { 
              console.log('SUCCESS: COURSE: '+ i + ":" +item['name'] +' successfully entered into the DB.');
              if (i == (datas.length - 1)) mongoose.connection.close();
            };
          });
        })
      });
    }

    readJsonIntoCourses(jsonContent){
      var resultarray = []
      for (var i = 0; i < jsonContent.length; i++){
        var item = jsonContent[i];
        
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
        resultarray.push(courseJson)

        console.log('XXXXXXXXXXXXXXXXXXXXX');
      }

      return Promise.all(resultarray);
  }


}

module.exports = CoursesImportScript;