import Tokenizer from '../Tokenizer';
import StatementParser from '../StatementParser';

describe('StatementParser Unit Tests', () => {
  let tokens;

  beforeEach(() => {
    tokens = Tokenizer.tokenize(`\n
def potato():
    bbox = Cuboid(.7, 1.7, .5, True)

def lol(l, w, h, aligned):
    bbox = Cuboid(.7, .6, .5, True)
`);
  });

  describe('parseStatements', () => {
    test('correct number of lines parsed', () => {
      expect(StatementParser.parseStatements(tokens).length).toBe(4);
    });

    test('correct indentation levels', () => {
      expect(StatementParser.parseStatements(tokens).map((s) => s.indentationLevel)).toEqual([
        0,
        1,
        0,
        1,
      ]);
    });

    test('correct number of tokens per line', () => {
      expect(StatementParser.parseStatements(tokens).map((s) => s.tokens.length)).toEqual([
        5,
        12,
        12,
        12,
      ]);
    });

    test('correct tokens', () => {
      expect(
        StatementParser.parseStatements(tokens).map((s) => s.tokens.map((t) => t.text))
      ).toEqual([
        ['def', 'potato', '(', ')', ':'],
        ['bbox', '=', 'Cuboid', '(', '.7', ',', '1.7', ',', '.5', ',', 'True', ')'],
        ['def', 'lol', '(', 'l', ',', 'w', ',', 'h', ',', 'aligned', ')', ':'],
        ['bbox', '=', 'Cuboid', '(', '.7', ',', '.6', ',', '.5', ',', 'True', ')'],
      ]);
    });
  });
});
