import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { Canvas } from 'react-three-fiber';
import ViewerCore from './ViewerCore';
import { fetchExecute } from '../executor/executorSlice';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';

const FixedViewer = ({ code }) => {
  const orbitRef = useRef();

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
    return (
      <GroupWithMatrix matrix={matrix}>
        <BaseCuboid color="orange" />
      </GroupWithMatrix>
    );
  });

  return (
    <div className="w-100 h-100 border border-secondary">
      <Canvas>
        <ViewerCore orbitRef={orbitRef}>{cuboidNodes}</ViewerCore>
      </Canvas>
    </div>
  );
};

FixedViewer.propTypes = {
  code: PropTypes.string.isRequired,
};

export default FixedViewer;
