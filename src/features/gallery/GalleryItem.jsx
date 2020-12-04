import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ thumbnail, onClick }) => (
  <div
    className="m-1 border cursor-pointer border-primary-on-hover"
    onClick={onClick}
    role="button"
    tabIndex={-1}
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        onClick();
      }
    }}
  >
    <img src={thumbnail} alt="cube" width={100} height={100} />
  </div>
);

GalleryItem.propTypes = {
  thumbnail: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

GalleryItem.defaultProps = {
  onClick: () => {},
};

export default GalleryItem;
