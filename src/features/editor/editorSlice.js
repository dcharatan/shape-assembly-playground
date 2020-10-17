/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    hoveredCuboids: {},
    hoveredTranspiledLines: {},

    // Whenever an optimization happens, the changed parameters are stored here. This is used for decorators.
    // This is a list of the following: { start, end, oldValue, newValue }
    // start and end are character indices for the highlight; old and new are the old/new parameter values
    optimizedParameters: undefined,
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

    // This should be called after each optimization so that the post-optimization decorators for diffs can be shown.
    saveOptimizedParameters: (state, { payload }) => {
      state.optimizedParameters = payload;
    },

    // This is used when the optimizer's parameter changes should no longer be shown.
    resetOptimizedParameters: (state) => {
      state.optimizedParameters = undefined;
    },
  },
});

export const {
  setTab,
  setCuboidHovered,
  setCuboidNotHovered,
  setTranspiledLineHovered,
  setTranspiledLineNotHovered,
  saveOptimizedParameters,
  resetOptimizedParameters,
} = editorSlice.actions;

export default editorSlice.reducer;
