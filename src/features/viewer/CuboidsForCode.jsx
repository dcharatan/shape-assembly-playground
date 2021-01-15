/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { fetchExecute } from '../executor/executorSlice';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';

const CuboidsForCode = ({ code, ...props }) => {
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
        <BaseCuboid {...props} />
      </GroupWithMatrix>
    );
  });

  return cuboidNodes;
};

export default CuboidsForCode;
