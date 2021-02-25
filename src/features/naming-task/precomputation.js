/* eslint-disable no-bitwise */
import ShapeAssemblyParser, { Transpiler } from '@dcharatan/shape-assembly-parser';
import { getExecutionBaseUrl } from '../../environment';
import { getTranspilerSettings } from '../context/NonSerializableContextManager';
import { getFloatParameters, substituteAbstractionValues } from '../executor/executorSlice';

// https://stackoverflow.com/a/52171480/2696186
const hash = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i += 1) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export const getProgramKey = (transpiledProgramText) => hash(transpiledProgramText);

export const preparePrecomputations = (prefix, program, abstraction) => {
  const parameters = getFloatParameters(prefix, abstraction);
  const precomputations = {};
  Object.keys(parameters).forEach((parameter) => {
    for (let parameterValue = 0; parameterValue <= 1; parameterValue += 0.01) {
      const substitutedProgram = substituteAbstractionValues(program, prefix, abstraction, {
        [parameter]: parameterValue,
      });
      const ast = new ShapeAssemblyParser().parseShapeAssemblyProgram(substitutedProgram, prefix);
      const { text } = new Transpiler().transpile(ast, getTranspilerSettings());
      if (text) {
        precomputations[getProgramKey(text)] = text;
      }
    }
  });

  return precomputations;
};

export const fetchPreparePrecomputations = (prefix, programs, abstraction) => {
  const precomputations = {};
  programs.forEach((program) => Object.assign(precomputations, preparePrecomputations(prefix, program, abstraction)));
  return fetch(`${getExecutionBaseUrl()}/precompute`, {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify(precomputations),
  });
};
