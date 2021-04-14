// 微博热搜
const http = require('./http')
let url = 'https://s.weibo.com/top/summary'
http(url)
    .then(res => {
        var $ = res;
        var table = $('#pl_top_realtimehot > table > tbody').find('tr .td-02 a')
        var resData = []
        table.each((i, e) => {
            resData.push({
                index: i,
                title: $(e).text(),
                url: "https://s.weibo.com" + $(e).attr('href')
            })

        })
        console.log(resData);
    })
    .catch(err => {
        console.log(err);
    })