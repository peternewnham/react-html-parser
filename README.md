# React HTML Parser

A utility for converting HTML strings into [React](https://facebook.github.io/react/) components. Avoids the use of dangerouslySetInnerHTML and converts standard HTML elements, attributes and inline styles into their React equivalents.

[Try the Live Demo](https://wrakky.github.io/react-html-parser)

[![Travis branch](https://img.shields.io/travis/wrakky/react-html-parser/master.svg)](https://travis-ci.org/wrakky/react-html-parser)
[![Coveralls](https://img.shields.io/coveralls/wrakky/react-html-parser.svg)](https://coveralls.io/github/wrakky/react-html-parser)
[![npm](https://img.shields.io/npm/v/react-html-parser.svg)](https://www.npmjs.com/package/react-html-parser)
[![David](https://img.shields.io/david/wrakky/react-html-parser.svg)](https://david-dm.org/wrakky/react-html-parser)

## Install

```
npm install react-html-parser
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