import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { v4 as uuidv4 } from 'uuid';
import Cuboid from './Cuboid';

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
  const selectedLine = useSelector((state) => state.editorSlice.selectedLine);
  const dispatch = useDispatch();

  let borderColorClass = 'border-primary';
  if (errored) {
    borderColorClass = 'border-danger';
  }
  if (executionInProgress) {
    borderColorClass = 'border-secondary';
  }

  const getCuboids = () => {
    if (!cuboids) {
      return null;
    }
    return cuboids.map((cuboid) => (
      <Cuboid cuboid={cuboid} key={uuidv4()} dispatch={dispatch} selectedLine={selectedLine} />
    ));
  };

  return (
    <div className={`border h-100 w-100 ${borderColorClass}`}>
      <Canvas>
        <ambientLight intensity={0.65} />
        <pointLight position={[10, 20, 40]} intensity={0.85} />
        <pointLight position={[-10, -20, -40]} intensity={0.65} />
        <CameraControls />
        {getCuboids()}
      </Canvas>
    </div>
  );
};

export default Viewer;
