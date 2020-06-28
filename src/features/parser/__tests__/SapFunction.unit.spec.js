import StatementParser from '../StatementParser';
import Tokenizer from '../Tokenizer';
import SapFunction from '../SapFunction';

const makeStatement = (text) => StatementParser.parseStatements(Tokenizer.tokenize(text))[0];

describe('SapFunction Unit Tests', () => {
  let defStatement;
  let bodyStatements;

  beforeEach(() => {
    const statements = StatementParser.parseStatements(
      Tokenizer.tokenize(`
def potato():
    bbox = Cuboid(.7, 1.7, .5, True)
`)
    );
    [defStatement] = statements;
    bodyStatements = [statements[1]];
  });

  describe('parseDefStatement', () => {
    test('correct function name', () => {
      const fn = new SapFunction(defStatement, bodyStatements);
      expect(fn.functionNameToken.text).toBe('potato');
    });

    test('no function name throws', () => {
      const fn = () => new SapFunction(makeStatement('def():'), bodyStatements);
      expect(fn).toThrow();
    });

    test('invalid function name throws', () => {
      const fn = () => new SapFunction(makeStatement('def :():'), bodyStatements);
      expect(fn).toThrow();
    });

    test('missing closing parenthesis throws', () => {
      const fn = () =>
        new SapFunction(makeStatement('def cucumber(hello, one, two:'), bodyStatements);
      expect(fn).toThrow();
    });

    test('missing opening parenthesis throws', () => {
      const fn = () =>
        new SapFunction(makeStatement('def cucumber hello, one, two):'), bodyStatements);
      expect(fn).toThrow();
    });

    test('missing colon throws', () => {
      const fn = () =>
        new SapFunction(makeStatement('def pumpkin(one, two, three, four)'), bodyStatements);
      expect(fn).toThrow();
    });

    test('correct parameter names', () => {
      const fn = new SapFunction(
        makeStatement('def pumpkin(one, two, three, four):'),
        bodyStatements
      );
      expect(fn.parameterTokens.map((t) => t.text)).toEqual(['one', 'two', 'three', 'four']);
    });
  });
});
