import BooleanType from '../BooleanType';

describe('BooleanType Unit Tests', () => {
  describe('parse', () => {
    test('text boolean throws', () => {
      expect(() => BooleanType.parse('hello')).toThrow();
    });

    test('number boolean throws', () => {
      expect(() => BooleanType.parse('0')).toThrow();
    });

    test('True is boolean', () => {
      expect(BooleanType.parse('True')).toBe(true);
    });

    test('False is boolean', () => {
      expect(BooleanType.parse('False')).toBe(false);
    });

    test('false (bad capitalization) is not boolean', () => {
      expect(() => BooleanType.parse('false')).toThrow();
    });

    test('true (bad capitalization) is not boolean', () => {
      expect(() => BooleanType.parse('true')).toThrow();
    });

    test('TRUE (bad capitalization) is not boolean', () => {
      expect(() => BooleanType.parse('TRUE')).toThrow();
    });
  });
});
