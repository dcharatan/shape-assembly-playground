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
    const json = await result.json();
    return json.obj;
  }
  throw new Error('Executor failed.');
});

const executorSlice = createSlice({
  name: 'executorSlice',
  initialState: {
    fetchingObj: false,
    obj: undefined,
    errored: false,
  },
  extraReducers: {
    [execute.pending]: (state) => {
      state.fetchingObj = true;
      state.errored = false;
    },
    [execute.fulfilled]: (state, { payload }) => {
      state.obj = payload;
      state.fetchingObj = false;
      state.errored = false;
    },
    [execute.rejected]: (state) => {
      state.fetchingObj = false;
      state.errored = true;
    },
  },
});

export default executorSlice.reducer;
