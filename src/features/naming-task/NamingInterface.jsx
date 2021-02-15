import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Code from '../editing-task/tutorial/Code';
import NamingInterfaceParameter from './NamingInterfaceParameter';
import NameField from './NameField';
import SelectionBox from './SelectionBox';

const getFloatParameters = (prefix, targetAbstraction) => {
  // Find the line where the abstraction is declared.
  const abstractionDeclaration = prefix.split('\n').find((line) => line.includes(`def ${targetAbstraction}`));

  // Extract the parameter names.
  const parameters = abstractionDeclaration
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map((x) => x.trim());

  // Map parameters to their indices within the function.
  const parameterMap = {};
  parameters.forEach((parameter, index) => {
    if (parameter.includes('f_var')) {
      parameterMap[parameter] = index;
    }
  });
  return parameterMap;
};

const NamingInterface = ({ prefix, targetAbstraction }) => {
  // Set up state for what's currently being named.
  // -1 is the function name. Nonnegative values are parameters (by float parameter index).
  const [activeItem, setActiveItem] = useState(-1);
  const [names, setNames] = useState({});

  // Find the abstraction's float parameters.
  const parameterMap = getFloatParameters(prefix, targetAbstraction);

  // Create an input for each parameter.
  const parameters = Object.entries(parameterMap).map(([name], floatParameterIndex) => (
    <NamingInterfaceParameter
      name={`Parameter ${floatParameterIndex} (${names[name] ?? name})`}
      selected={floatParameterIndex === activeItem}
      onConfirm={(value) => {
        setNames({ [name]: value, ...names });
        setActiveItem(activeItem + 1);
      }}
    />
  ));

  // Create the function name area.
  const nameFieldActive = activeItem === -1;
  const nameField = (
    <NameField
      type="Function"
      onConfirm={(value) => {
        setNames({ function: value });
        setActiveItem(0);
      }}
      className={nameFieldActive ? '' : 'p-2'}
      disabled={!nameFieldActive}
    />
  );
  const nameArea = (
    <SelectionBox selected={nameFieldActive}>
      <h1>
        <Code>{names.function ?? targetAbstraction}</Code>
      </h1>
      {nameFieldActive && nameField}
    </SelectionBox>
  );

  return (
    <div className="border rounded p-2 h-100 w-100 overflow-y-scroll">
      {nameArea}
      {parameters}
    </div>
  );
};

NamingInterface.propTypes = {
  prefix: PropTypes.string.isRequired,
  targetAbstraction: PropTypes.string.isRequired,
};

export default NamingInterface;
