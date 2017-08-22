const htmlparser2 = {
  parseDOM: jasmine.createSpy('parseDOM').and.returnValue('parsed')
};
const processNodes = jasmine.createSpy('processNodes').and.returnValue('processed');

const HtmlParser = require('inject!HtmlParser')({
  htmlparser2,
  './processNodes': processNodes
}).default;

describe('Testing: `HtmlParser`', () => {

  beforeEach(() => {
    processNodes.calls.reset();
    htmlparser2.parseDOM.calls.reset();
  });

  it('should parse the html string and process the resulting nodes with default options', () => {
    expect(HtmlParser('html')).toBe('processed');
    expect(htmlparser2.parseDOM).toHaveBeenCalledWith('html', {decodeEntities: true});
    expect(processNodes).toHaveBeenCalledWith('parsed', undefined);
  });

  it('should apply the options', () => {
    const transform = function() {};
    expect(HtmlParser('html', { decodeEntities:false, transform })).toBe('processed');
    expect(htmlparser2.parseDOM).toHaveBeenCalledWith('html', {decodeEntities: false});
    expect(processNodes).toHaveBeenCalledWith('parsed', transform);
  });

});
