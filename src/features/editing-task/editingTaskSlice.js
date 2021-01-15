/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_CODE = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

const editingTaskSlice = createSlice({
  name: 'editingTaskSlice',
  initialState: {
    username: undefined,
    targetCode: INITIAL_CODE,
    currentTaskIndex: 0,
    wireframeEnabled: false,
  },
  reducers: {
    toggleWireframe(state) {
      state.wireframeEnabled = !state.wireframeEnabled;
    },
    setUsername(state, { payload }) {
      state.username = payload ? `${payload}_${Date.now()}` : undefined;
    },
    setTargetCode(state, { payload }) {
      const { targetCode, taskIndex } = payload;
      state.targetCode = targetCode;
      state.currentTaskIndex = taskIndex;
    },
  },
});

export const { setUsername, setTargetCode, toggleWireframe } = editingTaskSlice.actions;

export default editingTaskSlice.reducer;
