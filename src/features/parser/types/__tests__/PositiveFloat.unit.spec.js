import PositiveFloat from '../PositiveFloat';

describe('PositiveFloat Unit Tests', () => {
  describe('parse', () => {
    test('text is not positive float', () => {
      expect(() => PositiveFloat.parse('yeehaw')).toThrow();
    });

    test('-5 is not positive float', () => {
      expect(() => PositiveFloat.parse('-5')).toThrow();
    });

    test('6.0 is positive float', () => {
      expect(PositiveFloat.parse('6.0')).toBe(6);
    });

    test('1 is positive float', () => {
      expect(PositiveFloat.parse('1')).toBe(1);
    });

    test('0 is not positive float', () => {
      expect(() => PositiveFloat.parse('0')).toThrow();
    });
  });
});
