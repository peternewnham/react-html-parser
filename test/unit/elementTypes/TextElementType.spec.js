import TextElementType from 'elementTypes/TextElementType';

describe('Testing `elementTypes/TextElementType', () => {

  it('should return the value from the node data property', () => {
    const node = {
      data: 'test'
    };
    expect(TextElementType(node)).toBe('test');
  });

});
