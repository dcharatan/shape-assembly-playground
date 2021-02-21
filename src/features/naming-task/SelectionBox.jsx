import React from 'react';
import PropTypes from 'prop-types';
import UnstyledButton from '../../components/UnstyledButton';
import './SelectionBox.scss';

const SelectionBox = ({ header, children, selected, onSelect }) => {
  const classNames = ['w-100 rounded selection-box-button'];
  if (selected) {
    classNames.push('border-primary-important');
  }
  return (
    <UnstyledButton className={classNames.join(' ')} onClick={() => onSelect()}>
      <div className="p-2">{header}</div>
      {selected && <div className="px-2 pb-2">{children}</div>}
    </UnstyledButton>
  );
};

SelectionBox.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  children: PropTypes.node,
  header: PropTypes.node,
};

SelectionBox.defaultProps = {
  selected: false,
  onSelect: () => {},
  header: null,
  children: null,
};

export default SelectionBox;
