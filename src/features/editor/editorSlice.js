/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState: {
    tab: 'code',
    selectedLine: undefined,
  },
  reducers: {
    setTab(state, { payload }) {
      state.tab = payload;
    },
    setSelectedLine(state, { payload }) {
      state.selectedLine = payload;
    },
  },
});

export const { setTab, setSelectedLine } = editorSlice.actions;

export default editorSlice.reducer;
