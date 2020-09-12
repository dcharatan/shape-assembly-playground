/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    selectedTranspiledLines: {},
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
    selectTranspiledLine(state, { payload }) {
      state.selectedTranspiledLines[payload] = true;
    },
    deselectTranspiledLine(state, { payload }) {
      delete state.selectedTranspiledLines[payload];
    },
  },
});

export const { setTab, selectTranspiledLine, deselectTranspiledLine } = editorSlice.actions;

export default editorSlice.reducer;
