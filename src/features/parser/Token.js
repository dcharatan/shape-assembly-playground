import keywords from './keywords/Keywords';
import separators from './Separators';

export default class Token {
  constructor(text, start, end) {
    this.text = text;
    this.start = start;
    this.end = end;
  }

  static isTextWhitespace(text) {
    return text !== text.trim() && !Token.isTextNewline(text);
  }

  static isTextNewline(text) {
    return text === '\n';
  }

  static isTextKeyword(text) {
    return keywords.has(text);
  }

  static isTextSeparator(text) {
    return separators.has(text);
  }

  static isTextWord(text) {
    return (
      !Token.isTextWhitespace(text) && !Token.isTextKeyword(text) && !Token.isTextSeparator(text)
    );
  }

  isWhitespace() {
    return Token.isTextWhitespace(this.text);
  }

  isNewline() {
    return Token.isTextNewline(this.text);
  }

  isKeyword() {
    return Token.isTextKeyword(this.text);
  }

  isSeparator() {
    return Token.isTextSeparator(this.text);
  }

  isWord() {
    return Token.isTextWord(this.text);
  }
}
