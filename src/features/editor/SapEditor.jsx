import React from 'react';
import { Editor, EditorState, RichUtils, CompositeDecorator } from 'draft-js';
import './SapEditor.scss';
import { Badge } from 'react-bootstrap';

const HandleSpan = (props) => {
  return (
    <span {...props} style={{ color: 'red' }}>
      {props.children}
      <span>BAD!!!</span>
    </span>
  );
};

const HashtagSpan = (props) => {
  return (
    <span {...props} style={{ color: 'blue' }}>
      <Badge variant="danger">{props.children}</Badge>
    </span>
  );
};

// Note: these aren't very good regexes, don't use them!
const HANDLE_REGEX = /\@[\w]+/g;
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr;
  let start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

const compositeDecorator = new CompositeDecorator([
  {
    strategy: handleStrategy,
    component: HandleSpan,
  },
  {
    strategy: hashtagStrategy,
    component: HashtagSpan,
  },
]);

export default class SapEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) =>
      this.setState({
        editorState: EditorState.set(editorState, { decorator: compositeDecorator }),
      });
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
