import React from 'react';
import PropTypes from 'prop-types';

const HighlightDecorator = ({ children, color, highlightColor, onHover, highlighted }) => (
  <span
    className={highlighted ? 'text-white' : ''}
    style={{
      color: highlighted ? 'white' : color,
      outlineWidth: highlighted ? '3px' : 0,
      outlineColor: highlightColor,
      outlineStyle: 'solid',
      backgroundColor: highlighted ? highlightColor : 'white',
    }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    {children}
  </span>
);

HighlightDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  highlightColor: PropTypes.string,
  onHover: PropTypes.func,
  highlighted: PropTypes.bool,
};

HighlightDecorator.defaultProps = {
  color: 'black',
  highlightColor: 'black',
  onHover: () => {},
  highlighted: false,
};

export default HighlightDecorator;
