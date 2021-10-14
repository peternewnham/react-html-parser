const VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;

const nameCache = {};

export default function isValidTagOrAttributeName(tagName) {
  if(tagName === 'constructor') {
    return false;
  }

  if (!nameCache.hasOwnProperty(tagName)) {
    nameCache[tagName] = VALID_TAG_REGEX.test(tagName);
  }

  return nameCache[tagName];
}
