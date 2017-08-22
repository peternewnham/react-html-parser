# React HTML Parser

A utility for converting HTML strings into [React](https://facebook.github.io/react/) components. Avoids the use of dangerouslySetInnerHTML and converts standard HTML elements, attributes and inline styles into their React equivalents.

[Try the Live Demo](https://wrakky.github.io/react-html-parser)

[![Travis branch](https://img.shields.io/travis/wrakky/react-html-parser/master.svg)](https://travis-ci.org/wrakky/react-html-parser)
[![Coveralls](https://img.shields.io/coveralls/wrakky/react-html-parser.svg)](https://coveralls.io/github/wrakky/react-html-parser)
[![npm](https://img.shields.io/npm/v/react-html-parser.svg)](https://www.npmjs.com/package/react-html-parser)
[![David](https://img.shields.io/david/wrakky/react-html-parser.svg)](https://david-dm.org/wrakky/react-html-parser)

## Install

```bash
npm install react-html-parser
# or
yarn add react-html-parser
```

## Usage

```javascript
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class HtmlComponent extends React.Component {
  render() {
    const html = '<div>Example HTML string</div>';
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}
```

## API

### `function ReactHtmlParser(html, [options])`
Takes an HTML string and returns equivalent React elements

#### Usage
```js
import ReactHtmlParser from 'react-html-parser';
```
#### Arguments
- html: The HTML string to parse
- options: Options object
  - decodeEntities=true *(boolean)*: Whether to decode html entities (defaults to true)
  - transform *(function)*: Transform function that is applied to every node

#### Transform Function
The transform function will be called for every node that is parsed by the library.

`function transform(node, index)`
##### Arguments
- `node`: The node being parsed. This is the [htmlparser2](https://github.com/fb55/htmlparser2) node object. Full details can be found on their project page but important properties are:
  - `type` (string): The type of node *(tag, text, style etc)*
  - `name` (string): The name of the node
  - `children` (array): Array of children nodes
  - `next` (node): The node's next sibling
  - `prev` (node): The node's previous sibling
  - `parent` (node): The node's parent
  - `data` (string): The text content, if the `type` is text
- `index` (number): The index of the node in relation to it's parent

#### Return Types
`return null`
Returning null will prevent the node and all of it's children from being rendered.
```js
function transform(node) {
  // do not render any <span> tags
  if (node.type === 'tag' && node.name === 'span') {
    return null;
  }
}
```
`return undefined`
If the function does not return anything, or returns undefined, then the default behaviour will occur and the parser will continue was usual.

`return React element`
React elements can be returned directly
```js
import React from 'react';
function transform(node) {
  if (node.type === 'tag' && node.name === 'b') {
    return <div>This was a bold tag</div>;
  }
}
```

### `function convertNodeToElement(node, index, transform)`
Processes a node and returns the React element to be rendered. This function can be used in conjunction with the previously described `transform` function to continue to process a node after modifying it.

#### Usage
```js
import { convertNodeToElement } from 'react-html-parser';
```
#### Arguments
- `node`: The node to process
- `index` (number): The index of the node in relation to it's parent
- `transform`: The transform function as described above

```js
import { convertNodeToElement } from 'react-html-parser';
function transform(node, index) {
  // convert <ul> to <ol>
  if (node.type === 'tag' && node.name === 'ul) {
    node.name = 'ol';
    return convertNodeToElement(node, index, transform);
  }
}
```