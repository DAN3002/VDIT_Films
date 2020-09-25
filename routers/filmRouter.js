const express = require('express');

const FilmCrawl = require('../libs/FilmCrawl');

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

router.get('/film/:id', async (req, res) => {
	const { id } = req.params;
	const data = await FilmCrawl.getFilmData(id);

	res.render('film-view', data);
});

module.exports = router
