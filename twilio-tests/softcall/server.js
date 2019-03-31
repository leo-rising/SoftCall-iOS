const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
bool needCall = false;
bool sendCoords = false;

http
  .createServer((req, res) => {

// wait for button press (/request)

  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+14085075656',    // USER'S PHONE #
         from: '+14245811117'   // TWILIO PHONE #
       })
      .then(call => console.log(call.sid));
      if () {
        call => console.log(call.sid));

      }


// run ./ngrok http 1337
// grab the randomly-generated url
// go to twilio console > phone # >
