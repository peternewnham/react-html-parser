const generatePropsFromAttributes = jasmine.createSpy('generatePropsFromAttributes');
const processNodes = jasmine.createSpy('processNodes');
const VoidElements = ['void'];
const isValidTagOrAttributeName = jasmine.createSpy('isValidTagOrAttributeName');

const TagElementType = require('inject!elementTypes/TagElementType')({
  '../utils/generatePropsFromAttributes': generatePropsFromAttributes,
  '../processNodes': processNodes,
  '../dom/elements/VoidElements': VoidElements,
  '../utils/isValidTagOrAttributeName': isValidTagOrAttributeName
}).default;

describe('Testing `elementTypes/TagElementType', () => {

  let transform;
  beforeEach(() => {
    generatePropsFromAttributes.calls.reset();
    generatePropsFromAttributes.and.callFake(attrs => attrs);
    processNodes.calls.reset();
    processNodes.and.returnValue('children');
    isValidTagOrAttributeName.calls.reset();
    isValidTagOrAttributeName.and.returnValue(true);
    transform = function() {};
  });

  it('should return a React element corresponding to the node name', () => {

    const node1 = {
      name: 'h1',
      attribs: {
        id: 'test'
      },
      children: 'node 1 children'
    };
    const node1Element = TagElementType(node1, 'key', transform);
    expect(node1Element.type).toBe('h1');
    expect(node1Element.props).toEqual({
      id: 'test',
      children: 'children'
    });
    expect(processNodes).toHaveBeenCalledWith('node 1 children', transform);
    expect(generatePropsFromAttributes).toHaveBeenCalledWith(node1.attribs, 'key');

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

  it('should return null for invalid tag types', () => {
    isValidTagOrAttributeName.and.returnValue(false);
    const invalidNode = {
      name: 'invalid'
    };
    expect(TagElementType(invalidNode)).toBeNull();
  });

});
