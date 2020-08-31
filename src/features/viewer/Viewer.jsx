import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  const { obj, fetchingObj, errored } = useSelector((state) => state.executorSlice);
  const loader = new OBJLoader2();
  let geometry;
  if (obj) {
    try {
      geometry = loader.parse(obj);
    } catch (e) {
      console.warn(e);
    }
  }
  let mesh = null;
  if (geometry) {
    mesh = (
      <mesh geometry={geometry.children[0].geometry}>
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>
    );
  }

  let borderColorClass = 'border-primary';
  if (errored) {
    borderColorClass = 'border-danger';
  }
  if (fetchingObj) {
    borderColorClass = 'border-secondary';
  }

  return (
    <div className={`rounded border h-100 w-100 ${borderColorClass}`}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 20, 40]} />
        <CameraControls />
        {mesh}
      </Canvas>
    </div>
  );
};

export default Viewer;
