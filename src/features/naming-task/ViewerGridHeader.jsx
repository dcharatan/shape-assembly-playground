import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const ViewerGridHeader = ({ programs, itemsPerPage, setPrograms }) => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const selectPage = (pageIndex) => {
    setSelectedPageIndex(pageIndex);
    const startIndex = itemsPerPage * pageIndex;
    setPrograms(programs.slice(startIndex, startIndex + itemsPerPage));
  };

  // Generate the pagination items.
  const numPages = Math.ceil(programs.length / itemsPerPage);
  const paginationItems = [];
  for (let pageIndex = 0; pageIndex < numPages; pageIndex += 1) {
    paginationItems.push(
      <Pagination.Item key={pageIndex} active={pageIndex === selectedPageIndex} onClick={() => selectPage(pageIndex)}>
        {pageIndex}
      </Pagination.Item>
    );
  }

  return (
    <div className="border rounded-top p-2 d-flex flex-row justify-content-between align-items-center">
      <div className="px-2">Example Programs</div>
      <Pagination className="m-0">{paginationItems}</Pagination>
    </div>
  );
};

ViewerGridHeader.propTypes = {
  programs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  setPrograms: PropTypes.func,
};

ViewerGridHeader.defaultProps = {
  setPrograms: () => {},
};

export default ViewerGridHeader;
