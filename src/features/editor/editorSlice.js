/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    hoveredCuboids: {},
    hoveredTranspiledLines: {},
    lastTranspiled: undefined,
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
    setLastTranspiled: (state, { payload }) => {
      state.lastTranspiled = payload;
    },
  },
});

export const {
  setTab,
  setCuboidHovered,
  setCuboidNotHovered,
  setTranspiledLineHovered,
  setTranspiledLineNotHovered,
  setLastTranspiled,
} = editorSlice.actions;

export default editorSlice.reducer;
