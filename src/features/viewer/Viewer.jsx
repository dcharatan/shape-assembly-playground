import React, { useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, ReactReduxContext, Provider } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { v4 as uuidv4 } from 'uuid';
import HoverableCuboid from './HoverableCuboid';
import EditableCuboid from './EditableCuboid';
import NonSerializableContext from '../context/NonSerializableContext';
import { getEditabilityEnabled } from '../../environment';
import ViewerCore from './ViewerCore';
import { registerCamera } from './cameraSync';
import CuboidsForCode from './CuboidsForCode';

const Viewer = ({ inEditingTask }) => {
  const { cuboids, executionInProgress, errored } = useSelector((state) => state.executorSlice);
  const hoveredTranspiledLines = useSelector((state) => state.editorSlice.hoveredTranspiledLines);
  const transpiled = useSelector((state) => state.executorSlice.transpiled);
  const [orbitRef, setOrbitRef] = useState(undefined);
  const orbitRefHook = useCallback((camera) => {
    setOrbitRef({ current: camera });
    registerCamera(camera);
  }, []);
  const camRef = useRef();

  // For the editing task, handle the wireframe stuff.
  const wireframeCode = useSelector((state) => state.editingTaskSlice.targetCode);
  const wireframeAbstractions = useSelector((state) => state.editingTaskSlice.abstractions);
  const wireframeEnabled = useSelector((state) => state.editingTaskSlice.wireframeEnabled);

  let borderColorClass = 'border-primary';
  if (errored) {
    borderColorClass = 'border-danger';
  }
  if (executionInProgress) {
    borderColorClass = 'border-secondary';
  }

  const editingCuboidIndex = useSelector((state) => state.executorSlice.editingCuboidIndex);
  const getCuboids = () => {
    if (!cuboids) {
      return null;
    }
    return cuboids.map((cuboid, cuboidIndex) => {
      if (cuboidIndex === editingCuboidIndex && getEditabilityEnabled() && transpiled) {
        return <EditableCuboid key={uuidv4()} cuboidIndex={cuboidIndex} orbitRef={orbitRef} cuboid={cuboid} />;
      }

      return (
        <HoverableCuboid
          key={uuidv4()}
          cuboidIndex={cuboidIndex}
          cuboid={cuboid}
          hoveredTranspiledLines={hoveredTranspiledLines}
        />
      );
    });
  };

  return (
    <div className={`border h-100 w-100 ${borderColorClass}`}>
      <NonSerializableContext.Consumer>
        {(nonSerializableContext) => (
          <ReactReduxContext.Consumer>
            {({ store }) => (
              <Canvas
                orthographic
                camera={{
                  position: [8, 6, 10],
                  zoom: 150,
                }}
              >
                <NonSerializableContext.Provider value={nonSerializableContext}>
                  <Provider store={store}>
                    <ViewerCore camRef={camRef} orbitRef={orbitRefHook}>
                      {getCuboids()}
                      {wireframeCode && inEditingTask ? (
                        <CuboidsForCode
                          code={wireframeCode}
                          prefix={wireframeAbstractions}
                          wireframe
                          wireframeColor="red"
                          invisible={!wireframeEnabled}
                        />
                      ) : null}
                    </ViewerCore>
                  </Provider>
                </NonSerializableContext.Provider>
              </Canvas>
            )}
          </ReactReduxContext.Consumer>
        )}
      </NonSerializableContext.Consumer>
    </div>
  );
};

Viewer.propTypes = {
  inEditingTask: PropTypes.bool,
};

Viewer.defaultProps = {
  inEditingTask: false,
};

export default Viewer;
