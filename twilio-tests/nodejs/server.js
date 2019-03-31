const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    // change this line!
    twiml.say('Hey, guess what? You\'re cute. Have a good day.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');


// run ./ngrok http 1337
// grab the randomly-generated url
// go to twilio console > phone # >
// "A CALL COMES IN" -> webhook -> <that url> -> http get
// save changes
// call the # and enjoy :)
