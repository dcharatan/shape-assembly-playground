import SapFunctionParser from '../SapFunctionParser';
import StatementParser from '../StatementParser';
import Tokenizer from '../Tokenizer';

describe('SapFunctionParser Unit Tests', () => {
  let statements;

  beforeEach(() => {
    statements = StatementParser.parseStatements(
      Tokenizer.tokenize(`
def potato():
    bbox = Cuboid(.7, 1.7, .5, True)

def lol(l, w, h, aligned):
    bbox = Cuboid(.7, .6, .5, True)
`)
    );
  });

  describe('parseFunctions', () => {
    test('correct number of functions parsed', () => {
      expect(SapFunctionParser.parseFunctions(statements).length).toBe(2);
    });

    test('correct def statements', () => {
      expect(
        SapFunctionParser.parseFunctions(statements).map((f) =>
          f.defStatement.tokens.map((t) => t.text)
        )
      ).toEqual([
        ['def', 'potato', '(', ')', ':'],
        ['def', 'lol', '(', 'l', ',', 'w', ',', 'h', ',', 'aligned', ')', ':'],
      ]);
    });

    test('correct body statements', () => {
      expect(
        SapFunctionParser.parseFunctions(statements).map((f) =>
          f.bodyStatements.map((s) => s.tokens.map((t) => t.text))
        )
      ).toEqual([
        [['bbox', '=', 'Cuboid', '(', '.7', ',', '1.7', ',', '.5', ',', 'True', ')']],
        [['bbox', '=', 'Cuboid', '(', '.7', ',', '.6', ',', '.5', ',', 'True', ')']],
      ]);
    });
  });
});
