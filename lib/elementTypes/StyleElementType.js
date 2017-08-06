'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StyleElementType;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GeneratePropsFromAttributes = require('../utils/GeneratePropsFromAttributes');

var _GeneratePropsFromAttributes2 = _interopRequireDefault(_GeneratePropsFromAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a <style> element to a React element
 *
 * @param {Object} node The style node
 * @param {String} key The key to give the React element
 * @returns {React.Element} The React style element
 */
function StyleElementType(node, key) {

  // The style element only ever has a single child which is the styles so try and find this to add as
  // a child to the style element that will be created
  var styles = void 0;
  if (node.children.length > 0) {
    styles = node.children[0].data;
  }

  // generate props
  var props = (0, _GeneratePropsFromAttributes2.default)(node.attribs, key);

  // create and return the element
  return _react2.default.createElement('style', props, styles);
}