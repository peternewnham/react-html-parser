const GeneratePropsFromAttributes = jasmine.createSpy('GeneratePropsFromAttributes').and.callFake(attrs => attrs);
const ProcessNodes = jasmine.createSpy('ProcessNodes').and.returnValue('children');
const VoidElements = ['void'];

const TagElementType = require('inject!elementTypes/TagElementType')({
  '../utils/GeneratePropsFromAttributes': GeneratePropsFromAttributes,
  '../utils/ProcessNodes': ProcessNodes,
  '../dom/elements/VoidElements': VoidElements
}).default;

describe('Testing `elementTypes/TagElementType', () => {

  beforeEach(() => {
    GeneratePropsFromAttributes.calls.reset();
    ProcessNodes.calls.reset();
  });

  it('should return a React element corresponding to the node name', () => {

    const node1 = {
      name: 'h1',
      attribs: {
        id: 'test'
      },
      children: 'node 1 children'
    };
    const node1Element = TagElementType(node1, 'key');
    expect(node1Element.type).toBe('h1');
    expect(node1Element.props).toEqual({
      id: 'test',
      children: 'children'
    });
    expect(ProcessNodes).toHaveBeenCalledWith('node 1 children');
    expect(GeneratePropsFromAttributes).toHaveBeenCalledWith(node1.attribs, 'key');

  });

  it('should not pass though children for void elements', () => {

    const voidNode = {
      name: 'void',
      attribs: {
        id: 'test'
      },
      children: 'child'
    };

    const voidElement = TagElementType(voidNode, 'key');
    expect(voidElement.type).toBe('void');
    expect(voidElement.props.children).toBe(null);

  });

});
