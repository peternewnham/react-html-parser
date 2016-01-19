import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HtmlParser from 'HtmlParser';

class HtmlParserComponent extends React.Component {
  render() {
    return <div>{HtmlParser(this.props.html)}</div>;
  }
}

const test = function(html, expected=null) {
  expect(ReactDOMServer.renderToStaticMarkup(<HtmlParserComponent html={html} />))
    .toBe(`<div>${expected === null && html || expected}</div>`);
};

describe('Integration tests: ', () => {

  it('should render a simple element', () => {
    test('<div>test</div>');
  });

  it('should render multiple sibling elements', () => {
    test('<div>test1</div><span>test2</span><footer>test3</footer>');
  });

  it('should render nested elements', () => {
    test('<div><span>test1</span><div><ul><li>test2</li><li>test3</li></ul></div></div>');
  });

  it('should handle bad html', () => {
    test(
      '<div class=test>test<ul><li>test1<li>test2</ul><span>test</span></div>',
      '<div class="test">test<ul><li>test1</li><li>test2</li></ul><span>test</span></div>'
    );
  });

  it('should ignore doctypes', () => {
    test(
      '<!doctype html><div>test</div>',
      '<div>test</div>'
    );
  });

  it('should ignore comments', () => {
    test('<div>test1</div><!-- comment --><div>test2</div>', '<div>test1</div><div>test2</div>');
  });

  it('should ignore script tags', () => {
    test('<script>alert(1)</script>', '');
  });

  it('should ignore event handlers', () => {
    test('<a href="#" onclick="alert(1)">test</a>', '<a href="#">test</a>');
  });

  it('should handle attributes', () => {
    test('<div class="test" id="test" aria-test="test" data-test="test">test</div>');
  });

  it('should handle inline styles', () => {
    test('<div style="border-radius:1px;background:red;">test</div>');
  });

  it('should transform a html tag to a div', () => {
    test('<html>test</html>', '<div>test</div>');
  });

  it('should transform a head tag to a div', () => {
    test('<head>test</head>', '<div>test</div>');
  });

  it('should transform a body tag to a div', () => {
    test('<body>test</body>', '<div>test</div>');
  });

});
