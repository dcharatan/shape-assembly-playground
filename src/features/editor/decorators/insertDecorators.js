import { EditorState } from 'draft-js';
import DefDecorator, { makeDefDecoratorStrategy } from './DefDecorator';
import DefParameterDecorator, { makeDefParameterDecoratorStrategy } from './DefParameterDecorator';
import ErrorDecorator, { makeErrorDecoratorStrategy } from './ErrorDecorator';
import AssignmentDecorator, { makeAssignmentDecoratorStrategy } from './AssignmentDecorator';
import ProppableCompositeDraftDecorator from './ProppableCompositeDraftDecorator';
import FloatParameterDecorator, { makeFloatParameterDecoratorStrategy } from './FloatParameterDecorator';
import ReturnDecorator, { makeReturnDecoratorStrategy } from './ReturnDecorator';
import { getContentBlockOffset } from '../draftUtilities';
import InvocationFunctionNameDecorator, {
  makeInvocationFunctionNameDecorator,
} from './InvocationFunctionNameDecorator';
import CuboidParameterDecorator, { makeCuboidParameterDecoratorStrategy } from './CuboidParameterDecorator';

// The parser gives global character indices, but they have to be converted to per-block character indices.
// That's done here.
function applyStrategy(contentBlock, callback, contentState, highlights, props = []) {
  const offset = getContentBlockOffset(contentState, contentBlock);
  highlights.forEach((highlight, index) => {
    const { start, end } = highlight;
    const adjustedStart = start - offset;
    const adjustedEnd = end - offset;
    if (adjustedEnd <= contentBlock.text.length) {
      callback(adjustedStart, adjustedEnd, props[index]);
    }
  });
}

const insertDecorators = (editorState, ast, optimizedParameters, metadata) =>
  EditorState.set(editorState, {
    decorator: new ProppableCompositeDraftDecorator([
      {
        strategy: makeDefDecoratorStrategy(() => ast, applyStrategy),
        component: DefDecorator,
      },
      {
        strategy: makeDefParameterDecoratorStrategy(() => ast, metadata, applyStrategy),
        component: DefParameterDecorator,
      },
      {
        strategy: makeErrorDecoratorStrategy(() => ast, applyStrategy),
        component: ErrorDecorator,
      },
      {
        strategy: makeAssignmentDecoratorStrategy(() => ast, metadata, applyStrategy),
        component: AssignmentDecorator,
      },
      {
        strategy: makeFloatParameterDecoratorStrategy(() => ast, optimizedParameters, applyStrategy),
        component: FloatParameterDecorator,
      },
      {
        strategy: makeCuboidParameterDecoratorStrategy(() => ast, optimizedParameters, applyStrategy),
        component: CuboidParameterDecorator,
      },
      {
        strategy: makeReturnDecoratorStrategy(() => ast, applyStrategy),
        component: ReturnDecorator,
      },
      {
        strategy: makeInvocationFunctionNameDecorator(() => ast, applyStrategy),
        component: InvocationFunctionNameDecorator,
      },
    ]),
  });

export default insertDecorators;
