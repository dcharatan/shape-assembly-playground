import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TransformControls } from 'drei';
import BaseCuboid from './BaseCuboid';
import { onCuboidClicked } from '../executor/executorSlice';

const EditableCuboid = ({ cuboid, cuboidIndex, orbitRef }) => {
  const transformRef = useRef();
  const dispatch = useDispatch();

  // Disable drag for the orbit camera when dragging the transform controls.
  useEffect(() => {
    const controls = transformRef.current;
    if (controls) {
      const callback = (event) => {
        // eslint-disable-next-line no-param-reassign
        orbitRef.current.enabled = !event.value;
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
  const editingCuboidMode = useSelector((state) => state.executorSlice.editingCuboidMode);
  return (
    <TransformControls ref={transformRef} mode={editingCuboidMode}>
      <BaseCuboid cuboid={cuboid} color="red" onClick={() => dispatch(onCuboidClicked(cuboidIndex))} />
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
  cuboidIndex: PropTypes.number.isRequired,

  // eslint-disable-next-line react/forbid-prop-types
  orbitRef: PropTypes.any, // It's a ref.
};

EditableCuboid.defaultProps = {
  orbitRef: undefined,
};

export default EditableCuboid;
