/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLastTranspiled } from '../editor/editorSlice';

let executeController;
let previousExecutionPromise;

let optimizeController;
let previousOptimizationPromise;

export const execute = createAsyncThunk('execute', async (programText, { dispatch }) => {
  if (previousExecutionPromise) {
    executeController.abort();
  }
  executeController = new AbortController();
  previousExecutionPromise = fetch('http://localhost:5000', {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      program: programText,
    }),
    signal: executeController.signal,
  });
  dispatch(setLastTranspiled(programText));
  const result = await previousExecutionPromise;

  if (result.ok) {
    return result.json();
  }
  throw new Error('Executor failed.');
});

export const optimize = createAsyncThunk(
  'optimize',
  async ({ modifiedCuboidIndex, modifiedCuboidMatrix }, { getState }) => {
    if (previousOptimizationPromise) {
      optimizeController.abort();
    }
    optimizeController = new AbortController();
    const programText = getState().editorSlice.lastTranspiled;
    previousOptimizationPromise = fetch('http://localhost:5000/optimize', {
      headers: new Headers({
        'content-type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({
        modifiedCuboidIndex,
        modifiedCuboidMatrix,
        program: programText,
      }),
      signal: optimizeController.signal,
    });
    const result = await previousOptimizationPromise;

    if (result.ok) {
      return result.json();
    }
    throw new Error('Optimizer failed.');
  }
);

const executorSlice = createSlice({
  name: 'executorSlice',
  initialState: {
    // State for 3D editing.
    editingCuboidIndex: undefined,
    editingCuboidMode: 'translate',

    executionInProgress: false,
    cuboids: undefined,
    attachmentMetadata: undefined,
    errored: false,
  },
  reducers: {
    onCuboidClicked: (state, { payload }) => {
      // If the cuboid is already selected, rotate the editing mode.
      if (state.editingCuboidIndex === payload) {
        const modes = ['translate', 'scale', 'rotate'];
        state.editingCuboidMode = modes[(modes.indexOf(state.editingCuboidMode) + 1) % modes.length];
      }

      // Make sure the cuboid gets selected.
      state.editingCuboidIndex = payload;
    },
  },
  extraReducers: {
    [execute.pending]: (state) => {
      state.executionInProgress = true;
      state.errored = false;
      state.editingCuboidIndex = undefined;
    },
    [execute.fulfilled]: (state, { payload }) => {
      const { cuboids, attachmentMetadata } = payload;
      state.cuboids = cuboids;
      state.attachmentMetadata = attachmentMetadata;
      state.executionInProgress = false;
      state.errored = false;
      state.editingCuboidIndex = undefined;
    },
    [execute.rejected]: (state) => {
      state.executionInProgress = false;
      state.errored = true;
      state.editingCuboidIndex = undefined;
    },
  },
});

export const { onCuboidClicked } = executorSlice.actions;

export default executorSlice.reducer;
