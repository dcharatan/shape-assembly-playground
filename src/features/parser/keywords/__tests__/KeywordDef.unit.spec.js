import KeywordDef from '../KeywordDef';

describe('KeywordDef Unit Tests', () => {
  let keyword;

  beforeEach(() => {
    keyword = new KeywordDef();
  });

  describe('parseArguments', () => {
    test('correct arguments (4) do not throw', () => {
      expect(() => keyword.parseArguments(['0.5', '0.5', '0.5', 'True'])).not.toThrow();
    });

    test('correct arguments (0) do not throw', () => {
      expect(() => keyword.parseArguments([])).not.toThrow();
    });

    test('wrong number of arguments throws', () => {
      expect(() => keyword.parseArguments(['0.5', '0.5', '0.5'])).toThrow();
    });

    test('wrong argument type throws', () => {
      expect(() => keyword.parseArguments(['0.5', 'yikes', '0.5', 'False'])).toThrow();
    });
  });
});
