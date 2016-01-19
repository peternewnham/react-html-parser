import UnsupportedElementType from 'elementTypes/UnsupportedElementType';

describe('Testing `elementTypes/UnsupportedElementType', () => {

  it('should always return null', () => {
    expect(UnsupportedElementType()).toBeNull();
    expect(UnsupportedElementType('test')).toBeNull();
    expect(UnsupportedElementType({}, 'test')).toBeNull();
  });

});
