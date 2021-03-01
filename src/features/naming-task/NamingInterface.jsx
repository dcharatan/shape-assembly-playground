import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setActiveItem, startNextTask, setParameterNames, tasks } from './namingTaskSlice';
import NamingInterfaceParameter from './NamingInterfaceParameter';
import NameField from './NameField';
import SelectionBox from './SelectionBox';
import PrecomputeButton from './PrecomputeButton';
import { getFloatParameters } from '../executor/executorSlice';
import Code from '../editing-task/tutorial/Code';
import CachedRateLimiter from '../executor/CachedRateLimiter';

const NamingInterface = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);
  const taskIndex = useSelector((state) => state.namingTaskSlice.taskIndex);
  const names = useSelector((state) => state.namingTaskSlice.names);
  const activeItem = useSelector((state) => state.namingTaskSlice.activeItem);
  const setNames = (newNames) => dispatch(setParameterNames(newNames));

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
        dispatch(setActiveItem(floatParameterIndex));
      }}
      onConfirm={(value, rename) => {
        setNames({ ...names, [name]: value });
        if (!rename) {
          dispatch(setActiveItem(activeItem + 1));
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
          dispatch(setActiveItem(0));
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
    <div className={nameFieldActive ? 'mb-2' : undefined}>
      <SelectionBox selected={nameFieldActive} onSelect={() => dispatch(setActiveItem(-1))} header={header} first>
        {nameFieldActive && nameField}
      </SelectionBox>
    </div>
  );

  const parameterNames = Object.entries(parameterMap).map(
    ([name], floatParameterIndex) => names[name] ?? `parameter ${floatParameterIndex + 1}`
  );
  const heading = (
    <div className="border-bottom">
      <div className="p-3">
        <div>{`Task ${taskIndex + 1} of ${tasks.length}: You are currently naming:`}</div>
        <Code>{`${names.abstraction ?? 'function'}(${parameterNames.join(', ')})`}</Code>
      </div>
    </div>
  );

  return (
    <div className="rounded border h-100 w-100 d-flex flex-column">
      <div className="d-flex flex-grow-1 flex-column overflow-y-scroll">
        {heading}
        <div className="p-2">
          {nameArea}
          {parameters}
        </div>
      </div>
      <div className="border-top p-2 d-flex flex-row align-items-center">
        <Button
          size="sm"
          className="m-2"
          disabled={Object.entries(parameterMap).length + 1 !== Object.entries(names).length}
          onClick={() => {
            if (taskIndex + 1 < tasks.length) {
              // First, clear all cached executions.
              CachedRateLimiter.cache.clear();
              dispatch(startNextTask());
            } else {
              history.push('/naming-task-thank-you');
            }
          }}
        >
          Submit Names
        </Button>
        <PrecomputeButton />
      </div>
    </div>
  );
};

export default NamingInterface;
