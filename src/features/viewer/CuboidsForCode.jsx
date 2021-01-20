/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { fetchExecute } from '../executor/executorSlice';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';
import { TRANSPILER_SETTINGS } from '../context/NonSerializableContextManager';

const CuboidsForCode = ({ code, prefix, ...props }) => {
  // Call the executor to get the code's result.
  const [cuboids, setCuboids] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      // Transpile the code.
      const ast = new ShapeAssemblyParser().parseShapeAssemblyProgram(code, prefix);
      const transpiled = new Transpiler().transpile(ast, TRANSPILER_SETTINGS);
      if (!transpiled) {
        return;
      }

      // Call the executor.
      const result = await fetchExecute(transpiled.text);
      const json = await result.json();
      setCuboids(json.cuboids);
    };
    doFetch();
  }, [code, prefix]);

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

CuboidsForCode.propTypes = {
  code: PropTypes.string.isRequired,
  prefix: PropTypes.string,
};

CuboidsForCode.defaultProps = {
  prefix: '',
};

export default CuboidsForCode;
