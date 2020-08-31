import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshStandardMaterial } from 'three';

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
  const obj = useSelector((state) => state.executorSlice.obj);
  const loader = new OBJLoader2();
  let geometry;
  if (obj) {
    try {
      geometry = loader.parse(obj);
    } catch (e) {
      console.warn(e);
    }
  }
  if (!geometry) {
    return null;
  }

  return (
    <div className="rounded border h-100 w-100">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 20, 40]} />
        <CameraControls />
        <mesh geometry={geometry.children[0].geometry}>
          <meshStandardMaterial attach="material" color="gray" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Viewer;
