import Keyword from '../Keyword';
import UnitFloat from '../../types/UnitFloat';

describe('Keyword Unit Tests', () => {
  let keyword;

  beforeEach(() => {
    keyword = new Keyword([UnitFloat, UnitFloat]);
  });

  describe('parseArguments', () => {
    test('correct number of arguments does not throw', () => {
      expect(() => keyword.parseArguments(['0.5', '0.5'])).not.toThrow();
    });

    test('wrong number of arguments throws', () => {
      expect(() => keyword.parseArguments(['0.5', '0.5', '0.5'])).toThrow();
    });

    test('wrong argument type throws', () => {
      expect(() => keyword.parseArguments(['0.5', 'oops'])).toThrow();
    });
  });
});
