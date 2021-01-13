import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { Canvas } from 'react-three-fiber';
import ViewerCore from './ViewerCore';
import { fetchExecute } from '../executor/executorSlice';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';
import { registerCamera } from './cameraSync';

const FixedViewer = ({ code }) => {
  const orbitRef = useCallback((camera) => {
    registerCamera(camera);
  }, []);

  // Call the executor to get the code's result.
  const [cuboids, setCuboids] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      // Transpile the code.
      const ast = new ShapeAssemblyParser().parseShapeAssemblyProgram(code);
      const transpiled = new Transpiler().transpile(ast);

      // Call the executor.
      const result = await fetchExecute(transpiled.text);
      const json = await result.json();
      setCuboids(json.cuboids);
    };
    doFetch();
  }, [code]);

  const cuboidNodes = cuboids.map((cuboid) => {
    const matrix = makeCuboidMatrix(cuboid);
    if (cuboid.isBbox) {
      return null;
    }
    return (
      <GroupWithMatrix matrix={matrix} key={JSON.stringify(cuboid)}>
        <BaseCuboid color="orange" />
      </GroupWithMatrix>
    );
  });

  return (
    <div className="w-100 h-100 border border-secondary">
      <Canvas
        orthographic
        camera={{
          position: [8, 6, 10],
          zoom: 150,
        }}
      >
        <ViewerCore orbitRef={orbitRef}>{cuboidNodes}</ViewerCore>
      </Canvas>
    </div>
  );
};

FixedViewer.propTypes = {
  code: PropTypes.string.isRequired,
};

export default FixedViewer;
