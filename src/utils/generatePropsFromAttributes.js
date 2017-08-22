import htmlAttributesToReact from './htmlAttributesToReact';
import inlineStyleToObject from './inlineStyleToObject';

/**
 * Generates props for a React element from an object of HTML attributes
 *
 * @param {Object} attributes The HTML attributes
 * @param {String} key The key to give the react element
 */
export default function generatePropsFromAttributes(attributes, key) {

  // generate props
  const props = Object.assign({}, htmlAttributesToReact(attributes), { key });

  // if there is a style prop then convert it to a React style object
  if (props.style) {
    props.style = inlineStyleToObject(props.style);
  }

  return props;

}
