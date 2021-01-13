import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './SapEditor.scss';
import 'draft-js/dist/Draft.css';
import NonSerializableContext from '../context/NonSerializableContext';

class SapEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.previousTranspiled = undefined;

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
    const {
      showingTranspiled,
      hoveredCuboids,
      transpiled,
      optimizationInProgress,
      liveUpdatesEnabled,
      disableTextEditing,
    } = this.props;

    // Choose which EditorState should be shown.
    const getEditorState = () => {
      if (!showingTranspiled) {
        return editorState;
      }

      // Create a new EditorState for the transcribed text.
      // This is only done if the transcribed text is requested and has changed.
      if (this.previousTranspiled !== transpiled) {
        this.previousTranspiled = transpiled;
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
            readOnly={showingTranspiled || optimizationInProgress || disableTextEditing}
            handleReturn={(e) => {
              // Prevent shift + enter from doing anything when in manual update mode (since this should trigger execution instead).
              if (e.shiftKey && !liveUpdatesEnabled) {
                return 'handled';
              }
              return 'not-handled';
            }}
          />
        </div>
      </div>
    );
  }
}

SapEditor.contextType = NonSerializableContext;

SapEditor.propTypes = {
  optimizationInProgress: PropTypes.bool.isRequired,
  showingTranspiled: PropTypes.bool.isRequired,
  hoveredCuboids: PropTypes.arrayOf(PropTypes.string).isRequired,
  transpiled: PropTypes.string,
  liveUpdatesEnabled: PropTypes.bool.isRequired,
  disableTextEditing: PropTypes.bool,
};

SapEditor.defaultProps = {
  transpiled: undefined,
  disableTextEditing: false,
};

const mapState = (state) => ({
  showingTranspiled: state.editorSlice.tab === 'transpiled',
  hoveredCuboids: Object.keys(state.editorSlice.hoveredCuboids),
  transpiled: state.executorSlice.transpiled,
  optimizationInProgress: state.executorSlice.optimizationInProgress,
  liveUpdatesEnabled: state.editorSlice.liveUpdatesEnabled,
});

export default connect(mapState)(SapEditor);
