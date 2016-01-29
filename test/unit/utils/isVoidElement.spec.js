import isVoidElement from 'utils/isVoidElement';

describe('Testing `utils/isVoidElement`', () => {

  it('should return whether the element is a void element', () => {
    expect(isVoidElement('img')).toBe(true);
    expect(isVoidElement('br')).toBe(true);
    expect(isVoidElement('div')).toBe(false);
    expect(isVoidElement('p')).toBe(false);
  });

});
