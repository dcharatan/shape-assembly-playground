import React from 'react';
import { Canvas } from 'react-three-fiber';
import Cuboid from './Cuboid';

const Viewer = () => {
  return (
    <div className="rounded border h-100 w-100">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Cuboid position={[-2.5, 0, 0]} />
        <Cuboid position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Viewer;
