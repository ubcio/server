"use strict";

var fs = require("fs");
var mongoose = require('mongoose');
var Tutors = require('../models/tutors.js');
var ImportScript = require('./importScript.js');
var Paths = require('../jsonpaths');

class TutorsImportScript extends ImportScript {

    constructor() {
      super();
      this.mongourl = 'mongodb://localhost:27017/ubcio';
      mongoose.connect(this.mongourl);
      this.filepath = Paths.tutorsPath;
      this.tutorsImportScript(this.filepath);
    }

    tutorsImportScript(filepath){
      console.log("\n *STARTING SCRIPT* \n");
      console.log(this.filepath);
      var jsonContent = this.getDataFromJsonFile(this.filepath);
      var requestedresult = this.readJsonIntoTutors(jsonContent);
      var output = requestedresult.then(function(datas){
        var counter = 0;
        datas.forEach(function(item, i){
          console.log(i);
          console.log(item);
          var query = {'name': item["name"]};
          Tutors.findOneAndUpdate(query, item, {upsert:true}, function(err, doc){
            console.log('\nInserting TUTOR into DB\n');
            if (err) { 
              console.log('ERROR: Insertion of Tutor into DB failed');
            } else { 
              console.log('SUCCESS: TUTOR: '+ i + ":" +item['name'] +' successfully entered into the DB.');
              counter++;
              if (counter >= (datas.length - 1)) mongoose.connection.close();
            };
          });
        })
      });
    }

    readJsonIntoTutors(jsonContent){
      var resultarray = []
      var content = jsonContent.degrees;
      console.log(content.length);
      for (var i = 0; i < content.length; i++){
        var item = content[i];
        console.log('\nDEGREE SL: '+i);console.log('XXXXXX DEGREE XXXXXXX');
        console.log('\n'+item["name"]);
        var degreeJson = {name: item["name"]};
        var sites = item["websites"];
        if (sites){
          for (var j = 0; j < sites.length; j++){
            var site = sites[j];
            console.log('Button name: '+ site["buttonName"]);
            console.log('Website: '+ site["website"]);
            var websitesJson = {buttonName: site["buttonName"], website: site["website"]}
          }
          degreeJson.websites = websitesJson
        }
        resultarray.push(degreeJson)
        console.log('XXXXXXXXXXXXXXXXXXXXX');
      }
      console.log('TOTAL NUM IS '+ resultarray.length);
      return Promise.all(resultarray);
  }


}

module.exports = TutorsImportScript;