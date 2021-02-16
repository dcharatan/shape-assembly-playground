/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';
import { getTranspilerSettings } from '../context/NonSerializableContextManager';
import { getColor } from '../../colors';
import RateLimiter from '../executor/RateLimiter';

const CuboidsForCode = ({ code, prefix, highlightAbstraction, color, ...props }) => {
  // Call the executor to get the code's result.
  const [cuboids, setCuboids] = useState([]);
  const [highlights, setHighlights] = useState({});
  const rateLimiterRef = useRef(new RateLimiter(2));
  useEffect(() => {
    const doFetch = async () => {
      // Transpile the code.
      const ast = new ShapeAssemblyParser().parseShapeAssemblyProgram(code, prefix);
      const transpiled = new Transpiler().transpile(ast, getTranspilerSettings());
      if (!transpiled) {
        return;
      }

      // If a highlight is specified, find all indices of the highlight token.
      const newHighlights = {};
      if (highlightAbstraction) {
        const highlightKeys = [...code.matchAll(new RegExp(highlightAbstraction, 'gi'))].map(
          (a) => `${a.index}/${a.index + highlightAbstraction.length}`
        );
        highlightKeys.forEach((key) => {
          const details = transpiled.metadata.get(key);
          if (!details) {
            return;
          }
          details.forEach(({ line, variant }) => {
            newHighlights[line] = variant;
          });
        });
      }

      // Call the executor.
      rateLimiterRef.current.execute(transpiled.text, (result) => {
        setCuboids(result.cuboids);
        setHighlights(newHighlights);
      });
    };
    doFetch();
  }, [code, prefix, highlightAbstraction]);

  const cuboidNodes = cuboids.map((cuboid) => {
    const matrix = makeCuboidMatrix(cuboid);
    if (cuboid.isBbox) {
      return null;
    }
    const highlight = highlights[cuboid.lineIndex];
    return (
      <GroupWithMatrix matrix={matrix} key={JSON.stringify(cuboid)}>
        <BaseCuboid {...props} color={highlight ? getColor(highlight) : color} />
      </GroupWithMatrix>
    );
  });

  return cuboidNodes;
};

CuboidsForCode.propTypes = {
  code: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  highlightAbstraction: PropTypes.string,
  color: PropTypes.string,
};

CuboidsForCode.defaultProps = {
  prefix: '',
  highlightAbstraction: undefined,
  color: undefined,
};

export default CuboidsForCode;
