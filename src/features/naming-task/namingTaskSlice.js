/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBaseUrl } from '../../environment';

// Import all tasks in the data folder.
const context = require.context('./data', true, /.json$/);
export const tasks = [];
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`./data/${fileName}`);
  tasks.push(JSON.parse(JSON.stringify(resource)));
});
const { prefix: firstPrefix, programs: firstPrograms, abstraction: firstAbstraction } = tasks[0];

export const saveTaskLog = createAsyncThunk('saveTaskLog', async (_, { getState }) => {
  const { names, username, taskIndex, actionLog } = getState().namingTaskSlice;
  fetch(`${getBaseUrl()}/save-naming-task`, {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      names,
      username,
      taskIndex,
      actionLog,
    }),
  });
});

const recursiveUpdate = (initial, update) => {
  [...Object.keys(initial), ...Object.keys(update)].forEach((key) => {
    if (initial[key] !== undefined && update[key] !== undefined) {
      if (typeof initial[key] === 'object' && typeof update[key] === 'object') {
        recursiveUpdate(initial[key], update[key]);
      } else {
        initial[key] = update[key];
      }
    } else if (update[key] !== undefined) {
      initial[key] = update[key];
    }
  });
  return initial;
};

const namingTaskSlice = createSlice({
  name: 'namingTaskSlice',
  initialState: {
    // The list of programs that are being named, along with a common prefix.
    prefix: firstPrefix,
    programs: firstPrograms,

    // The abstraction that's being named, along with the assigned names.
    abstraction: firstAbstraction,
    names: {},

    // Current parameter values, where the mapping is name --> value.
    parameterValues: {},
    cachedValuesFetched: false,

    taskIndex: 0,

    // -1 is the function name. Nonnegative values are parameters (by float parameter index).
    activeItem: -1,

    // The user's name (this is associated with the data).
    username: undefined,
    actionLog: [],

    // The parameter bounds.
    parameterBounds: {},
  },
  reducers: {
    setParameterBounds(state, { payload }) {
      state.parameterBounds = recursiveUpdate(state.parameterBounds, payload);
    },
    setParameterValue(state, { payload }) {
      const { name, newValue } = payload;
      state.parameterValues = { [name]: newValue };
    },
    markCachedValuesFetched(state) {
      state.cachedValuesFetched = true;
    },
    setParameterNames(state, { payload }) {
      state.names = payload;
    },
    setActiveItem(state, { payload }) {
      state.parameterValues = {};
      state.activeItem = payload;
    },
    startNextTask(state) {
      state.taskIndex = (state.taskIndex + 1) % tasks.length;
      const { prefix, programs, abstraction } = tasks[state.taskIndex];
      state.prefix = prefix;
      state.programs = programs;
      state.abstraction = abstraction;
      state.names = {};
      state.parameterValues = {};
      state.cachedValuesFetched = false;
      state.activeItem = -1;
      if (state.taskIndex === 0) {
        state.username = undefined;
      }
      state.actionLog = [];
    },
    startFirstTask(state, { payload }) {
      state.username = `${payload}_${new Date().getTime()}`;
    },
    recordAction(state, { payload }) {
      const { type, information } = payload;
      state.actionLog.push({
        timestamp: new Date().getTime(),
        type,
        information,
      });
    },
  },
});

export const {
  setParameterValue,
  markCachedValuesFetched,
  startNextTask,
  setParameterNames,
  setActiveItem,
  startFirstTask,
  recordAction,
  setParameterBounds,
} = namingTaskSlice.actions;

export default namingTaskSlice.reducer;
