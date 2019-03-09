require('dotenv').config();
const request = require('request');
const uuidv4 = require('uuid/v4');
// var keys = require('./keys.js');
// console.log(APIKeys.subKey);
/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.

If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */
const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;

console.log(subscriptionKey);
if (!subscriptionKey) {
	throw new Error('Environment variable for your subscription key is not set.');
}

let options = {
	method: 'POST',
	baseUrl: 'https://api.cognitive.microsofttranslator.com/',
	url: 'translate',
	qs: {
		'api-version': '3.0',
		// to: 'it',
		// to: 'sv',
		to: 'it'
	},
	headers: {
		'Ocp-Apim-Subscription-Key': subscriptionKey,
		'Content-type': 'application/json',
		'X-ClientTraceId': uuidv4().toString()
	},
	body: [
		{
			text: 'Hello, where is the nearest train station?'
		}
	],
	json: true
};

request(options, function(err, res, body) {
	console.log(JSON.stringify(body, null, 4));
	// console.log(JSON.stringify(body, null, 4));
});
