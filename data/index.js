const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

const URL = `https://phimplus.xyz/`;

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
        const title = $(el).find('.halim-thumb').find('.halim-post-title p').text();
        const image = $(el).find('.halim-thumb figure').find('.lazy img-responsive').prop('src');

        console.log(title, image);

        data.push({ title, image });
    });

    fs.writeFileSync('data.json', JSON.stringify(data));
})();