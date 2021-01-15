import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SapNavbar from './features/nav/SapNavbar';
import EditorArea from './features/editor/EditorArea';
import ViewerArea from './features/viewer/ViewerArea';
import rootReducer from './features/redux/rootReducer';
import NotFound from './features/404/NotFound';
import ResultPage from './features/result-page/ResultPage';
import NonSerializableContextManager from './features/context/NonSerializableContextManager';
import KeypressHandler from './KeypressHandler';
import Gallery from './features/gallery/Gallery';
import EditingTask from './features/editing-task/EditingTask';
import EditingTaskThankYou from './features/editing-task/EditingTaskThankYou';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <NonSerializableContextManager>
        <div className="d-flex flex-column h-100 overflow-y-hidden">
          <SapNavbar />
          <Switch>
            <Route exact path="/editing-task">
              <EditingTask />
            </Route>
            <Route exact path="/editing-task-thank-you">
              <EditingTaskThankYou />
            </Route>
            <Route exact path="/result-viewer">
              <ResultPage />
            </Route>
            <Route exact path="/">
              <div className="d-flex flex-grow-1 overflow-y-hidden">
                <div className="d-flex flex-row w-100 h-100 p-2 overflow-y-hidden">
                  <div className="w-50 h-100 p-2 overflow-y-hidden d-flex flex-column">
                    <div className="w-100 d-flex flex-grow-1 overflow-y-hidden">
                      <EditorArea />
                    </div>
                    <Gallery />
                  </div>
                  <div className="w-50 h-100 p-2">
                    <ViewerArea />
                  </div>
                </div>
              </div>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <KeypressHandler />
      </NonSerializableContextManager>
    </Provider>
  </BrowserRouter>
);

export default App;
