// 百度实时热点
const http = require('./http')
let url = 'http://top.baidu.com/buzz?b=1'
http(url, 'gb2312')
    .then(res => {
        var $ = res;
        var table = $('#main > div.mainBody > div > table > tbody').find('.keyword a.list-title')
        var resData = []
        table.each((i, e) => {
            resData.push({
                index: i,
                title: $(e).text(),
                url: $(e).attr('href')
            })

        })
        console.log(resData);
    })
    .catch(err => {
        console.log(err);
    })