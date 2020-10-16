import React, { useRef, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TransformControls } from 'drei';
import * as THREE from 'three';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import { optimize, setModifiedCuboidParameters } from '../executor/executorSlice';
import NonSerializableContext from '../context/NonSerializableContext';

const EditableCuboid = ({ cuboid, cuboidIndex, orbitRef }) => {
  const dispatch = useDispatch();
  const transformRef = useRef();
  const editingCuboidMode = useSelector((state) => state.executorSlice.editingCuboidMode);
  const disabled = useSelector((state) => state.executorSlice.optimizationInProgress);
  const geometryRef = useRef();
  const cuboidMatrix = makeCuboidMatrix(cuboid);
  const { editorState, setEditorState } = useContext(NonSerializableContext);

  // Disable drag for the orbit camera when dragging the transform controls.
  useEffect(() => {
    const controls = transformRef.current;
    if (controls) {
      const callback = (event) => {
        if (geometryRef.current) {
          controls.updateMatrixWorld(geometryRef.current);
        }
        const dragging = event.value;
        // eslint-disable-next-line no-param-reassign
        orbitRef.current.enabled = !dragging;

        if (!dragging) {
          const newMatrix = controls.object.children[0].matrixWorld;
          dispatch(
            setModifiedCuboidParameters({
              modifiedCuboidMatrix: newMatrix.elements,
              modifiedCuboidIndex: cuboidIndex,
            })
          );
          dispatch(
            optimize({
              modifiedCuboidIndex: cuboidIndex,
              modifiedCuboidMatrix: newMatrix.elements,
              editorState,
              setEditorState,
            })
          );
        }
      };
      controls.addEventListener('dragging-changed', callback);
      return () => {
        // Not detaching the controls creates weird errors.
        controls.detach();
        controls.removeEventListener('dragging-changed', callback);
      };
    }
    return () => {};
  });

  // Wrap the base cuboid in TransformControls.
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  cuboidMatrix.decompose(position, quaternion, scale);

  return (
    <TransformControls
      ref={transformRef}
      mode={editingCuboidMode}
      quaternion={quaternion}
      position={position}
      space="local"
      disabled={disabled}
    >
      <group scale={scale}>
        <BaseCuboid cuboid={cuboid} color="red" geometryRef={geometryRef} />
      </group>
    </TransformControls>
  );
};

EditableCuboid.propTypes = {
  cuboid: PropTypes.shape({
    position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    dimensions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    frontNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    topNormal: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    globalLineIndex: PropTypes.number.isRequired,
  }).isRequired,

  // eslint-disable-next-line react/forbid-prop-types
  orbitRef: PropTypes.any, // It's a ref.
  cuboidIndex: PropTypes.number.isRequired,
};

EditableCuboid.defaultProps = {
  orbitRef: undefined,
};

export default EditableCuboid;
