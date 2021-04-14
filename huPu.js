const http = require('./http')

hupu(1)
/**
 * @type 0-篮球热榜。1-足球热榜。2-步行街热榜
 */

function hupu(type) {
    var selector = ''
    switch (Number(type)) {
        case 0:
            selector = '#container > div > div > div.bbs-index-web-holder > div > div.bbs-index-web-right > div:nth-child(2) > div > div.itemListA'
            break;
        case 1:
            selector = '#container > div > div > div.bbs-index-web-holder > div > div.bbs-index-web-right > div:nth-child(3) > div > div.itemListA'
            break;
        case 2:
            selector = '#container > div > div > div.bbs-index-web-holder > div > div.bbs-index-web-right > div:nth-child(4) > div > div.itemListA'
            break;
        default:
           return; 
            break;
    }
    let url = 'https://www.hupu.com/'
    api(url, selector)
}


function api(url, selector) {
    http(url)
        .then(res => {
            var $ = res;
            var table = $(selector).find('a');
            var resData = [];
            table.each((i, e) => {
                resData.push({
                    index: i,
                    title: $(e).find('.hot-title').text(),
                    url: $(e).attr('href')
                })
            })
            console.log(resData);
        }).catch(err => {
            console.log(err);
        })
}
