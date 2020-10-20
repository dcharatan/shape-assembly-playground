import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import NonSerializableContext from '../context/NonSerializableContext';

const ErrorWarning = (props) => {
  const { ast } = useContext(NonSerializableContext);
  const show = ast?.errors?.length;
  if (!show) {
    return null;
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Alert {...props} variant="danger">
      Your ShapeAssembly code contains an error. Hover over it to learn more.
    </Alert>
  );
};

export default ErrorWarning;
