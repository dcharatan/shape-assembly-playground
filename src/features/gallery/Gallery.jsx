import React, { useContext } from 'react';
import { ContentState, EditorState } from 'draft-js';
import GalleryItem from './GalleryItem';
import ThumbnailCube from './thumbnails/thumbnail_cube.png';
import ThumbnailChair1 from './thumbnails/thumbnail_chair1.png';
import ThumbnailChair2 from './thumbnails/thumbnail_chair2.png';
import ThumbnailChair3 from './thumbnails/thumbnail_chair3.png';
import {
  EXAMPLE_PROGRAM_CHAIR_1,
  EXAMPLE_PROGRAM_CHAIR_2,
  EXAMPLE_PROGRAM_CHAIR_3,
  EXAMPLE_PROGRAM_CUBE,
} from './examplePrograms';
import NonSerializableContext from '../context/NonSerializableContext';

const Gallery = () => {
  const context = useContext(NonSerializableContext);
  const onClick = (text) => () => {
    context.setEditorState(EditorState.createWithContent(ContentState.createFromText(text)));
  };

  return (
    <div className="mt-3 border">
      <div className="p-2 border-bottom">Example ShapeAssembly Programs</div>
      <div className="d-flex flex-row overflow-x-scroll p-1">
        <GalleryItem thumbnail={ThumbnailCube} onClick={onClick(EXAMPLE_PROGRAM_CUBE)} />
        <GalleryItem thumbnail={ThumbnailChair1} onClick={onClick(EXAMPLE_PROGRAM_CHAIR_1)} />
        <GalleryItem thumbnail={ThumbnailChair2} onClick={onClick(EXAMPLE_PROGRAM_CHAIR_2)} />
        <GalleryItem thumbnail={ThumbnailChair3} onClick={onClick(EXAMPLE_PROGRAM_CHAIR_3)} />
      </div>
    </div>
  );
};

export default Gallery;
