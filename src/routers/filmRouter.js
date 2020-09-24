import express from 'express';

import FilmCrawl from '../libs/FilmCrawl';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('search', {
		search: '',
		list: [],
	});
});

router.get('/:search', async (req, res) => {
	const { search } = req.params;

	const list = await FilmCrawl.getFilmFromName(search);
	res.render('search', {
		search, list,
	});
});

export {
	router
}
