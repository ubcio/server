"use strict";

var fs = require("fs");
var Paths = require('../paths');
var mongoose = require('mongoose');
var Courses = require('../models/courses.js');

class ImportScript {

    constructor() {
      console.log('Creating Importer Class');
      this.filepath = Paths.coursesPath;
      this.mongourl = 'mongodb://localhost:27017/ubcio';
      mongoose.connect(this.mongourl);
    }

    getDataFromJsonFile(filepath){
      var contents = fs.readFileSync(filepath);
      var jsonContent = JSON.parse(contents);
      return jsonContent;
    }

    closeConnection(){
      mongoose.connection.close();
    }
}

module.exports = ImportScript;