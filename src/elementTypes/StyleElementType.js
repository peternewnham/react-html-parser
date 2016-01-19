import React from 'react';
import GenerateElementProps from '../utils/GeneratePropsFromAttributes';

/**
 * Converts a <style> element to a React element
 *
 * @param {Object} node The style node
 * @param {String} key The key to give the React element
 * @returns {React.Element} The React style element
 */
export default function StyleElementType(node, key) {

  // The style element only ever has a single child which is the styles so try and find this to add as
  // a child to the style element that will be created
  let styles;
  if (node.children.length > 0) {
    styles = node.children[0].data;
  }

  // generate props
  const props = GenerateElementProps(node.attribs, key);

  // create and return the element
  return React.createElement('style', props, styles);

}
