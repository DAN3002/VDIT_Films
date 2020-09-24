const request = require('request');
const cheerio = require('cheerio');

const Crawl = {
	async parseDOMFromURL(url) {
		return new Promise((resolve, reject) => {
			// eslint-disable-next-line handle-callback-err
			request(url, (err, res, body) => {
				// if(err) reject(err);
				console.log("!234");
				console.log(body);
				resolve(cheerio.load(body));
			});
		})
	}
};

module.exports = Crawl;
