import React from 'react';
import { Editor, EditorState, RichUtils, CompositeDecorator } from 'draft-js';
import './SapEditor.scss';
import { Badge } from 'react-bootstrap';
import ShapeAssemblyParser from '../parser/ShapeAssemblyParser';

const DefSpan = (props) => {
  return (
    <span {...props} style={{ color: 'red' }}>
      {props.children}
    </span>
  );
};

const DefParameterSpan = (props) => {
  return (
    <span {...props} style={{ color: 'blue' }}>
      <Badge variant="danger">{props.children}</Badge>
    </span>
  );
};

// The parser gives global character indices, but they have to be converted to per-block character indices.
// That's done here.
function applyStrategy(contentBlock, callback, contentState, highlights) {
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
  highlights.forEach((highlight) => {
    const { start, end } = highlight;
    const adjustedStart = start - beforeChars;
    const adjustedEnd = end - beforeChars;
    if (adjustedEnd <= contentBlock.text.length) {
      callback(adjustedStart, adjustedEnd);
    }
  });
}

function defStrategy(contentBlock, callback, contentState) {
  if (!this.ast) {
    return;
  }
  const functions = [this.ast.entryFunction, ...this.ast.subfunctions];
  const highlights = functions.map((fn) => fn.defStatement.tokens[0]);
  applyStrategy(contentBlock, callback, contentState, highlights);
}

function defParameterStrategy(contentBlock, callback, contentState) {
  if (!this.ast) {
    return;
  }
  const functions = [this.ast.entryFunction, ...this.ast.subfunctions];
  const highlights = [];
  functions.forEach((fn) => {
    fn.parameterTokens.forEach((t) => highlights.push(t));
  });
  applyStrategy(contentBlock, callback, contentState, highlights);
}

export default class SapEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.ast = undefined;
    this.text = undefined;
    this.error = undefined;

    this.onChange = (editorState) => {
      const newText = editorState.getCurrentContent().getPlainText('\n');
      if (newText !== this.text) {
        try {
          this.ast = ShapeAssemblyParser.parseText(newText);
          this.error = undefined;
        } catch (err) {
          this.error = err.message;
          this.ast = undefined;
        }
      }
      this.setState({
        editorState: EditorState.set(editorState, {
          decorator: new CompositeDecorator([
            {
              strategy: defStrategy.bind(this),
              component: DefSpan,
            },
            {
              strategy: defParameterStrategy.bind(this),
              component: DefParameterSpan,
            },
          ]),
        }),
      });
    };
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
        <div>{this.error}</div>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
