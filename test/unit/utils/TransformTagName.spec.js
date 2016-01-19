import TransformTagName from 'utils/TransformTagName';

describe('Testing `utils/TransformTagName`', () => {

  it('should transform the tag name if needed', () => {
    expect(TransformTagName('html')).toBe('div');
    expect(TransformTagName('head')).toBe('div');
    expect(TransformTagName('body')).toBe('div');
    expect(TransformTagName('a')).toBe('a');
    expect(TransformTagName('div')).toBe('div');
    expect(TransformTagName('span')).toBe('span');
  });

});
