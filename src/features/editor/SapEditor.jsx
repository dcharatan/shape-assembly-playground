import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './SapEditor.scss';

export default class SapEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
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
    return (
      <div className="rounded border p-3 h-100 w-100">
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
