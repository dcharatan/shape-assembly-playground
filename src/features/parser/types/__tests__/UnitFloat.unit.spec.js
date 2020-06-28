import UnitFloat from '../UnitFloat';

describe('UnitFloat Unit Tests', () => {
  describe('parse', () => {
    test('text is not unit float', () => {
      expect(() => UnitFloat.parse('hello')).toThrow();
    });

    test('-5 is not unit float', () => {
      expect(() => UnitFloat.parse('-5')).toThrow();
    });

    test('6.0 is not unit float', () => {
      expect(() => UnitFloat.parse('6.0')).toThrow();
    });

    test('1 is unit float', () => {
      expect(() => UnitFloat.parse('1')).not.toThrow();
    });

    test('0.0 is unit float', () => {
      expect(() => UnitFloat.parse('0.0')).not.toThrow();
    });

    test('0.25 is unit float', () => {
      expect(() => UnitFloat.parse('0.25')).not.toThrow();
    });
  });
});
