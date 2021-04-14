const request = require('request');


function api(url) {
    return new Promise((resolve, rejext) => {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(body.top_search);
                if (typeof body == 'string') {
                    resolve(JSON.parse(body))
                } else {
                    resolve(body)
                }
            } else {
                rejext(error)
            }
        });
    })
}
module.exports = api