const TAGS_TO_TRANSFORM = {
  'html': 'div',
  'head': 'div',
  'body': 'div'
};

/**
 * Transforms the specified tag name to another tag name if needed
 *
 * @param {String} tagName The name of the tag
 * @returns {String} The transformed tag name or the original if it doesn't need to be transformed
 */
export default function TransformTagName(tagName) {
  if (TAGS_TO_TRANSFORM.hasOwnProperty(tagName)) {
    return TAGS_TO_TRANSFORM[tagName];
  }
  else {
    return tagName;
  }
}
