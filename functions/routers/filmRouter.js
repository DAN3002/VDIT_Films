"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _FilmCrawl = _interopRequireDefault(require("../libs/FilmCrawl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.router = router;
router.get('/', (req, res) => {
  res.render('search', {
    search: '',
    list: []
  });
});
router.get('/:search', async (req, res) => {
  const {
    search
  } = req.params;
  const list = await _FilmCrawl.default.getFilmFromName(search);
  res.render('search', {
    search,
    list
  });
});