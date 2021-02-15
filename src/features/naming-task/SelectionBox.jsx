import React from 'react';
import PropTypes from 'prop-types';

const SelectionBox = ({ selected, children }) => (
  <div className={selected ? 'rounded bg-light border-primary border p-2' : 'p-2 invisible-border'}>{children}</div>
);

SelectionBox.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node,
};

SelectionBox.defaultProps = {
  selected: false,
  children: null,
};

export default SelectionBox;
