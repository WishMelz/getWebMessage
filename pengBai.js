// 微博热搜
const http = require('./http')
let url = 'https://www.thepaper.cn/'

/**
 * 
 * @param {number} type 0-热新闻 1-热话题。 
 * @param {number} day 天数 1 3 7
 */
function news(type = 1, day = 1) {
    let selector = '';
    let selectorDay = ''
    switch (Number(type)) {
        case 0:
            selector = '#listhot'
            break;
        case 1:
            selector = '#topichot'
            break;
        default:
            break;
    }
    switch (Number(day)) {
        case 1:
            selectorDay = '0'
            break;
        case 3:
            selectorDay = '1'
            break;
        case 7:
            selectorDay = '2'
            break;
        default:
            break;
    }

    api(url, selector + selectorDay)
}
news(1, 3);



function api(u, s) {
    http(u)
        .then(res => {
            var $ = res;
            var table = $(s).find('a');
            var resData = []
            // console.log(table.html());
            table.each((i, e) => {
                resData.push({
                    index: i,
                    title: $(e).text(),
                    url: "https://www.thepaper.cn/" + $(e).attr('href')
                })

            })
            console.log(resData);
        })
        .catch(err => {
            console.log(err);
        })
}