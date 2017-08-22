const isValidTagOrAttributeName = jasmine.createSpy('isValidTagOrAttributeName');

const htmlAttributesToReact = require('inject!utils/htmlAttributesToReact')({
  './isValidTagOrAttributeName': isValidTagOrAttributeName
}).default;

describe('Testing `utils/htmlAttributesToReact`', () => {

  beforeEach(() => {
    isValidTagOrAttributeName.calls.reset();
    isValidTagOrAttributeName.and.returnValue(true);
  });

  it('should return an object of react html attributes from an object of standard html attributes', () => {

    const htmlAttributes = {
      // class and for have special mappings
      class: 'testClass',
      for: 'testFor',
      // test a few other attributes
      minlength: 1,
      'accept-charset': 'testAcceptCharset',
      formnovalidate: 'testFormNoValidate',
      // it should also lowercase all attributes before using them
      LABEL: 'testLabel',
      // custom attributes - data-* & aria-*
      'data-test': 'test',
      'aria-role': 'role',
      // it should also use non specified attributes (although react will filter these out)
      testattribute: 'testAttribute',
      'UPPER-CASE-TEST-ATTRIBUTE': 'upperTestAttribute',
      // boolean attributes
      disabled: '',
      checked: '',
      autoplay: ''
    };

    const expectedReactAttributes = {
      className: 'testClass',
      htmlFor: 'testFor',
      minLength: 1,
      acceptCharset: 'testAcceptCharset',
      formNoValidate: 'formNoValidate',
      label: 'testLabel',
      'data-test': 'test',
      'aria-role': 'role',
      testattribute: 'testAttribute',
      'upper-case-test-attribute': 'upperTestAttribute',
      disabled: 'disabled',
      checked: 'checked',
      autoPlay: 'autoPlay'
    };

    expect(htmlAttributesToReact(htmlAttributes)).toEqual(expectedReactAttributes);

  });

  it('should filter out invalid attributes', () => {
    isValidTagOrAttributeName.and.callFake(attribute => {
      return attribute === 'attribute1' || attribute === 'attribute3';
    });
    const validKeys = htmlAttributesToReact({
      attribute1: '',
      attribute2: '',
      attribute3: ''
    });
    expect(Object.keys(validKeys)).toEqual(['attribute1', 'attribute3']);
  });

});
