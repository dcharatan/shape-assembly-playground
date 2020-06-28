import Token from '../Token';

describe('Token Unit Tests', () => {
  describe('isWhitespace', () => {
    test('space is whitespace', () => {
      expect(new Token(' ', 0, 1).isWhitespace()).toBeTruthy();
    });

    test('tab is whitespace', () => {
      expect(new Token('\t', 0, 1).isWhitespace()).toBeTruthy();
    });

    test('newline is not whitespace', () => {
      expect(new Token('\n', 0, 1).isWhitespace()).toBeFalsy();
    });

    test('x is not whitespace', () => {
      expect(new Token('x', 0, 1).isWhitespace()).toBeFalsy();
    });
  });
});
