import { combineReducers } from '@reduxjs/toolkit';
import executorSlice from '../executor/executorSlice';
import editorSlice from '../editor/editorSlice';
import editingTaskSlice from '../editing-task/editingTaskSlice';
import namingTaskSlice from '../naming-task/namingTaskSlice';

const rootReducer = combineReducers({
  executorSlice,
  editorSlice,
  editingTaskSlice,
  namingTaskSlice,
});

export default rootReducer;
