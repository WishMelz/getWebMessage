const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
function http(url, decode = 'utf8') {
    return new Promise((resolve, rejext) => {
        request({ url, encoding: null }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var buf = iconv.decode(body, decode);//获取内容进行转码
                var $ = cheerio.load(buf); //初始化
                resolve($)
            } else {
                rejext(error)
            }
        });
    })
}
module.exports = http