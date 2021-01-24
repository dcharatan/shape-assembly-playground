/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    hoveredCuboids: {},
    hoveredTranspiledLines: {},
    selectedTranspiledLines: {},

    // Whenever an optimization happens, the changed parameters are stored here. This is used for decorators.
    // This is a list of the following: { start, end, oldValue, newValue }
    // start and end are  character indices for the highlight; old and new are the old/new parameter values
    optimizedParameters: undefined,

    // When this is disabled, the user has to manually trigger a re-render.
    liveUpdatesEnabled: true,
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
    setCuboidsHovered(state, { payload }) {
      state.hoveredCuboids = { ...state.hoveredCuboids, ...payload };
    },
    setCuboidsNotHovered(state, { payload }) {
      Object.keys(payload).forEach((line) => {
        delete state.hoveredCuboids[line];
      });
    },
    setTranspiledLinesHovered(state, { payload }) {
      state.hoveredTranspiledLines = { ...state.hoveredTranspiledLines, ...payload };
    },
    setTranspiledLinesNotHovered(state, { payload }) {
      payload.forEach((line) => {
        delete state.hoveredTranspiledLines[line];
      });
    },

    // These functions control permanent highlights.
    setTranspiledLinesSelected(state, { payload }) {
      state.selectedTranspiledLines = { ...state.selectedTranspiledLines, ...payload };
    },
    setTranspiledLinesNotSelected(state, { payload }) {
      Object.keys(payload).forEach((line) => {
        delete state.selectedTranspiledLines[line];
      });
    },
    deselectAllLines(state) {
      state.selectedTranspiledLines = {};
    },

    // This should be called after each optimization so that the post-optimization decorators for diffs can be shown.
    saveOptimizedParameters: (state, { payload }) => {
      state.optimizedParameters = payload;
    },

    // This is used when the optimizer's parameter changes should no longer be shown.
    resetOptimizedParameters: (state) => {
      state.optimizedParameters = undefined;
    },

    setLiveUpdatesEnabled: (state, { payload }) => {
      state.liveUpdatesEnabled = payload;
    },
  },
});

export const {
  setTab,
  setCuboidsHovered,
  setCuboidsNotHovered,
  setTranspiledLinesHovered,
  setTranspiledLinesNotHovered,
  saveOptimizedParameters,
  resetOptimizedParameters,
  setLiveUpdatesEnabled,
  setTranspiledLinesSelected,
  setTranspiledLinesNotSelected,
  deselectAllLines,
} = editorSlice.actions;

export default editorSlice.reducer;
