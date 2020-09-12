import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import material from './material';
import * as THREE from 'three';

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
  let meshes;
  if (cuboids) {
    meshes = cuboids.map((cuboid) => {
      const newGeometry = new THREE.BoxGeometry(...cuboid.dimensions);

      const translate = new THREE.Matrix4();
      translate.makeTranslation(...cuboid.position);

      const rotate = new THREE.Matrix4();
      rotate.lookAt(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...cuboid.frontNormal),
        new THREE.Vector3(...cuboid.topNormal)
      );

      newGeometry.applyMatrix4(translate.multiply(rotate));

      return (
        <mesh geometry={newGeometry} material={material} />
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
