import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SapEditor from './SapEditor';

const EditorArea = (props) => {
  const [key, setKey] = useState('code');
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="code" title="Source" />
        <Tab eventKey="transpiled" title="Transpiled" />
      </Tabs>
      <div className="d-flex flex-grow-1 w-100 overflow-y-hidden">
        <SapEditor {...props} />
      </div>
    </div>
  );
};

export default EditorArea;
