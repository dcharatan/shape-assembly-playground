import PositiveInteger from '../PositiveInteger';

describe('PositiveInteger Unit Tests', () => {
  describe('parse', () => {
    test('text is not positive integer', () => {
      expect(() => PositiveInteger.parse('computer')).toThrow();
    });

    test('-5 is not positive integer', () => {
      expect(() => PositiveInteger.parse('-5')).toThrow();
    });

    test('6.0 is positive integer', () => {
      expect(PositiveInteger.parse('6.0')).toBe(6);
    });

    test('1 is positive integer', () => {
      expect(PositiveInteger.parse('1')).toBe(1);
    });

    test('0 is not positive integer', () => {
      expect(() => PositiveInteger.parse('0')).toThrow();
    });

    test('0.5 is not positive integer', () => {
      expect(() => PositiveInteger.parse('0.5')).toThrow();
    });
  });
});
