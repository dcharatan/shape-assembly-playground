export default class Statement {
  constructor(indentationLevel, tokens) {
    this.tokens = tokens;
    this.indentationLevel = indentationLevel;
  }
}
