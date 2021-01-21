import { EditorState } from 'draft-js';
import DefDecorator, { makeDefDecoratorStrategy } from './DefDecorator';
import DefParameterDecorator, { makeDefParameterDecoratorStrategy } from './DefParameterDecorator';
import ErrorDecorator, { makeErrorDecoratorStrategy } from './ErrorDecorator';
import makeAssignmentDecoratorStrategy from './makeAssignmentDecoratorStrategy';
import ProppableCompositeDraftDecorator from './ProppableCompositeDraftDecorator';
import ReturnDecorator, { makeReturnDecoratorStrategy } from './ReturnDecorator';
import { getContentBlockOffset } from '../draftUtilities';
import InvocationFunctionNameDecorator, {
  makeInvocationFunctionNameDecorator,
} from './InvocationFunctionNameDecorator';
import makeCuboidParameterDecoratorStrategy from './makeCuboidParameterDecoratorStrategy';
import makeReturnValueDecoratorStrategy from './makeReturnValueDecorator';
import HoverableCuboidDecorator from './HoverableCuboidDecorator';
import HiddenDecorator, { makeHiddenDecoratorStrategy } from './HiddenDecorator';
import NumberParameterOptimizerDecorator, {
  makeNumberParameterOptimizerDecoratorStrategy,
} from './number-parameter/NumberParameterOptimizerDecorator';
import NumberParameterSliderDecorator, {
  makeNumberParameterSliderDecoratorStrategy,
} from './number-parameter/NumberParameterSliderDecorator';

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

const insertDecorators = (editorState, ast, optimizedParameters, fakeParameters, metadata) =>
  EditorState.set(editorState, {
    decorator: new ProppableCompositeDraftDecorator([
      {
        strategy: makeHiddenDecoratorStrategy(() => ast, applyStrategy),
        component: HiddenDecorator,
      },
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
        strategy: makeAssignmentDecoratorStrategy(() => ast, applyStrategy),
        component: HoverableCuboidDecorator,
      },
      {
        strategy: makeNumberParameterSliderDecoratorStrategy(() => ast, applyStrategy),
        component: NumberParameterSliderDecorator,
      },
      {
        strategy: makeNumberParameterOptimizerDecoratorStrategy(optimizedParameters, applyStrategy),
        component: NumberParameterOptimizerDecorator,
      },
      {
        strategy: makeCuboidParameterDecoratorStrategy(() => ast, applyStrategy),
        component: HoverableCuboidDecorator,
      },
      {
        strategy: makeReturnDecoratorStrategy(() => ast, applyStrategy),
        component: ReturnDecorator,
      },
      {
        strategy: makeReturnValueDecoratorStrategy(() => ast, applyStrategy),
        component: HoverableCuboidDecorator,
      },
      {
        strategy: makeInvocationFunctionNameDecorator(() => ast, applyStrategy),
        component: InvocationFunctionNameDecorator,
      },
    ]),
  });

export default insertDecorators;
