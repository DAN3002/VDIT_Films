"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Crawl = _interopRequireDefault(require("./Crawl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilmCrawl = {
  async getFilmFromName(name) {
    const url = `http://www.phimmoizz.net/tim-kiem/${name}/`;
    const $ = await _Crawl.default.parseDOMFromURL(url);
    const films = $('li.movie-item');
    const out = [];

    for (let i = 0; i < films.length; i++) {
      const el = $(films[i]);
      const title = el.find('.movie-title-1').text();
      const name = el.find('.movie-title-2').text();
      const time = el.find('.movie-title-chap').text();
      const link = el.find('a.block-wrapper').attr('href').replace('phim/', '').replace('/', '');
      const image = el.find('.movie-thumbnail').attr('style').match(/\(.+\)/g)[0].replace(/[\(\)]/g, '');
      out.push({
        title,
        name,
        time,
        image,
        link
      });
    }

    return out;
  }

};
var _default = FilmCrawl;
exports.default = _default;