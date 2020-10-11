import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './SapEditor.scss';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { execute, updateExpressions } from '../executor/executorSlice';
import DefDecorator, { makeDefDecoratorStrategy } from './decorators/DefDecorator';
import ErrorDecorator, { makeErrorDecoratorStrategy } from './decorators/ErrorDecorator';
import DefParameterDecorator, { makeDefParameterDecoratorStrategy } from './decorators/DefParameterDecorator';
import VariableNameDecorator, { makeVariableNameDecoratorStrategy } from './decorators/VariableNameDecorator';
import 'draft-js/dist/Draft.css';
import ProppableCompositeDraftDecorator from './decorators/ProppableCompositeDraftDecorator';
import LineHighlightDecorator, { makeLineHighlightDecoratorStrategy } from './decorators/LineHighlightDecorator';
import NonSerializableContext from '../context/NonSerializableContext';

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

class SapEditor extends React.Component {
  static contextType = NonSerializableContext;
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.sourceCode = undefined;
    this.parser = new ShapeAssemblyParser();
    this.viewerEditorStateTextNeedsUpdate = true;
    this.transpiled = '';

    this.onChange = (editorState) => this.execute(editorState);

    this.handlePastedText = (text, html, editorState) => {
      const pastedBlocks = ContentState.createFromText(text).blockMap;
      const newState = Modifier.replaceWithFragment(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        pastedBlocks
      );
      const newEditorState = EditorState.push(editorState, newState, 'insert-fragment');
      this.onChange(newEditorState);
      return 'handled';
    };

    this.insertText = (text, editorState) => {
      const currentContent = editorState.getCurrentContent();
      const currentSelection = editorState.getSelection();
      const newContent = Modifier.replaceText(currentContent, currentSelection, text);
      const newEditorState = EditorState.push(editorState, newContent, 'insert-characters');
      return EditorState.forceSelection(newEditorState, newContent.getSelectionAfter());
    };

    this.onTab = (event) => {
      const { editorState } = this.context;
      this.onChange(this.insertText('    ', editorState));
      event.preventDefault();
    };
  }

  componentDidMount() {
    // Force an editor state update.
    const { editorState } = this.context;
    this.execute(editorState);
  }

  execute(editorState) {
    const { doExecute, doUpdateExpressions } = this.props;
    const newSourceCode = editorState.getCurrentContent().getPlainText('\n');

    // Only rerun execution if the source code has changed.
    if (newSourceCode !== this.sourceCode) {
      this.sourceCode = newSourceCode;
      const newAst = this.parser.parseShapeAssemblyProgram(newSourceCode);
      const transpileResult = new Transpiler().transpile(newAst);
      if (transpileResult) {
        doUpdateExpressions(transpileResult.expressions);
        this.transpiled = transpileResult.text;
      }
      this.viewerEditorStateTextNeedsUpdate = true;
      this.context.setEditorState(EditorState.set(editorState, {
        decorator: new ProppableCompositeDraftDecorator([
          {
            strategy: makeDefDecoratorStrategy(() => newAst, applyStrategy),
            component: DefDecorator,
          },
          {
            strategy: makeDefParameterDecoratorStrategy(() => newAst, applyStrategy),
            component: DefParameterDecorator,
          },
          {
            strategy: makeErrorDecoratorStrategy(() => newAst, applyStrategy),
            component: ErrorDecorator,
          },
          {
            strategy: makeVariableNameDecoratorStrategy(() => newAst, applyStrategy),
            component: VariableNameDecorator,
          },
        ]),
      }));
      this.context.setAst(newAst);
      doExecute(this.transpiled);
    } else {
      this.context.setEditorState(editorState);
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    const { editorState } = this.context;
    const { showingTranspiled, hoveredCuboids } = this.props;

    // Choose which EditorState should be shown.
    const getEditorState = () => {
      // Show the
      if (!showingTranspiled) {
        return editorState;
      }

      // Create a new EditorState for the transcribed text.
      // This is only done if the transcribed text is requested and has changed.
      if (this.viewerEditorStateTextNeedsUpdate) {
        this.viewerEditorStateTextNeedsUpdate = false;
        this.transcribedEditorState = EditorState.createWithContent(
          ContentState.createFromText(this.transpiled || 'Transpilation failed due to errors.')
        );
      }

      // Update the highlights on the transcribed text.
      // This is only done if the highlights have changed.
      if (hoveredCuboids !== this.previoushoveredCuboids && this.transpiled) {
        const lineToIndex = new Map();
        const lines = this.transpiled.split('\n');
        lines.forEach((line, index) => {
          lineToIndex.set(line, index);
        });
        this.transcribedEditorState = EditorState.set(this.transcribedEditorState, {
          decorator: new ProppableCompositeDraftDecorator([
            {
              strategy: makeLineHighlightDecoratorStrategy(hoveredCuboids, lineToIndex),
              component: LineHighlightDecorator,
            },
          ]),
        });
      }
      this.previoushoveredCuboids = hoveredCuboids;

      // Return the EditorState for the transcribed text.
      return this.transcribedEditorState;
    };

    return (
      <div className="border-bottom border-left border-right p-3 h-100 w-100 overflow-y-scroll">
        <div className="w-100 h-100">
          <Editor
            editorState={getEditorState()}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            handlePastedText={this.handlePastedText}
            onTab={this.onTab}
            readOnly={showingTranspiled}
          />
        </div>
      </div>
    );
  }
}

SapEditor.propTypes = {
  doExecute: PropTypes.func.isRequired,
  doUpdateExpressions: PropTypes.func.isRequired,
  showingTranspiled: PropTypes.bool.isRequired,
  hoveredCuboids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapState = (state) => ({
  showingTranspiled: state.editorSlice.tab === 'transpiled',
  hoveredCuboids: Object.keys(state.editorSlice.hoveredCuboids),
});

const mapDispatch = (dispatch) => ({
  doExecute: (programText) => dispatch(execute(programText)),
  doUpdateExpressions: (expressions) => dispatch(updateExpressions(expressions)),
});

export default connect(mapState, mapDispatch)(SapEditor);
