/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_CODE = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

const editingTaskSlice = createSlice({
  name: 'editingTaskSlice',
  initialState: {
    userName: undefined,
    targetCode: INITIAL_CODE,
    currentTaskIndex: 0,
  },
  reducers: {
    setUserName(state, { payload }) {
      state.userName = payload;
    },
    setTargetCode(state, { payload }) {
      const { targetCode, taskIndex } = payload;
      state.targetCode = targetCode;
      state.currentTaskIndex = taskIndex;
    },
  },
});

export const { setUserName, setTargetCode, setTaskIndex } = editingTaskSlice.actions;

export default editingTaskSlice.reducer;
