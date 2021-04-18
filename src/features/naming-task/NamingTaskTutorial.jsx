import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const markdown = `Welcome to the naming task! You will be asked to name several functions and their parameters. These functions are used in programs that generate the shapes shown on the right. The highlighted blue cuboids are created by the function being named, although other cuboids can also be affected by the function. **When naming functions and parameters, try to choose names that fit *most* of the six shapes shown.** Note that you can (and sometimes may have to) give multiple functions or parameters the same name.`;

const NamingTaskTutorial = () => {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
      <div style={{ marginBottom: '-1em' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Alert>
  );
};

export default NamingTaskTutorial;
