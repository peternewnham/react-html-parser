'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlParser;

var _htmlparser = require('htmlparser2');

var _htmlparser2 = _interopRequireDefault(_htmlparser);

var _ProcessNodes = require('./utils/ProcessNodes');

var _ProcessNodes2 = _interopRequireDefault(_ProcessNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a HTML string and returns a list of React components generated from it
 *
 * @param {String} html The HTML to convert into React components
 * @returns {Array} List of top level React elements
 */
function HtmlParser(html) {
  var nodes = _htmlparser2.default.parseDOM(html, { decodeEntities: true });
  return (0, _ProcessNodes2.default)(nodes);
}