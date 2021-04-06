/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { saveRanges } from './namingTaskSlice';

const SaveRangesButton = (props) => {
  const dispatch = useDispatch();
  return (
    <Button {...props} size="sm" variant="secondary" onClick={() => dispatch(saveRanges())} role="button">
      Save Ranges
    </Button>
  );
};

export default SaveRangesButton;
