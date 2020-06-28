import ShapeAssemblyParser from '../ShapeAssemblyParser';

describe('ShapeAssemblyParser Unit Tests', () => {
  describe('tokenize', () => {
    test('words with whitespace', () => {
      const text = 'zebras are cool';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual(['zebras', ' ', 'are', ' ', 'cool']);
    });

    test('words with whitespace and separators', () => {
      const text = 'zebras (are) , cool  ';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual([
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
      expect(ShapeAssemblyParser.tokenize(text)).toEqual(['(', ')', ',', '=']);
    });

    test('single space', () => {
      const text = ' ';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual([text]);
    });

    test('just whitespace', () => {
      const text = ' \t ';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual([text]);
    });

    test('mixed newlines and whitespace', () => {
      const text = ' \n  \n\t \n';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual([' ', '\n', '  ', '\n', '\t ', '\n']);
    });

    test('words with separators', () => {
      const text = 'hello(yes)';
      expect(ShapeAssemblyParser.tokenize(text)).toEqual(['hello', '(', 'yes', ')']);
    });
  });
});
