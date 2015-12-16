"use strict";

var fs = require("fs");


class ImportScript {

    constructor() {
      console.log('Creating Importer Class');
      this.filepath = "";
    }

    getDataFromJsonFile(filepath){
      var contents = fs.readFileSync(filepath);
      var jsonContent = JSON.parse(contents);
      console.log('Read file contents');
      return jsonContent;
    }
    
}

module.exports = ImportScript;