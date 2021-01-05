import { ContentState, EditorState } from 'draft-js';

export const getContentBlockOffset = (contentState, contentBlock) => {
  let offset = 0;
  let found = false;
  contentState.blockMap.forEach((block) => {
    if (!found) {
      if (block.key === contentBlock.key) {
        found = true;
      } else {
        offset += block.text.length + 1;
      }
    }
  });
  return offset;
};

export const editorStateToText = (editorState) => editorState.getCurrentContent().getPlainText('\n');

export const editorStateFromText = (text) => EditorState.createWithContent(ContentState.createFromText(text));
