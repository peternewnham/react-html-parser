import isValidTagOrAttributeName from 'utils/isValidTagOrAttributeName';

describe('Testing `utils/isValidTagOrAttributeName`', () => {

  it('valid names must start with a letter', () => {
    expect(isValidTagOrAttributeName('1')).toBe(false);
    expect(isValidTagOrAttributeName(':')).toBe(false);
    expect(isValidTagOrAttributeName('asd')).toBe(true);
  });

  it('valid names can contain letters', () => {
    expect(isValidTagOrAttributeName('abc')).toBe(true);
  });

  it('valid names can contain numbers', () => {
    expect(isValidTagOrAttributeName('a1')).toBe(true);
  });

  it('valid names can contain colons', () => {
    expect(isValidTagOrAttributeName('a:b')).toBe(true);
  });

  it('valid names can contain underscores', () => {
    expect(isValidTagOrAttributeName('a_b')).toBe(true);
  });

  it('valid names can contain dots', () => {
    expect(isValidTagOrAttributeName('a.b')).toBe(true);
  });

  it('valid names can contain hyphens', () => {
    expect(isValidTagOrAttributeName('a-b')).toBe(true);
  });

  it('valid names cannot contain invalid characters', () => {
    expect(isValidTagOrAttributeName('a!b')).toBe(false);
    expect(isValidTagOrAttributeName('a/b')).toBe(false);
  });

});
