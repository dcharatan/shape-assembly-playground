/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    hoveredCuboids: {},
    hoveredTranspiledLines: {},
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
    setCuboidHovered(state, { payload }) {
      state.hoveredCuboids[payload] = true;
    },
    setCuboidNotHovered(state, { payload }) {
      delete state.hoveredCuboids[payload];
    },
    setTranspiledLineHovered(state, { payload }) {
      state.hoveredTranspiledLines[payload] = true;
    },
    setTranspiledLineNotHovered(state, { payload }) {
      delete state.hoveredTranspiledLines[payload];
    },
  },
});

export const {
  setTab,
  setCuboidHovered,
  setCuboidNotHovered,
  setTranspiledLineHovered,
  setTranspiledLineNotHovered,
} = editorSlice.actions;

export default editorSlice.reducer;
