import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { fetchPreparePrecomputations } from './precomputation';

const PrecomputeButton = () => {
  const prefix = useSelector((state) => state.namingTaskSlice.prefix);
  const programs = useSelector((state) => state.namingTaskSlice.programs);
  const abstraction = useSelector((state) => state.namingTaskSlice.abstraction);
  const [waiting, setWaiting] = useState(false);
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      className="m-2"
      onClick={async () => {
        setWaiting(true);
        await fetchPreparePrecomputations(prefix, programs, abstraction);
        setWaiting(false);
      }}
      disabled={waiting}
    >
      {waiting ? 'Precomputing Values...' : 'Precompute Values'}
    </Button>
  );
};

export default PrecomputeButton;
