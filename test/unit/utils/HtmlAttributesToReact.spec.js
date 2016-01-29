import HtmlAttributesToReact from 'utils/HtmlAttributesToReact';

describe('Testing `utils/HtmlAttributesToReact`', () => {

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
      checked: ''
    };

    const expectedReactAttributes = {
      className: 'testClass',
      htmlFor: 'testFor',
      minLength: 1,
      acceptCharset: 'testAcceptCharset',
      formNoValidate: 'testFormNoValidate',
      label: 'testLabel',
      'data-test': 'test',
      'aria-role': 'role',
      testattribute: 'testAttribute',
      'upper-case-test-attribute': 'upperTestAttribute',
      disabled: 'disabled',
      checked: 'checked'
    };

    expect(HtmlAttributesToReact(htmlAttributes)).toEqual(expectedReactAttributes);

  });

});
