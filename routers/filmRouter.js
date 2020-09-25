const express = require('express');

const FilmCrawl = require('../libs/FilmCrawl');
const Film = require('../models/Film');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('search', {
		search: '',
		list: [],
	});
});

router.get('/:search', async (req, res) => {
	const { search } = req.params;
	console.log('search', search);

	const list = await FilmCrawl.getFilmFromName(search);

	res.render('search', {
		search, list,
	});
});

router.get('/film/:id', async (req, res) => {
	const { id } = req.params;
	console.log('view', id);

	const data = await FilmCrawl.getFilmData(id);
	const comments = await Film.getFilmComment(id);

	data.comments = comments;

	res.render('film-view', data);
});

router.post('/film/comment', async (req, res) => {
	const { comment, id } = req.body;
	console.log(comment, id);
	await Film.addFilmComment(id, comment);

	res.send(200);
});

module.exports = router
