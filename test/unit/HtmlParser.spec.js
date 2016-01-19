const htmlparser2 = {
  parseDOM: jasmine.createSpy('parseDOM').and.returnValue('parsed')
};
const ProcessNodes = jasmine.createSpy('ProcessNodes').and.returnValue('processed');

const HtmlParser = require('inject!HtmlParser')({
  htmlparser2,
  './utils/ProcessNodes': ProcessNodes
}).default;

describe('Testing: `HtmlParser`', () => {

  beforeEach(() => {
    ProcessNodes.calls.reset();
    htmlparser2.parseDOM.calls.reset();
  });

  it('should parse the html string and process the resulting nodes', () => {
    expect(HtmlParser('html')).toBe('processed');
    expect(htmlparser2.parseDOM).toHaveBeenCalledWith('html');
    expect(ProcessNodes).toHaveBeenCalledWith('parsed');
  });

});
