import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import material from './material';

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
  const loader = new OBJLoader();
  let geometry;
  if (cuboids) {
    try {
      geometry = cuboids.map((c) => loader.parse(c.obj));
    } catch (e) {
      console.warn(e);
    }
  }
  let meshes = null;
  if (geometry) {
    meshes = geometry.map((obj) => {
      const geometry = obj.children[0].geometry;
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      return (
        <mesh geometry={geometry} material={material} />
      );
    });
  }

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
        {meshes}
      </Canvas>
    </div>
  );
};

export default Viewer;
