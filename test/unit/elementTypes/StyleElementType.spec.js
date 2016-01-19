const props = {
  prop1: 'value1',
  prop2: 'value2'
};
const GeneratePropsFromAttributes = jasmine.createSpy('GeneratePropsFromAttributes').and.returnValue(props);

const StyleElementType = require('inject!elementTypes/StyleElementType')({
  '../utils/GeneratePropsFromAttributes': GeneratePropsFromAttributes
}).default;

describe('Testing `elementTypes/StyleElementType', () => {

  beforeEach(() => {
    GeneratePropsFromAttributes.calls.reset();
  });

  it('should return a `style` element with a single text child if the node has children', () => {
    const node = {
      children: [
        { data: 'style data' }
      ]
    };
    const styleElement = StyleElementType(node, 'key');
    expect(styleElement.type).toBe('style');
    expect(styleElement.props).toEqual({
      prop1: 'value1',
      prop2: 'value2',
      children: 'style data'
    });
  });

  it('should return a `style` element with no children if the node has no children', () => {
    const node = {
      children: []
    };
    const styleElement = StyleElementType(node, 'key');
    expect(styleElement.type).toBe('style');
    expect(styleElement.props).toEqual({
      prop1: 'value1',
      prop2: 'value2',
      children: undefined
    });
  });

});
