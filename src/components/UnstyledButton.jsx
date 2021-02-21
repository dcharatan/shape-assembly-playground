import React from 'react';
import PropTypes from 'prop-types';
import './UnstyledButton.scss';

const UnstyledButton = ({ onClick, className, children }) => {
  const classNames = ['unstyled-button', className];
  return (
    <button onClick={onClick} className={classNames.join(' ')} type="button">
      {children}
    </button>
  );
};

UnstyledButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

UnstyledButton.defaultProps = {
  onClick: () => {},
  className: null,
  children: null,
};

export default UnstyledButton;
