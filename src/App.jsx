import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SapNavbar from './features/nav/SapNavbar';
import EditorArea from './features/editor/EditorArea';
import ViewerArea from './features/viewer/ViewerArea';
import rootReducer from './features/redux/rootReducer';
import NotFound from './features/404/NotFound';
import ResultPage from './features/result-page/ResultPage';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  const [ast, setAst] = useState(undefined);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="d-flex flex-column h-100 overflow-y-hidden">
          <SapNavbar />
          <Switch>
            <Route exact path="/result-viewer">
              <ResultPage />
            </Route>
            <Route exact path="/">
              <div className="d-flex flex-grow-1 overflow-y-hidden">
                <div className="d-flex flex-row w-100 h-100 p-2 overflow-y-hidden">
                  <div className="w-50 h-100 p-2 overflow-y-hidden">
                    <EditorArea ast={ast} setAst={setAst} />
                  </div>
                  <div className="w-50 h-100 p-2">
                    <ViewerArea ast={ast} />
                  </div>
                </div>
              </div>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
