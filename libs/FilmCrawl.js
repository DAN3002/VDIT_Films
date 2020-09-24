const Crawl = require('./Crawl.js');

const FilmCrawl = {
	async getFilmFromName(name) {
		const url = `http://www.phimmoizz.net/tim-kiem/${name}/`
		const $ = await Crawl.parseDOMFromURL(url);

		const films = $('li.movie-item');

		const out = [];

		for(let i = 0; i < films.length; i++) {
			const el = $(films[i]);

			const title = el.find('.movie-title-1').text();
			const name = el.find('.movie-title-2').text();
			const time = el.find('.movie-title-chap').text();
			const link = el.find('a.block-wrapper').attr('href')
								.replace('phim/', '')
								.replace('/', '');

			const image = el.find('.movie-thumbnail').attr('style')
							.match(/\(.+\)/g)[0]
							.replace(/[\(\)]/g, '');

			out.push({
				title, name, time, image, link
			})
		}

		return out;
	}
}

module.exports = FilmCrawl;
