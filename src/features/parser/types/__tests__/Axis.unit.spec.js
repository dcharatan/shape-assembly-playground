import Axis, { AxisEnum } from '../Axis';

describe('Axis Unit Tests', () => {
  describe('parse', () => {
    test('X is axis', () => {
      expect(Axis.parse('X')).toBe(AxisEnum.X);
    });

    test('Y is axis', () => {
      expect(Axis.parse('Y')).toBe(AxisEnum.Y);
    });

    test('Z is axis', () => {
      expect(Axis.parse('Z')).toBe(AxisEnum.Z);
    });

    test('lowercase axis throws', () => {
      expect(() => Axis.parse('x')).toThrow();
    });

    test('text axis throws', () => {
      expect(() => Axis.parse('dandelion')).toThrow();
    });

    test('number throws', () => {
      expect(() => Axis.parse(2)).toThrow();
    });
  });
});
