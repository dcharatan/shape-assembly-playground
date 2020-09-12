/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let controller;
let previousExecutionPromise;

export const execute = createAsyncThunk('execute', async (programText) => {
  if (previousExecutionPromise) {
    controller.abort();
  }
  controller = new AbortController();
  previousExecutionPromise = fetch('http://localhost:5000', {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      program: programText,
    }),
    signal: controller.signal,
  });
  const result = await previousExecutionPromise;

  if (result.ok) {
    return result.json();
  }
  throw new Error('Executor failed.');
});

const executorSlice = createSlice({
  name: 'executorSlice',
  initialState: {
    executionInProgress: false,
    cuboids: undefined,
    attachmentMetadata: undefined,
    errored: false,
  },
  extraReducers: {
    [execute.pending]: (state) => {
      state.executionInProgress = true;
      state.errored = false;
    },
    [execute.fulfilled]: (state, { payload }) => {
      const { cuboids, attachmentMetadata } = payload;
      state.cuboids = cuboids;
      state.attachmentMetadata = attachmentMetadata;
      state.executionInProgress = false;
      state.errored = false;
    },
    [execute.rejected]: (state) => {
      state.executionInProgress = false;
      state.errored = true;
    },
  },
});

export default executorSlice.reducer;
