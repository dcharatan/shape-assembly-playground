import PropTypes from 'prop-types';

export const tokenToKey = (token) => `${token.start}/${token.end}`;

export const tokenPropType = PropTypes.shape({
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
});
