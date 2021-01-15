import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import ViewerCore from './ViewerCore';
import { registerCamera } from './cameraSync';
import CuboidsForCode from './CuboidsForCode';

const FixedViewer = ({ code }) => {
  const orbitRef = useCallback((camera) => {
    registerCamera(camera);
  }, []);

  return (
    <div className="w-100 h-100 border border-secondary">
      <Canvas
        orthographic
        camera={{
          position: [8, 6, 10],
          zoom: 150,
        }}
      >
        <ViewerCore orbitRef={orbitRef}>
          <CuboidsForCode code={code} color="orange" />
        </ViewerCore>
      </Canvas>
    </div>
  );
};

FixedViewer.propTypes = {
  code: PropTypes.string.isRequired,
};

export default FixedViewer;
