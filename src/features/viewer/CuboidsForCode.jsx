// This is fine because for the naming task, the number and order of cuboids never changes.
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import BaseCuboid, { makeCuboidMatrix } from './BaseCuboid';
import GroupWithMatrix from './GroupWithMatrix';
import { getTranspilerSettings } from '../context/NonSerializableContextManager';
import { getColor } from '../../colors';
import CachedRateLimiter from '../executor/CachedRateLimiter';

const CuboidsForCode = ({ code, prefix, highlightAbstraction, color, ...props }) => {
  // Call the executor to get the code's result.
  const [cuboids, setCuboids] = useState([]);
  const [highlights, setHighlights] = useState({});
  const rateLimiterRef = useRef(new CachedRateLimiter(2));
  const doFetch = useCallback(async () => {
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
    rateLimiterRef.current.cachedExecute(transpiled.text, (result) => {
      setCuboids(result.cuboids);
      setHighlights(newHighlights);
    });
  }, [code, prefix, highlightAbstraction]);
  useEffect(() => {
    doFetch();
  }, [code, prefix, highlightAbstraction, doFetch]);

  const cuboidNodes = cuboids.map((cuboid) => {
    const highlight = highlights[cuboid.lineIndex];
    const matrix = makeCuboidMatrix(cuboid);
    if (cuboid.isBbox) {
      if (!highlight) {
        return null;
      }
      return (
        <GroupWithMatrix matrix={matrix} key={JSON.stringify(cuboid)}>
          <BaseCuboid {...props} wireframeColor={getColor(highlight)} wireframe />
        </GroupWithMatrix>
      );
    }
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
