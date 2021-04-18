import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SliderInput from '../../components/SliderInput';
import SelectionBox from './SelectionBox';
import NameField from './NameField';
import { recordAction, setParameterValue } from './namingTaskSlice';
import RangeSelector from './RangeSelector';
import { getParameterBoundsToolsEnabled } from '../../environment';

const NamingInterfaceParameter = ({ selected, onSelect, givenName, parameterIndex, onConfirm, index, name }) => {
  const parameterValues = useSelector((state) => state.namingTaskSlice.parameterValues);
  const value = parameterValues[name];
  const dispatch = useDispatch();
  const setValue = (newValue) => dispatch(setParameterValue({ name, newValue }));

  // Find the minimum and maximum for the parameter.
  const parameterBounds = useSelector((state) => state.namingTaskSlice.parameterBounds);
  const taskIndex = useSelector((state) => state.namingTaskSlice.taskIndex);
  let range;
  try {
    const rangeValue = parameterBounds[taskIndex][parameterIndex].range;
    range = rangeValue ? parseFloat(rangeValue) : 1;
  } catch {
    range = 1;
  }
  const nameArea = (
    <div>
      <Badge variant={givenName ? 'success' : 'danger'}>{givenName ? 'Named' : 'Unnamed'}</Badge>
      {` Parameter ${givenName ? `"${givenName}"` : parameterIndex + 1}`}
    </div>
  );

  return (
    <div className={selected ? 'my-2' : ''}>
      <SelectionBox
        header={nameArea}
        selected={selected}
        eventKey={index.toString()}
        onSelect={() => {
          if (!selected) {
            onSelect();
            dispatch(recordAction({ type: 'SELECT_PARAMETER', information: { name } }));
          }
        }}
      >
        <div className="pt-2 border-top">
          <SliderInput value={value} onChange={setValue} animation={{ fps: 30, step: 0.05 }} min={0} max={range} />
          <NameField className="mt-2" onConfirm={onConfirm} rename={!!givenName} initialName={givenName} />
          {getParameterBoundsToolsEnabled() ? <RangeSelector className="mt-2" parameterIndex={parameterIndex} /> : null}
        </div>
      </SelectionBox>
    </div>
  );
};

NamingInterfaceParameter.propTypes = {
  givenName: PropTypes.string,
  name: PropTypes.string.isRequired,
  parameterIndex: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  onConfirm: PropTypes.func,
  index: PropTypes.number.isRequired,
};

NamingInterfaceParameter.defaultProps = {
  selected: false,
  givenName: undefined,
  onConfirm: () => {},
  onSelect: () => {},
};

export default NamingInterfaceParameter;
