import VariableExisting from '../VariableExisting';

describe('VariableExisting Unit Tests', () => {
  describe('parse', () => {
    test('existing variable returns variable', () => {
      expect(VariableExisting.parse('hello', { hello: 123 })).toBe(123);
    });

    test('invalid variable throws', () => {
      expect(() => VariableExisting.parse('bad', { hello: 123 })).toThrow();
    });
  });
});
