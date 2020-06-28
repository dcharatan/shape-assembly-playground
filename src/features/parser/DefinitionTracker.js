import ExpectationError from './ExpectationError';

export default class DefinitionTracker {
  constructor() {
    this.definitions = [];
  }

  addDefinition(newDefinition) {
    if (this.definitions.find((d) => d.functionName === newDefinition.functionName)) {
      throw new ExpectationError('new definition', 'existing definition');
    }
    this.definitions.push(newDefinition);
    if (this.definitions.filter((d) => d.keywordArguments.length === 0).length > 1) {
      throw new ExpectationError(
        'def with four arguments',
        'def with no arguments (only one def with no arguments is allowed)'
      );
    }
  }
}
