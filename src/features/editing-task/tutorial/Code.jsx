import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ children }) => (
  <span
    className="rounded border"
    style={{
      fontFamily: ['Inconsolata', 'monospace'],
      backgroundColor: '#eee',
      borderColor: '#ccc',
      padding: '0px 2px',
      color: '#444',
    }}
  >
    {children}
  </span>
);

Code.propTypes = {
  children: PropTypes.node,
};

Code.defaultProps = {
  children: null,
};

export default Code;
