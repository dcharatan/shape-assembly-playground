import React from 'react';
import PropTypes from 'prop-types';
import './UnstyledButton.scss';

const UnstyledButton = ({ onClick, className, children }) => {
  const classNames = ['unstyled-button', className];
  return (
    <div
      onClick={() => onClick()}
      className={classNames.join(' ')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Spacebar' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {children}
    </div>
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
