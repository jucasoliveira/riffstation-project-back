let express = require('express');
let router = express.Router();
let axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log('here');
    let http = require("https");

    let options = {
        "method": "GET",
        "hostname": "play.riffstation.com",
        "port": null,
        "path": "/api/mir/songs?source=youtube&source_id=oKsxPW6i3pM",
        "headers": {
            "cache-control": "no-cache",
        }
    };

    let request = http.request(options, function (response) {
        let chunks = [];

        response.on("data", function (chunk) {
            chunks.push(chunk);
        });

        response.on("end", function () {
            let body = Buffer.concat(chunks);
            res.send(JSON.parse(body));
        });
    });

    request.end();

});

module.exports = router;
