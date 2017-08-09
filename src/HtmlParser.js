import htmlparser2 from 'htmlparser2';
import ProcessNodes from './utils/ProcessNodes';

/**
 * Parses a HTML string and returns a list of React components generated from it
 *
 * @param {String} html The HTML to convert into React component
 * @param {Object} options Options to pass
 * @returns {Array} List of top level React elements
 */
export default function HtmlParser(html, options={}) {
  options = {
    decodeEntities: true,
    ...options
  };
  const nodes = htmlparser2.parseDOM(html, options);
  return ProcessNodes(nodes);
}
