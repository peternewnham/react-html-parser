import inlineStyleToObject from 'utils/inlineStyleToObject';

describe('Testing `utils/inlineStyleToObject', () => {

  it('should return an empty object if the inline style is empty', () => {
    expect(inlineStyleToObject()).toEqual({});
    expect(inlineStyleToObject('')).toEqual({});
  });

  it('should camelise each style whenever there is a hyphen', () => {
    const inlineStyle = 'text-decoration:none;-webkit-border-radius:5px;';
    const expectedStyleObject = {
      textDecoration: 'none',
      'WebkitBorderRadius': '5px'
    };
    expect(inlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should ignore invalid style properties', () => {
    const inlineStyle = 'font-color:red;invalid;color:blue;';
    const expectedStyleObject = {
      fontColor: 'red',
      color: 'blue'
    };
    expect(inlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should not upper case the beginning `m` when using the `-ms-` vendor prefix', () => {
    const inlineStyle = '-ms-border-radius:10px';
    const expectedStyleObject = {
      'msBorderRadius': '10px'
    };
    expect(inlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should parse styles containing multiple colons correctly', () => {
    const inlineStyle = 'background:url(https://test.com/image.png);color:white;';
    const expectedStyleObject = {
      background: 'url(https://test.com/image.png)',
      color: 'white'
    };
    expect(inlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

  it('should parse style values containing upper-case characters correctly', () => {
    const inlineStyle = 'background:url(https://test.com/IMAGE.png);';
    const expectedStyleObject = {
      background: 'url(https://test.com/IMAGE.png)',
    };
    expect(inlineStyleToObject(inlineStyle)).toEqual(expectedStyleObject);
  });

});
