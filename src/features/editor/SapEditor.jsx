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
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromText(`def fn(a):
    Cuboid(a, 5, 5, True)

@child_assembly
def sub_child_assembly(a):
    cuboid_with_name = Cuboid(2,0.25,0.25,True)
    fn(0.1)

@child_assembly
def child_assembly(a):
    cuboid_with_name = Cuboid(0.25,2,0.25,True)
    Cuboid(0.25,0.25,2,True)
    sub_child_bbox = Cuboid(1,1,2,True)
    sub_child_assembly(sub_child_bbox)

@root_assembly
def root():
    bbox = Cuboid(1,1,1,True)
    child_bbox = Cuboid(1,1,1,True)
    another_cuboid = Cuboid(1,1,1,True)
    child_assembly(child_bbox)
    weird_cuboid = Cuboid(1,1,0.32332332332,True)`)
      ),
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.text = undefined;
    this.parser = new ShapeAssemblyParser();

    this.onChange = (editorState) => {
      let { ast, doExecute } = this.props;
      const { setAst } = this.props;
      const newText = editorState.getCurrentContent().getPlainText('\n');
      if (newText !== this.text) {
        ast = this.parser.parseShapeAssemblyProgram(newText);
        console.log(ast);
        console.log(new Transpiler().transpile(ast));
        setAst(ast);
        doExecute(new Transpiler().transpile(ast));
      }
      this.setState({
        editorState: EditorState.set(editorState, {
          decorator: new ProppableCompositeDraftDecorator([
            {
              strategy: makeDefDecoratorStrategy(() => ast, applyStrategy),
              component: DefDecorator,
            },
            {
              strategy: makeDefParameterDecoratorStrategy(() => ast, applyStrategy),
              component: DefParameterDecorator,
            },
            {
              strategy: makeErrorDecoratorStrategy(() => ast, applyStrategy),
              component: ErrorDecorator,
            },
            {
              strategy: makeVariableNameDecoratorStrategy(() => ast, applyStrategy),
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
      <div className="rounded border p-3 h-100 w-100 overflow-y-scroll">
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
    );
  }
}

SapEditor.propTypes = {
  doExecute: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  doExecute: (programText) => dispatch(execute(programText)),
});

export default connect(null, mapDispatch)(SapEditor);
