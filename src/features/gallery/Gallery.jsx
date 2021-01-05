import React, { useContext } from 'react';
import GalleryItem from './GalleryItem';
import ThumbnailCube from './thumbnails/thumbnail_cube.png';
import ThumbnailChair from './thumbnails/thumbnail_chair.png';
import ThumbnailTable from './thumbnails/thumbnail_table.png';
import ThumbnailShelf from './thumbnails/thumbnail_shelf.png';
import {
  EXAMPLE_PROGRAM_CHAIR,
  EXAMPLE_PROGRAM_TABLE,
  EXAMPLE_PROGRAM_SHELF,
  EXAMPLE_PROGRAM_CUBE,
} from './examplePrograms';
import NonSerializableContext from '../context/NonSerializableContext';
import { editorStateFromText } from '../editor/draftUtilities';

const Gallery = () => {
  const context = useContext(NonSerializableContext);
  const onClick = (text) => () => {
    context.setEditorState(editorStateFromText(text));
  };

  return (
    <div className="mt-3 border">
      <div className="p-2 border-bottom">Example ShapeAssembly Programs</div>
      <div className="d-flex flex-row overflow-x-scroll p-1">
        <GalleryItem thumbnail={ThumbnailCube} onClick={onClick(EXAMPLE_PROGRAM_CUBE)} />
        <GalleryItem thumbnail={ThumbnailChair} onClick={onClick(EXAMPLE_PROGRAM_CHAIR)} />
        <GalleryItem thumbnail={ThumbnailTable} onClick={onClick(EXAMPLE_PROGRAM_TABLE)} />
        <GalleryItem thumbnail={ThumbnailShelf} onClick={onClick(EXAMPLE_PROGRAM_SHELF)} />
      </div>
    </div>
  );
};

export default Gallery;
