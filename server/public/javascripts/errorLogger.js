"use strict";

var fs = require('fs');
var twiliotokens = require('../../twiliotokens.js');
var client = require('twilio')(twiliotokens.accountSid, twiliotokens.authToken);
var phoneNumbers = require('../../phonenumbers.js');

class ErrorLogger {

    constructor() {
    }

    logError(error) {
        var currentdate = new Date();
        var datetime = "Time: " + currentdate.getDate() + "/"+(currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var errordata = datetime + " => " + error;
        fs.appendFile('../../logs/logs.txt', errordata, function (err) {
          if (err) throw err;
          console.log('Error was logged to the file');
      });
    }

    sendText(err) {
        var txtmessage = "Error occured on UBCIO Server: " + err;
        //Send an SMS text message
        client.sendMessage({

            to: phoneNumbers.abrarmusa, // Any number Twilio can deliver to
            from: phoneNumbers.twilionum, // A number you bought from Twilio and can use for outbound communication
            body: txtmessage

        }, function(err, responseData) { //this function is executed when a response is received from Twilio
            if (!err) { // "err" is an error received during the request, if any
                // "responseData" is a JavaScript object containing data received from Twilio.
                // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
                // http://www.twilio.com/docs/api/rest/sending-sms#example-1
                console.log(responseData.from); // outputs "+14506667788"
                console.log(responseData.body); // outputs "word to your mother."

            } else {
                var currentdate = new Date();
                var datetime = "Time: " + currentdate.getDate() + "/"+(currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
                var errordata = datetime + " => " + err;
                fs.appendFile('../../logs/logs.txt', errordata, function (err) {
                  if (err) throw err;
                  console.log('Error was logged to the file');
              });
            }
        });
}


}

module.exports = ErrorLogger;