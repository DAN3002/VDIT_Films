"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Crawl = {
  parseDOMFromURL(url) {
    const options = {
      uri: url,
      transform: function (body) {
        return _cheerio.default.load(body);
      }
    };
    return (0, _requestPromise.default)(options);
  }

};
var _default = Crawl;
exports.default = _default;