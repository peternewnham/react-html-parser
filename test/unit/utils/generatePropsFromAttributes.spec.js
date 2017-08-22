const htmlAttributesToReact = jasmine.createSpy('htmlAttributesToReact');
const inlineStyleToObject = jasmine.createSpy('inlineStyleToObject');

const generatePropsFromAttributes = require('inject!utils/generatePropsFromAttributes')({
  './htmlAttributesToReact': htmlAttributesToReact,
  './inlineStyleToObject': inlineStyleToObject
}).default;

describe('Testing `utils/generatePropsFromAttributes`', () => {

  beforeEach(() => {
    htmlAttributesToReact.calls.reset();
    htmlAttributesToReact.and.callFake(attribs => attribs);
    inlineStyleToObject.calls.reset();
    inlineStyleToObject.and.returnValue('converted-style');
  });

  it('should return an object with the converted html attributes and key', () => {

    const attributes = {
      attr1: 'one',
      attr2: 'two'
    };

    expect(generatePropsFromAttributes(attributes, 'the-key')).toEqual({
      attr1: 'one',
      attr2: 'two',
      key: 'the-key'
    });
    expect(htmlAttributesToReact).toHaveBeenCalledWith(attributes);

  });

  it('should return an object containing the converted style prop if there is a style html attribute', () => {

    const attributes = {
      style: 'style'
    };

    expect(generatePropsFromAttributes(attributes, 'style-key')).toEqual({
      style: 'converted-style',
      key: 'style-key'
    });
    expect(inlineStyleToObject).toHaveBeenCalledWith('style');

  });

});
