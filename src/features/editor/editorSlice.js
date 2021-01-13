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
    // start and end are  character indices for the highlight; old and new are the old/new parameter values
    optimizedParameters: undefined,

    // When this is disabled, the user has to manually trigger a re-render.
    liveUpdatesEnabled: true,
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
    setCuboidHovered(state, { payload }) {
      state.hoveredCuboids[payload] = 'direct';
    },
    setCuboidNotHovered(state, { payload }) {
      delete state.hoveredCuboids[payload];
    },
    setTranspiledLinesHovered(state, { payload }) {
      state.hoveredTranspiledLines = { ...state.hoveredTranspiledLines, ...payload };
    },
    setTranspiledLinesNotHovered(state, { payload }) {
      payload.forEach((line) => {
        delete state.hoveredTranspiledLines[line];
      });
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
  setCuboidHovered,
  setCuboidNotHovered,
  setTranspiledLinesHovered,
  setTranspiledLinesNotHovered,
  saveOptimizedParameters,
  resetOptimizedParameters,
  setLiveUpdatesEnabled,
} = editorSlice.actions;

export default editorSlice.reducer;
