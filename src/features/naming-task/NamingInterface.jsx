import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { resetParameterValues } from './namingTaskSlice';
import NamingInterfaceParameter from './NamingInterfaceParameter';
import NameField from './NameField';
import SelectionBox from './SelectionBox';
import PrecomputeButton from './PrecomputeButton';
import { getFloatParameters } from '../executor/executorSlice';

const NamingInterface = () => {
  const dispatch = useDispatch();
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);

  // Set up state for what's currently being named.
  // -1 is the function name. Nonnegative values are parameters (by float parameter index).
  const [activeItem, innerSetActiveItem] = useState(-1);
  const setActiveItem = (item) => {
    innerSetActiveItem(item);
    dispatch(resetParameterValues());
  };
  const [names, setNames] = useState({});

  // Find the abstraction's float parameters.
  const parameterMap = getFloatParameters(prefix, abstraction);

  // Create an input for each parameter.
  const parameters = Object.entries(parameterMap).map(([name, index], floatParameterIndex) => (
    <NamingInterfaceParameter
      name={name}
      givenName={names[name]}
      parameterIndex={floatParameterIndex}
      selected={floatParameterIndex === activeItem}
      onSelect={() => {
        setActiveItem(floatParameterIndex);
      }}
      onConfirm={(value, rename) => {
        setNames({ ...names, [name]: value });
        if (!rename) {
          setActiveItem(activeItem + 1);
        }
      }}
      index={index}
      key={name}
    />
  ));

  // Create the function name area.
  // This should probably be done in a separate component.
  const nameFieldActive = activeItem === -1;
  const nameField = (
    <div className="border-top pt-2">
      <NameField
        type="Function"
        onConfirm={(value) => {
          setNames({ ...names, abstraction: value });
          setActiveItem(0);
        }}
        className={nameFieldActive ? '' : 'p-2'}
        disabled={!nameFieldActive}
        rename={!!names.abstraction}
      />
    </div>
  );
  const header = (
    <div>
      <Badge variant={names.abstraction ? 'success' : 'danger'}>{names.abstraction ? 'Named' : 'Unnamed'}</Badge>
      {` Function${names.abstraction ? ` "${names.abstraction}"` : ''}`}
    </div>
  );
  const nameArea = (
    <div className={nameFieldActive ? 'my-2' : undefined}>
      <SelectionBox selected={nameFieldActive} onSelect={() => setActiveItem(-1)} header={header}>
        {nameFieldActive && nameField}
      </SelectionBox>
    </div>
  );

  return (
    <div className="rounded border h-100 w-100 d-flex flex-column">
      <div className="d-flex flex-grow-1 flex-column overflow-y-scroll p-2">
        {nameArea}
        {parameters}
      </div>
      <div className="border-top p-2">
        <Button
          size="sm"
          className="m-2"
          disabled={Object.entries(parameterMap).length + 1 !== Object.entries(names).length}
        >
          Submit Names
        </Button>
        <PrecomputeButton />
      </div>
    </div>
  );
};

export default NamingInterface;
