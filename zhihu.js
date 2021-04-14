// 微博热搜
const api = require('./api')
const request = require('request');
let url = 'https://www.zhihu.com/api/v4/search/top_search'


api(url)
    .then(res => {
        // console.log(res);
        let data = res.top_search.words
        let resData = [];
        data.forEach((v, i) => {
            resData.push({
                index: i,
                title: v.display_query,
                url: "https://www.zhihu.com/search?q=" + v.query
            })
        });
        console.log(resData);
    })