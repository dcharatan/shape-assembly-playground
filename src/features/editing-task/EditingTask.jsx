import React, { useContext, useEffect } from 'react';
import NonSerializableContext from '../context/NonSerializableContext';
import { editorStateFromText } from '../editor/draftUtilities';
import EditorArea from '../editor/EditorArea';
import ViewerArea from '../viewer/ViewerArea';

const code = `@child_assembly
def assembly_fn_3(bbox):
    cube0 = Cuboid(0.141, 0.8, 0.14, True)
    cube1 = Cuboid(0.097, 0.059, 0.418, True)
    squeeze(cube0, bbox, bbox, top, 0.492, 0.103)
    attach(cube1, cube0, 0.5, 0.5, 0.0, 0.397, 0.802, 1.0)
    reflect(cube0, Z)

@child_assembly
def assembly_fn_2(bbox):
    cube0 = Cuboid(0.058, 0.732, 0.053, True)
    cube1 = Cuboid(0.082, 0.792, 0.055, True)
    cube2 = Cuboid(0.533, 0.078, 0.045, True)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.295, 0.001, 0.554)
    attach(cube1, bbox, 0.5, 1.0, 0.5, 0.068, 0.992, 0.437)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.062, 0.002, 0.6)
    attach(cube2, bbox, 0.5, 1.0, 0.5, 0.514, 0.989, 0.446)
    attach(cube0, cube2, 0.5, 1.0, 0.5, 0.22, 0.32, 0.416)
    translate(cube0, X, 2, 0.41)
    reflect(cube1, X)

@child_assembly
def assembly_fn_1(bbox):
    bbox_fn_3 = assembly_fn_3(0.147, 0.803, 0.685, True)
    cube1 = Cuboid(0.418, 0.059, 0.098, True)
    squeeze(bbox_fn_3, bbox, bbox, top, 0.107, 0.503)
    attach(cube1, bbox_fn_3, 0.0, 0.5, 0.5, 0.98, 0.8, 0.085)
    reflect(bbox_fn_3, X)
    reflect(cube1, Z)

@root_assembly
def assembly_fn_0():
    bbox = Cuboid(0.714, 1.665, 0.716, True)
    bbox_fn_1 = assembly_fn_1(0.68, 0.804, 0.691, True)
    cube1 = Cuboid(0.714, 0.077, 0.714, True)
    bbox_fn_2 = assembly_fn_2(0.676, 0.8, 0.073, True)
    attach(bbox_fn_1, bbox, 0.5, 0.0, 0.5, 0.497, 0.001, 0.498)
    attach(cube1, bbox_fn_1, 0.499, 0.276, 0.502, 0.5, 1.0, 0.5)
    squeeze(bbox_fn_2, bbox, cube1, top, 0.5, 0.072)`;

const EditingTask = () => {
  const context = useContext(NonSerializableContext);
  useEffect(() => {
    context.setEditorState(editorStateFromText(code));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex flex-grow-1 overflow-y-hidden">
      <div className="d-flex flex-row w-100 h-100 p-2 overflow-y-hidden">
        <div className="w-50 h-100 p-2 overflow-y-hidden d-flex flex-column">
          <div className="w-100 d-flex flex-grow-1 overflow-y-hidden">
            <EditorArea hideTabs hideTutorial />
          </div>
        </div>
        <div className="w-50 h-100">
          <div className="w-100 h-50 p-2">
            <ViewerArea />
          </div>
          <div className="w-100 h-50 p-2">
            <ViewerArea code={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditingTask;
