import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Cuboid from './Cuboid';
import { v4 as uuidv4 } from 'uuid';

extend({ OrbitControls });

const CameraControls = () => {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Set the default camera position.
  useEffect(() => {
    camera.position.set(-5, 5, 5);
    if (controls && controls.target) {
      controls.target.set(0, 0, 0);
      controls.update();
    }
  }, [camera]);

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
    <div className={`border h-100 w-100 ${borderColorClass}`}>
      <Canvas>
        <ambientLight intensity={0.65} />
        <pointLight position={[10, 20, 40]} intensity={0.85} />
        <pointLight position={[-10, -20, -40]} intensity={0.65} />
        <CameraControls />
        {cuboids ? cuboids.map((cuboid) => <Cuboid cuboid={cuboid} key={uuidv4()} />) : null}
      </Canvas>
    </div>
  );
};

export default Viewer;
