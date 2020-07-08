import React from 'react';
import SapNavbar from './features/nav/SapNavbar';
import EditorArea from './features/editor/EditorArea';
import ViewerArea from './features/viewer/ViewerArea';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <SapNavbar />
      <div className="d-flex flex-grow-1">
        <div className="d-flex flex-row w-100 h-100 p-2">
          <div className="w-50 h-100 p-2">
            <EditorArea />
          </div>
          <div className="w-50 h-100 p-2">
            <ViewerArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
