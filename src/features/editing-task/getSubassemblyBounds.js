const getSubassemblyBounds = (transpiled) => {
  const subassemblyBounds = {};
  let currentAssembly;
  transpiled.split('\n').forEach((line) => {
    if (line.includes('Assembly')) {
      // eslint-disable-next-line prefer-destructuring
      currentAssembly = line.split(' ')[1];
    } else if (line.includes('bbox = Cuboid')) {
      const components = line.split(',');

      // Since this is specific to the editing task, we know what the subassemblies will be called.
      let name = currentAssembly.replace('Program_', 'make_subassembly_');
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

export default getSubassemblyBounds;
