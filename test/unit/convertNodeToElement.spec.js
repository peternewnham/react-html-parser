const ElementTypes = {
  text: jasmine.createSpy('text'),
  type1: jasmine.createSpy('type1').and.returnValue('type1'),
  type2: jasmine.createSpy('type2').and.returnValue('type2')
};

const convertNodeToElement = require('inject!convertNodeToElement')({
  './elementTypes': ElementTypes
}).default;

describe('Testing `convertNodeToElement`', () => {

  let transform;
  beforeEach(() => {
    Object.keys(ElementTypes).forEach(type => {
      ElementTypes[type].calls.reset();
    });
    transform = function() {};
  });

  it('should convert each node to the correct element type', () => {

    const nodes = [
      { type:'type1', data:'type1 1' },
      { type:'type2', data:'type2 1' },
      { type:'type1', data:'type1 2' }
    ];

    const node1 = convertNodeToElement(nodes[0], 0, transform);
    expect(node1).toBe('type1');

    const node2 = convertNodeToElement(nodes[1], 1, transform);
    expect(node2).toBe('type2');

    const node3 = convertNodeToElement(nodes[2], 2, transform);
    expect(node3).toBe('type1');

    expect(ElementTypes.type1.calls.count()).toBe(2);
    expect(ElementTypes.type1.calls.argsFor(0)).toEqual([nodes[0], 0, transform]);
    expect(ElementTypes.type1.calls.argsFor(1)).toEqual([nodes[2], 2, transform]);

    expect(ElementTypes.type2.calls.count()).toBe(1);
    expect(ElementTypes.type2.calls.argsFor(0)).toEqual([nodes[1], 1, transform]);

  });

});
