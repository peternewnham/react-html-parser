import InlineStyleToObject from 'utils/InlineStyleToObject';

describe('Testing `utils/InlineStyleToObject', () => {

  it('should return an empty object if the inline style is empty', () => {
    expect(InlineStyleToObject()).toEqual({});
    expect(InlineStyleToObject('')).toEqual({});
  });

  it('should camelise each style whenever there is a hyphen', () => {
    const inlineStyle = 'text-decoration:none;-webkit-border-radius:5px;';
    const expectedStyleObject = {
      textDecoration: 'none',
      'WebkitBorderRadius': '5px'
    };
    expect(InlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should ignore invalid style properties', () => {
    const inlineStyle = 'font-color:red;invalid;color:blue;';
    const expectedStyleObject = {
      fontColor: 'red',
      color: 'blue'
    };
    expect(InlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should not upper case the beginning `m` when using the `-ms-` vendor prefix', () => {
    const inlineStyle = '-ms-border-radius:10px';
    const expectedStyleObject = {
      'msBorderRadius': '10px'
    };
    expect(InlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

});
