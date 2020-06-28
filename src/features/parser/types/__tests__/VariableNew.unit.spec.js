import VariableNew from '../VariableNew';

describe('VariableNew Unit Tests', () => {
  describe('parse', () => {
    test('existing variable does not throw', () => {
      expect(VariableNew.parse('hello', { hello: 123 })).toBe('hello');
    });

    test('invalid variable throws', () => {
      expect(() => VariableNew.parse('1var', { hello: 123 })).toThrow();
    });

    test('valid name works', () => {
      expect(VariableNew.parse('bye', { hello: 123 })).toBe('bye');
    });
  });
});
