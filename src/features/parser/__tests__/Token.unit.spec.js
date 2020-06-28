import Token from '../Token';

describe('Token Unit Tests', () => {
  describe('isWhitespace', () => {
    test('space is whitespace', () => {
      const text = ' ';
      expect(Token.isWhitespace(text)).toBeTruthy();
    });

    test('tab is whitespace', () => {
      const text = '\t';
      expect(Token.isWhitespace(text)).toBeTruthy();
    });

    test('newline is not whitespace', () => {
      const text = '\n';
      expect(Token.isWhitespace(text)).toBeFalsy();
    });

    test('x is not whitespace', () => {
      const text = 'x';
      expect(Token.isWhitespace(text)).toBeFalsy();
    });
  });
});
