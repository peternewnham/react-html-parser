import isEmptyTextNode from 'utils/isEmptyTextNode';

describe('Testing `utils/isEmptyTextNode`', () => {

  it('should return true for text nodes that contain a line break', () => {

    const nodes = [
      { type: 'text', data:'\n' },
      { type: 'text', data:'   \n' },
      { type: 'text', data:'\n   ' },
      { type: 'text', data:'    \n   ' },
      { type: 'text', data:'\r\n' },
      { type: 'text', data:'   \r\n' },
      { type: 'text', data:'\r\n   ' },
      { type: 'text', data:'    \r\n   ' }
    ];

    nodes.forEach(node => {
      expect(isEmptyTextNode(node)).toBe(true);
    });

  });

  it('should return false for text nodes not containing a line break', () => {
    expect(isEmptyTextNode({ type:'text', data: '' })).toBe(false);
  });

  it('should return false for non text nodes', () => {
    expect(isEmptyTextNode({ type:'tag' })).toBe(false);
  });

});
