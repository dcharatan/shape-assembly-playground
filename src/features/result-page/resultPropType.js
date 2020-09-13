import PropTypes from 'prop-types';

export default PropTypes.shape({
  wakeSleepRounds: PropTypes.arrayOf(
    PropTypes.shape({
      usageAfterAddingFunctions: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
      usageAfterRemovingFunctions: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    })
  ).isRequired,
  libraryFunctions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});
