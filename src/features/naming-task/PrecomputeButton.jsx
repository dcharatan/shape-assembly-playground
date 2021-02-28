/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { fetchPreparePrecomputations } from './precomputation';

const PrecomputeButton = () => {
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const programs = useSelector((state) => state.namingTaskSlice.programs);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);
  const cachedValuesFetched = useSelector((state) => state.namingTaskSlice.cachedValuesFetched);
  const [waiting, setWaiting] = useState(false);

  // Show a loading spinner if the cached values haven't been fetched.
  if (!cachedValuesFetched) {
    return (
      <div className="m-2 d-flex flex-row align-items-center">
        <Spinner animation="border" size="sm" variant="secondary" className="mr-1" />
        <div className="ml-1 text-secondary">Loading...</div>
      </div>
    );
  }

  // Show a hidden button to trigger precomputation if they have been fetched.
  return (
    <div
      className="m-2 text-secondary"
      onClick={async (e) => {
        // Make it harder to accidentally trigger precomputations by requiring shift + alt + click.
        if (!waiting && e.altKey && e.shiftKey) {
          setWaiting(true);
          await fetchPreparePrecomputations(prefix, programs, abstraction);
          setWaiting(false);
        }
      }}
      role="button"
    >
      {waiting ? 'Precomputing Values...' : 'Done loading.'}
    </div>
  );
};

export default PrecomputeButton;
