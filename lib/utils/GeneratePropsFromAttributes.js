'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GeneratePropsFromAttributes;

var _HtmlAttributesToReact = require('./HtmlAttributesToReact');

var _HtmlAttributesToReact2 = _interopRequireDefault(_HtmlAttributesToReact);

var _InlineStyleToObject = require('./InlineStyleToObject');

var _InlineStyleToObject2 = _interopRequireDefault(_InlineStyleToObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates props for a React element from an object of HTML attributes
 *
 * @param {Object} attributes The HTML attributes
 * @param {String} key The key to give the react element
 */
function GeneratePropsFromAttributes(attributes, key) {

  // generate props
  var props = _extends({}, (0, _HtmlAttributesToReact2.default)(attributes), { key: key });

  // if there is a style prop then convert it to a React style object
  if (props.style) {
    props.style = (0, _InlineStyleToObject2.default)(props.style);
  }

  return props;
}