const getHiddenParameterCount = (invocation, definitions) => {
  let hiddenParameterCount = 0;
  if (invocation.definitionToken.text.includes('abstraction')) {
    const definition = definitions.find((d) => d.declaration.nameToken.text === invocation.definitionToken.text);
    if (!definition) {
      throw new Error('Could not find definition.');
    }

    definition.declaration.parameterTokens.forEach((token) => {
      if (['f_bb_x', 'f_bb_y', 'f_bb_z', 'i_bbox'].includes(token.text)) {
        hiddenParameterCount += 1;
      }
    });
  }
  return hiddenParameterCount;
};

export default getHiddenParameterCount;
