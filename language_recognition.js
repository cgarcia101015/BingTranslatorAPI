// set endpoint and your access key
require('dotenv').config();
var axios = require("axios");
let languageDetected;
var ip = '160.39.7.165'
var access_key = process.env.access_key;

function recogLang() {
    var queryURL = 'http://api.ipstack.com/' + ip + '?access_key=' + access_key;

    axios.get(queryURL).then(
        function (response) {
            console.log(" Country Code: " + response.data.location.languages[0].code);
            console.log(" Language: " + response.data.location.languages[0].name);
            
            languageDetected = response.data.location.languages[0].name;
        });
};

recogLang();
