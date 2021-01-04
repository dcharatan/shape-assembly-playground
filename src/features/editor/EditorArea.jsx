import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SapEditor from './SapEditor';
import { setTab } from './editorSlice';
import Tutorial from '../tutorial/Tutorial';
import ErrorWarning from '../tutorial/ErrorWarning';
import { getShowTutorial } from '../../environment';

const EditorArea = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.editorSlice.tab);

  return (
    <div className="w-100 h-100 d-flex flex-column">
      {getShowTutorial() ? <Tutorial /> : null}
      <Tabs activeKey={tab} onSelect={(k) => dispatch(setTab(k))}>
        <Tab eventKey="code" title="Source" />
        <Tab eventKey="transpiled" title="Transpiled" />
      </Tabs>
      <div className="d-flex flex-grow-1 w-100 overflow-y-hidden">
        <SapEditor />
      </div>
      <ErrorWarning className="mt-3 mb-0" />
    </div>
  );
};

export default EditorArea;
