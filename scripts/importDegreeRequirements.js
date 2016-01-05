"use strict";

var fs = require("fs");
var mongoose = require('mongoose');
var DegreeRequirements = require('../models/degreeRequirements.js');
var ImportScript = require('./importScript.js');
var Paths = require('../jsonpaths');

class DegreeRequirementsImportScript extends ImportScript {

    constructor() {
      super();
      this.mongourl = 'mongodb://localhost:27017/ubcio';
      mongoose.connect(this.mongourl);
      this.filepath = Paths.degreeRequirementsPath;
      this.degreeRequirementsImportScript(this.filepath);
    }

    degreeRequirementsImportScript(filepath){
      console.log("\n *STARTING SCRIPT* \n");
      console.log(this.filepath);
      var jsonContent = this.getDataFromJsonFile(this.filepath);
      var requestedresult = this.readJsonIntoDegreeRequirements(jsonContent);
      var output = requestedresult.then(function(datas){
        var counter = 0;
        datas.forEach(function(item, i){
          console.log(i);
          console.log(item);
          var query = {'name': item["name"]};
          DegreeRequirements.findOneAndUpdate(query, item, {upsert:true}, function(err, doc){
            console.log('\nInserting PROFESSOR into DB\n');
            if (err) { 
              console.log('ERROR: Insertion of Course into DB failed');
            } else { 
              console.log('SUCCESS: DEGREE: '+ i + ":" +item['name'] +' successfully entered into the DB.');
              counter++;
              if (counter >= (datas.length - 1)) mongoose.connection.close();
            };
          });
        })
      });
    }

    readJsonIntoDegreeRequirements(jsonContent){
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

module.exports = DegreeRequirementsImportScript;