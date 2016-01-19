const ElementTypes = {
  text: jasmine.createSpy('text'),
  type1: jasmine.createSpy('type1').and.returnValue('type1'),
  type2: jasmine.createSpy('type2').and.returnValue('type2')
};

const ProcessNodes = require('inject!utils/ProcessNodes')({
  '../elementTypes': ElementTypes
}).default;

describe('Testing `utils/ProcessNodes', () => {

  beforeEach(() => {
    Object.keys(ElementTypes).forEach(type => {
      ElementTypes[type].calls.reset();
    });
  });

  it('should filter out empty string text nodes that container a line break', () => {

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

    expect(ProcessNodes(nodes).length).toBe(0);

  });

  it('should convert each node to the correct element type', () => {

    const nodes = [
      { type:'type1', data:'type1 1' },
      { type:'type2', data:'type2 1' },
      { type:'type1', data:'type1 2' }
    ];

    const processedNodes = ProcessNodes(nodes);
    expect(processedNodes).toEqual(['type1', 'type2', 'type1']);

    expect(ElementTypes.type1.calls.count()).toBe(2);
    expect(ElementTypes.type1.calls.argsFor(0)).toEqual([nodes[0], 'rhp-0']);
    expect(ElementTypes.type1.calls.argsFor(1)).toEqual([nodes[2], 'rhp-2']);

    expect(ElementTypes.type2.calls.count()).toBe(1);
    expect(ElementTypes.type2.calls.argsFor(0)).toEqual([nodes[1], 'rhp-1']);

  });

});
