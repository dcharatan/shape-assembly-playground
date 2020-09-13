import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    usageAfterAddingFunctions: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    usageAfterRemovingFunctions: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  })
);
