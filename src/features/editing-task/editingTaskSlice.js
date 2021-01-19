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
    studyCondition: undefined,
  },
  reducers: {
    toggleWireframe(state) {
      state.wireframeEnabled = !state.wireframeEnabled;
    },
    setUsernameAndStudyCondition(state, { payload }) {
      if (payload === undefined) {
        state.username = undefined;
        state.studyCondition = undefined;
      } else {
        const { username, studyCondition } = payload;
        state.username = `${username}_${Date.now()}`;
        state.studyCondition = studyCondition;
      }
    },
    setTargetCode(state, { payload }) {
      const { targetCode, taskIndex } = payload;
      state.targetCode = targetCode;
      state.currentTaskIndex = taskIndex;
    },
  },
});

export const { setUsernameAndStudyCondition, setTargetCode, toggleWireframe } = editingTaskSlice.actions;

export default editingTaskSlice.reducer;
