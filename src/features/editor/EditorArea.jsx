import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SapEditor from './SapEditor';
import { setTab } from './editorSlice';
import Tutorial from '../tutorial/Tutorial';
import ErrorWarning from '../tutorial/ErrorWarning';
import { getShowTutorial } from '../../environment';

const EditorArea = ({ hideTabs, hideTutorial, disableTextEditing }) => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.editorSlice.tab);

  const tabs = (
    <Tabs activeKey={tab} onSelect={(k) => dispatch(setTab(k))}>
      <Tab eventKey="code" title="Source" />
      <Tab eventKey="transpiled" title="Transpiled" />
    </Tabs>
  );

  return (
    <div className="w-100 h-100 d-flex flex-column">
      {getShowTutorial() && !hideTutorial ? <Tutorial /> : null}
      {hideTabs ? null : tabs}
      <div className={`d-flex flex-grow-1 w-100 overflow-y-hidden ${hideTabs ? 'border-top' : ''}`}>
        <SapEditor disableTextEditing={disableTextEditing} />
      </div>
      <ErrorWarning className="mt-3 mb-0" />
    </div>
  );
};

EditorArea.propTypes = {
  hideTabs: PropTypes.bool,
  hideTutorial: PropTypes.bool,
  disableTextEditing: PropTypes.bool,
};

EditorArea.defaultProps = {
  hideTabs: false,
  hideTutorial: false,
  disableTextEditing: false,
};

export default EditorArea;
