const HtmlAttributesToReact = jasmine.createSpy('HtmlAttributesToReact').and.callFake(attribs => attribs);
const InlineStyleToObject = jasmine.createSpy('InlineStyleToObject').and.returnValue('converted-style');

const GeneratePropsFromAttributes = require('inject!utils/GeneratePropsFromAttributes')({
  './HtmlAttributesToReact': HtmlAttributesToReact,
  './InlineStyleToObject': InlineStyleToObject
}).default;

describe('Testing `utils/GeneratePropsFromAttributes`', () => {

  beforeEach(() => {
    HtmlAttributesToReact.calls.reset();
    InlineStyleToObject.calls.reset();
  });

  it('should return an object with the converted html attributes and key', () => {

    const attributes = {
      attr1: 'one',
      attr2: 'two'
    };

    expect(GeneratePropsFromAttributes(attributes, 'the-key')).toEqual({
      attr1: 'one',
      attr2: 'two',
      key: 'the-key'
    });
    expect(HtmlAttributesToReact).toHaveBeenCalledWith(attributes);

  });

  it('should return an object containing the converted style prop if there is a style html attribute', () => {

    const attributes = {
      style: 'style'
    };

    expect(GeneratePropsFromAttributes(attributes, 'style-key')).toEqual({
      style: 'converted-style',
      key: 'style-key'
    });
    expect(InlineStyleToObject).toHaveBeenCalledWith('style');

  });

});
