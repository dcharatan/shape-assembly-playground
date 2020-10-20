import { EditorState } from 'draft-js';
import DefDecorator, { makeDefDecoratorStrategy } from './DefDecorator';
import DefParameterDecorator, { makeDefParameterDecoratorStrategy } from './DefParameterDecorator';
import ErrorDecorator, { makeErrorDecoratorStrategy } from './ErrorDecorator';
import VariableNameDecorator, { makeVariableNameDecoratorStrategy } from './VariableNameDecorator';
import ProppableCompositeDraftDecorator from './ProppableCompositeDraftDecorator';
import FloatParameterDecorator, { makeFloatParameterDecoratorStrategy } from './FloatParameterDecorator';
import ReturnDecorator, { makeReturnDecoratorStrategy } from './ReturnDecorator';

// The parser gives global character indices, but they have to be converted to per-block character indices.
// That's done here.
function applyStrategy(contentBlock, callback, contentState, highlights, props = []) {
  let beforeChars = 0;
  let found = false;
  contentState.blockMap.forEach((block) => {
    if (!found) {
      if (block.key === contentBlock.key) {
        found = true;
      } else {
        beforeChars += block.text.length + 1;
      }
    }
  });
  highlights.forEach((highlight, index) => {
    const { start, end } = highlight;
    const adjustedStart = start - beforeChars;
    const adjustedEnd = end - beforeChars;
    if (adjustedEnd <= contentBlock.text.length) {
      callback(adjustedStart, adjustedEnd, props[index]);
    }
  });
}

const insertDecorators = (editorState, ast, optimizedParameters) =>
  EditorState.set(editorState, {
    decorator: new ProppableCompositeDraftDecorator([
      {
        strategy: makeDefDecoratorStrategy(() => ast, applyStrategy),
        component: DefDecorator,
      },
      {
        strategy: makeDefParameterDecoratorStrategy(() => ast, applyStrategy),
        component: DefParameterDecorator,
      },
      {
        strategy: makeErrorDecoratorStrategy(() => ast, applyStrategy),
        component: ErrorDecorator,
      },
      {
        strategy: makeVariableNameDecoratorStrategy(() => ast, applyStrategy),
        component: VariableNameDecorator,
      },
      {
        strategy: makeFloatParameterDecoratorStrategy(optimizedParameters, applyStrategy),
        component: FloatParameterDecorator,
      },
      {
        strategy: makeReturnDecoratorStrategy(() => ast, applyStrategy),
        component: ReturnDecorator,
      },
    ]),
  });

export default insertDecorators;
