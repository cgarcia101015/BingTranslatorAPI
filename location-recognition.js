const request = require("request");

var URL = "https://www.ipapi.co/";

// console.log(URL);
URL += "json";




var info = request({
    url: URL,
    json: true
}, (err, response, body) => {
    if(!err && response.statusCode == 200) {
        IPAddress = {
            key: body.ip
        };
        console.log(body);
    
    }
    });

// console.log(IPAddress.body.ip);


// module.exports= IPAddress;
