import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './SapEditor.scss';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { execute } from '../executor/executorSlice';
import DefDecorator, { makeDefDecoratorStrategy } from './decorators/DefDecorator';
import ErrorDecorator, { makeErrorDecoratorStrategy } from './decorators/ErrorDecorator';
import DefParameterDecorator, { makeDefParameterDecoratorStrategy } from './decorators/DefParameterDecorator';
import VariableNameDecorator, { makeVariableNameDecoratorStrategy } from './decorators/VariableNameDecorator';
import 'draft-js/dist/Draft.css';
import ProppableCompositeDraftDecorator from './decorators/ProppableCompositeDraftDecorator';
import LineHighlightDecorator, { makeLineHighlightDecoratorStrategy } from './decorators/LineHighlightDecorator';

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

const INITIAL_TEXT = `@root_assembly
def root():
    bbox = Cuboid(1,1,1,True)
    cuboid = Cuboid(1,1,1,True)`;

class SapEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(INITIAL_TEXT)),
    };
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
      const { editorState } = this.state;
      this.onChange(this.insertText('    ', editorState));
      event.preventDefault();
    };
  }

  componentDidMount() {
    // Force an editor state update.
    const { editorState } = this.state;
    this.execute(editorState);
  }

  execute(editorState) {
    const { setAst, doExecute } = this.props;
    const newSourceCode = editorState.getCurrentContent().getPlainText('\n');

    // Only rerun execution if the source code has changed.
    if (newSourceCode !== this.sourceCode) {
      this.sourceCode = newSourceCode;
      const newAst = this.parser.parseShapeAssemblyProgram(newSourceCode);
      this.transpiled = new Transpiler().transpile(newAst);
      this.viewerEditorStateTextNeedsUpdate = true;
      this.setState({
        editorState: EditorState.set(editorState, {
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
        }),
      });
      setAst(newAst);
      doExecute(this.transpiled);
    } else {
      this.setState({
        editorState,
      });
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
    const { editorState } = this.state;
    const { showingTranspiled, selectedTranspiledLines } = this.props;

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
      if (selectedTranspiledLines !== this.previousSelectedTranspiledLines) {
        this.transcribedEditorState = EditorState.set(this.transcribedEditorState, {
          decorator: new ProppableCompositeDraftDecorator([
            {
              strategy: makeLineHighlightDecoratorStrategy(selectedTranspiledLines, this.transpiled, applyStrategy),
              component: LineHighlightDecorator,
            },
          ]),
        });
      }
      this.previousSelectedTranspiledLines = selectedTranspiledLines;

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
  showingTranspiled: PropTypes.bool.isRequired,
  setAst: PropTypes.func.isRequired,
  selectedTranspiledLines: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapState = (state) => ({
  showingTranspiled: state.editorSlice.tab === 'transpiled',
  selectedTranspiledLines: Object.keys(state.editorSlice.selectedTranspiledLines),
});

const mapDispatch = (dispatch) => ({
  doExecute: (programText) => dispatch(execute(programText)),
});

export default connect(mapState, mapDispatch)(SapEditor);
