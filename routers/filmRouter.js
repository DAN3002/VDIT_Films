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

	console.log(list);
	res.render('search', {
		search, list,
	});
});

module.exports = router
