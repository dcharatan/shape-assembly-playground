import ShapeAssemblyParser from '../ShapeAssemblyParser';

describe('ShapeAssemblyParser Unit Tests', () => {
  describe('parseText', () => {
    let parser;

    beforeEach(() => {
      parser = new ShapeAssemblyParser();
    });

    test('reads a single def', () => {
      const text = `
def lol():
    bbox = Cuboid(.7, 1.7, .5, True)
      `;
      parser.parseText(text);
      expect(parser.definitionTracker.definitions.length).toBe(1);
    });
  });
});
