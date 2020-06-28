import Tokenizer from '../Tokenizer';
import Token from '../Token';

describe('Tokenizer Unit Tests', () => {
  describe('tokenize', () => {
    test('words with whitespace', () => {
      const text = 'zebras are cool';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual([
        'zebras',
        ' ',
        'are',
        ' ',
        'cool',
      ]);
    });

    test('words with whitespace and separators', () => {
      const text = 'zebras (are) , cool  ';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual([
        'zebras',
        ' ',
        '(',
        'are',
        ')',
        ' ',
        ',',
        ' ',
        'cool',
        '  ',
      ]);
    });

    test('just separators', () => {
      const text = '(),=';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual(['(', ')', ',', '=']);
    });

    test('single space', () => {
      const text = ' ';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual([text]);
    });

    test('just whitespace', () => {
      const text = ' \t ';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual([text]);
    });

    test('mixed newlines and whitespace', () => {
      const text = ' \n  \n\t \n';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual([
        ' ',
        '\n',
        '  ',
        '\n',
        '\t ',
        '\n',
      ]);
    });

    test('words with separators', () => {
      const text = 'hello(yes)';
      expect(Tokenizer.tokenize(text).map((t) => t.text)).toEqual(['hello', '(', 'yes', ')']);
    });

    test('indices', () => {
      const text = 'hi (hi)';
      expect(Tokenizer.tokenize(text)).toEqual([
        new Token('hi', 0, 2),
        new Token(' ', 2, 3),
        new Token('(', 3, 4),
        new Token('hi', 4, 6),
        new Token(')', 6, 7),
      ]);
    });
  });
});
