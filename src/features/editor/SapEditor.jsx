import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './SapEditor.scss';
import 'draft-js/dist/Draft.css';
import ProppableCompositeDraftDecorator from './decorators/ProppableCompositeDraftDecorator';
import LineHighlightDecorator, { makeLineHighlightDecoratorStrategy } from './decorators/LineHighlightDecorator';
import NonSerializableContext from '../context/NonSerializableContext';

class SapEditor extends React.Component {
  static contextType = NonSerializableContext;
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.viewerEditorStateTextNeedsUpdate = true;

    this.handlePastedText = (text, html, editorState) => {
      const { setEditorState } = this.context;
      const pastedBlocks = ContentState.createFromText(text).blockMap;
      const newState = Modifier.replaceWithFragment(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        pastedBlocks
      );
      const newEditorState = EditorState.push(editorState, newState, 'insert-fragment');
      setEditorState(newEditorState);
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
      const { editorState, setEditorState } = this.context;
      setEditorState(this.insertText('    ', editorState));
      event.preventDefault();
    };
  }

  componentDidMount() {
    const { forceRefresh } = this.context;
    forceRefresh();
  }

  handleKeyCommand(command, editorState) {
    const { setEditorState } = this.context;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    const { editorState, setEditorState } = this.context;
    const { showingTranspiled, hoveredCuboids, transpiled } = this.props;

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
          ContentState.createFromText(transpiled || 'Transpilation failed due to errors.')
        );
      }

      // Update the highlights on the transcribed text.
      // This is only done if the highlights have changed.
      if (hoveredCuboids !== this.previoushoveredCuboids && transpiled) {
        const lineToIndex = new Map();
        const lines = transpiled.split('\n');
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
            onChange={setEditorState}
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
  showingTranspiled: PropTypes.bool.isRequired,
  hoveredCuboids: PropTypes.arrayOf(PropTypes.string).isRequired,
  transpiled: PropTypes.string,
};

SapEditor.defaultProps = {
  transpiled: undefined,
};

const mapState = (state) => ({
  showingTranspiled: state.editorSlice.tab === 'transpiled',
  hoveredCuboids: Object.keys(state.editorSlice.hoveredCuboids),
  transpiled: state.executorSlice.transpiled,
});

export default connect(mapState)(SapEditor);
