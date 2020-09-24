import rp from 'request-promise';
import cheerio from 'cheerio';

const Crawl = {
	parseDOMFromURL(url) {
		const options = {
			uri: url,
			transform: function (body) {
			  return cheerio.load(body);
			},
		};
		return rp(options);
	}
};

export default Crawl;
