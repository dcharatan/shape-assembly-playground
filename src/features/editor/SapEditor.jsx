import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  ContentState,
  Modifier,
} from 'draft-js';
import './SapEditor.scss';
import ShapeAssemblyParser from '../parser/ShapeAssemblyParser';
import DefDecorator, { makeDefDecoratorStrategy } from './decorators/DefDecorator';
import DefParameterDecorator, {
  makeDefParameterDecoratorStrategy,
} from './decorators/DefParameterDecorator';
import VariableNameDecorator, {
  makeVariableNameDecoratorStrategy,
} from './decorators/VariableNameDecorator';
import 'draft-js/dist/Draft.css';

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
              strategy: makeDefDecoratorStrategy(() => this.ast, applyStrategy),
              component: DefDecorator,
            },
            {
              strategy: makeDefParameterDecoratorStrategy(() => this.ast, applyStrategy),
              component: DefParameterDecorator,
            },
            {
              strategy: makeVariableNameDecoratorStrategy(() => this.ast, applyStrategy),
              component: VariableNameDecorator,
            },
          ]),
        }),
      });
    };

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
      <div className="rounded border p-3 h-100 w-100 d-flex flex-column">
        <div className="d-flex flex-grow-1 w-100">
          <div className="w-100 h-100">
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              handlePastedText={this.handlePastedText}
              onTab={this.onTab}
            />
          </div>
        </div>
        <div className="text-danger">{this.error}</div>
      </div>
    );
  }
}
