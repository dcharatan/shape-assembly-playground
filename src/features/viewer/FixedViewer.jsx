import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import ViewerCore from './ViewerCore';
import { registerCamera } from './cameraSync';
import CuboidsForCode from './CuboidsForCode';

const FixedViewer = ({ code, cuboidColor, prefix, noBorder, highlightAbstraction }) => {
  const orbitRef = useCallback((camera) => {
    registerCamera(camera);
  }, []);

  return (
    <div className={`w-100 h-100 ${noBorder ? '' : 'border border-secondary'}`}>
      <Canvas
        orthographic
        camera={{
          position: [8, 6, 10],
          zoom: 150,
        }}
      >
        <ViewerCore orbitRef={orbitRef}>
          <CuboidsForCode code={code} prefix={prefix} highlightAbstraction={highlightAbstraction} color={cuboidColor} />
        </ViewerCore>
      </Canvas>
    </div>
  );
};

FixedViewer.propTypes = {
  code: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  noBorder: PropTypes.bool,
  highlightAbstraction: PropTypes.string,
  cuboidColor: PropTypes.string,
};

FixedViewer.defaultProps = {
  prefix: '',
  noBorder: false,
  highlightAbstraction: undefined,
  cuboidColor: 'orange',
};

export default FixedViewer;
