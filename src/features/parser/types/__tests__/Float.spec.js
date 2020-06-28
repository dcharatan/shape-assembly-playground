import Float from '../Float';

describe('Float Unit Tests', () => {
  describe('parse', () => {
    test('text is not float', () => {
      expect(() => Float.parse('whoops')).toThrow();
    });

    test('-5 is float', () => {
      expect(Float.parse('-5')).toBe(-5);
    });

    test('6.0 is float', () => {
      expect(Float.parse('6.0')).toBe(6);
    });

    test('1 is float', () => {
      expect(Float.parse('1')).toBe(1);
    });

    test('0 is float', () => {
      expect(Float.parse('0')).toBe(0);
    });
  });
});
