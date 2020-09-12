/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
  },
});

export const { setTab } = editorSlice.actions;

export default editorSlice.reducer;
