import { combineReducers } from '@reduxjs/toolkit';
import executorSlice from '../executor/executorSlice';
import editorSlice from '../editor/editorSlice';
import editingTaskSlice from '../editing-task/editingTaskSlice';

const rootReducer = combineReducers({
  executorSlice,
  editorSlice,
  editingTaskSlice,
});

export default rootReducer;
