import { combineReducers } from '@reduxjs/toolkit';
import executorSlice from '../executor/executorSlice';

const rootReducer = combineReducers({
  executorSlice,
});

export default rootReducer;
