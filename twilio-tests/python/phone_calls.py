// RUN WITH "node make_call.js"

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACd86cb45b3b80e94323a3c29e9466d1ee';
const authToken = 'd1efabb19786f56d13052595ab8f0b90';
const client = require('twilio')(accountSid, authToken);

//var express = require('express');
//var bodyParser = require('body-parser');
//var dotenv = require('dotenv');
//dotenv.load();
//var app = express();


//app.listen(8080, () => console.log("listening"));

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+14085075656',
         from: '+14245811117'
       })
      .then(call => console.log(call.sid));
