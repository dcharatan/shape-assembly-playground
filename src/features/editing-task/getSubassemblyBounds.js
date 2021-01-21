const getSubassemblyBounds = (transpiled) => {
  const subassemblyBounds = {};
  let currentAssembly;
  transpiled.text.split('\n').forEach((line) => {
    if (line.includes('Assembly')) {
      // eslint-disable-next-line prefer-destructuring
      currentAssembly = line.split(' ')[1];
    } else if (line.includes('bbox = Cuboid')) {
      const components = line.split(',');

      // Since this is specific to the editing task, we know what the subassemblies will be called.
      let name = transpiled.assemblyMap.get(currentAssembly);
      if (currentAssembly === 'Program_0') {
        name = 'make_root_assembly';
      }

      subassemblyBounds[name] = {
        bbox_x: parseFloat(components[0].split('(')[1].trim()),
        bbox_y: parseFloat(components[1].trim()),
        bbox_z: parseFloat(components[2].trim()),
      };
    }
  });
  return subassemblyBounds;
};

export const getSubassemblyBoundClamps = (ast, silentAst, subassemblyBounds) => {
  const clamps = [];
  const dimensions = new Set(['bbox_x', 'bbox_y', 'bbox_z']);
  ast.definitions.forEach((definition, definitionIndex) => {
    if (!(definition.isChildAssembly || definition.isRootAssembly)) {
      return;
    }
    const definitionName = definition.declaration.nameToken.text;
    let cuboidIndex = 0;
    definition.invocations.forEach((invocation, invocationIndex) => {
      const invocationName = invocation.definitionToken.text;
      if (invocationName === 'Cuboid') {
        cuboidIndex += 1;
      }

      // The root bbox should not be added to the clamps.
      if (cuboidIndex > 0 || definition.isChildAssembly) {
        invocation.argumentExpressions.forEach((expression, expressionIndex) => {
          // Figure out if this expression has a range type of bbox_x/y/z.
          let dimension;
          invocation.argumentRangeTypes[expressionIndex].forEach((rangeType) => {
            if (dimensions.has(rangeType)) {
              dimension = rangeType;
            }
          });
          if (!dimension) {
            return;
          }
          if (expression.children.length > 0) {
            throw new Error('Clamping is not currently supported for expressions.');
          }
          const value = parseFloat(expression.token.text);
          const maximum = subassemblyBounds[definitionName][dimension];
          if (value > maximum) {
            clamps.push({
              token: expression.token.toJson(),
              value: maximum,
            });

            // Reassign the token's text. This will make transpilation produce the clamped number, but potentially mess up token start/end numbering.
            // Since this function is intended to be used for silent updates (where the AST is not used for decorators), this is OK.
            // eslint-disable-next-line no-param-reassign
            silentAst.definitions[definitionIndex].invocations[invocationIndex].argumentExpressions[
              expressionIndex
            ].token.text = maximum.toString();
          }
        });
      }
    });
  });
  return clamps;
};

export default getSubassemblyBounds;
