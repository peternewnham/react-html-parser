'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TagElementType;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProcessNodes = require('../utils/ProcessNodes');

var _ProcessNodes2 = _interopRequireDefault(_ProcessNodes);

var _GeneratePropsFromAttributes = require('../utils/GeneratePropsFromAttributes');

var _GeneratePropsFromAttributes2 = _interopRequireDefault(_GeneratePropsFromAttributes);

var _TransformTagName = require('../utils/TransformTagName');

var _TransformTagName2 = _interopRequireDefault(_TransformTagName);

var _VoidElements = require('../dom/elements/VoidElements');

var _VoidElements2 = _interopRequireDefault(_VoidElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts any element (excluding style - see StyleElementType - and script) to a react element.
 *
 * @param {Object} node The tag node
 * @param {String} key The key to give the React element
 * @returns {React.Element} The React tag element
 */
function TagElementType(node, key) {

  // generate props
  var props = (0, _GeneratePropsFromAttributes2.default)(node.attribs, key);

  // transform the tag name if needed
  var tagName = (0, _TransformTagName2.default)(node.name);

  // If the node is not a void element and has children then process them
  var children = null;
  if (_VoidElements2.default.indexOf(tagName) === -1) {
    children = (0, _ProcessNodes2.default)(node.children);
  }

  // create and return the element
  return _react2.default.createElement(tagName, props, children);
}