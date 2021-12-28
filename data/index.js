const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

const URL = `https://phimplus.xyz`;
//const URL = `https://mphimmoiitv.com/danh-sach/phim-chieu-rap.html`;

const options = {
    uri: URL,
    transform: function (body) {
        return cheerio.load(body);
    }
};

(async function crawler() {
    try {
        var $ = await request(options);
    } catch (error) {
        return error;
    }

    let data = [];

    $('.halim-item').each((index, el) => {
        const id = index;
        const title = $(el).find('.halim-thumb').find('.halim-post-title p').text();
        const image = $(el).find('.halim-thumb figure').find('img').attr('src');

        console.log(id, title, image);

        data.push({id, title, image });
    });

    // $('.film-item').each((index, el) => {
    //     const id = index;
    //     const title = $(el).find('a').find('.title').find('.real-name').text();
    //     const image = $(el).find('a').find('img').attr('src');

    //     console.log(index, title, image);

    //     data.push({index, title, image });
    // });

    fs.writeFileSync('data1.json', JSON.stringify(data));
})();