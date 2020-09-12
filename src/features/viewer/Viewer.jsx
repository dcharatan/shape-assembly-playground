import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Cuboid from './Cuboid';

extend({ OrbitControls });

const CameraControls = () => {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useFrame(() => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Viewer = () => {
  const { cuboids, executionInProgress, errored } = useSelector((state) => state.executorSlice);

  let borderColorClass = 'border-primary';
  if (errored) {
    borderColorClass = 'border-danger';
  }
  if (executionInProgress) {
    borderColorClass = 'border-secondary';
  }

  return (
    <div className={`rounded border h-100 w-100 ${borderColorClass}`}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 20, 40]} castShadow={true} />
        <CameraControls />
        {cuboids ? cuboids.map((cuboid) => <Cuboid cuboid={cuboid} />) : null}
      </Canvas>
    </div>
  );
};

export default Viewer;
