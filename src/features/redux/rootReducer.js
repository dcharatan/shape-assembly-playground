import { combineReducers } from '@reduxjs/toolkit';
import executorSlice from '../executor/executorSlice';
import editorSlice from '../editor/editorSlice';

const rootReducer = combineReducers({
  executorSlice,
  editorSlice,
});

export default rootReducer;
