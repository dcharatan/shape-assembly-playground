/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBaseUrl, getExecutionBaseUrl, getEditabilityEnabled, getOptimizerDisabled } from '../../environment';
import { editorStateFromText, editorStateToText } from '../editor/draftUtilities';
import { saveOptimizedParameters } from '../editor/editorSlice';

export const PARAMETER_SUBSTITUTION_THRESHOLD = 0.011;
const MAXIMUM_EXECUTIONS_PER_SECOND = 5;

let mostRecentExecutionRequestTimestamp = 0;
let mostRecentExecutionCompletionTimestamp = 0;
let delayedExecution;
let optimizeController;
let previousOptimizationPromise;

export const fetchExecute = (program) =>
  fetch(getExecutionBaseUrl(), {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      program,
    }),
  });

export const execute = createAsyncThunk('execute', async (programText, { dispatch }) => {
  // Record the execution request time.
  const timestamp = new Date().getTime();

  // If the last execution request happened too recently, schedule an execution instead of running it immediately.
  // Scheduled executions are immediately stopped by the next execution.
  // They ensure that the most recent code is executed even if it occurs immediately after a different code snapshot.
  const minimumMilliseconds = 1000 / MAXIMUM_EXECUTIONS_PER_SECOND;
  if (delayedExecution) {
    clearTimeout(delayedExecution);
  }
  if (timestamp < mostRecentExecutionRequestTimestamp + minimumMilliseconds) {
    delayedExecution = setTimeout(() => dispatch(execute(programText)), minimumMilliseconds);
    return { timestamp: 0 };
  }
  mostRecentExecutionRequestTimestamp = timestamp;

  // Call the executor.
  const result = await fetchExecute(programText);
  if (result.ok) {
    return { json: await result.json(), timestamp };
  }
  throw new Error('Executor failed.');
});

// parameters is a list of [start, end, new value]
export const substitute = (code, parameters, ignoreThreshold, numDecimals = 2) => {
  const optimizedParameters = [];
  const sortedParameters = parameters;
  sortedParameters.sort((lhs, rhs) => lhs[0] - rhs[0]);
  let modifiedCode = code;
  let offset = 0;
  sortedParameters.forEach(([start, end, value]) => {
    const substitution = value.toFixed(numDecimals);
    const adjustedStart = start + offset;
    const oldValueString = modifiedCode.substring(adjustedStart, end + offset);
    const oldValue = parseFloat(oldValueString);

    // Only do the substitution if the value is bigger.
    if (Math.abs(oldValue - parseFloat(substitution)) >= PARAMETER_SUBSTITUTION_THRESHOLD || ignoreThreshold) {
      // Save information for decorators.
      optimizedParameters.push({
        start: adjustedStart,
        end: adjustedStart + substitution.length,
        oldValue,
        newValue: value,
      });

      // Do the substitution.
      modifiedCode = modifiedCode.slice(0, adjustedStart) + substitution + modifiedCode.slice(end + offset);
      offset += substitution.length - (end - start);
    }
  });
  return { modifiedCode, optimizedParameters };
};

export const substituteAbstractionValues = (code, abstraction, parameterValues) => {
  const startIndices = [...code.matchAll(new RegExp(abstraction, 'gi'))].map((x) => x.index);
  const parameters = [];
  startIndices.forEach((startIndex) => {
    // Create an array with the parameter indices.
    const start = code.indexOf('(', startIndex);
    const end = code.indexOf(')', startIndex);
    const codeIndices = [start];
    for (let i = start; i < end; i += 1) {
      if (code[i] === ',') {
        codeIndices.push(i);
      }
    }
    codeIndices.push(end);

    // Add the substitutions to parameters.
    Object.entries(parameterValues).forEach(([parameterIndex, value]) => {
      const parameterStart = codeIndices[parameterIndex] + 1;
      const parameterEnd = codeIndices[parseInt(parameterIndex, 10) + 1];
      parameters.push([parameterStart, parameterEnd, value]);
    });
  });
  const { modifiedCode } = substitute(code, parameters, true, 2);
  return modifiedCode;
};

const colMajorToRowMajor = (colMajor) => {
  const rowMajor = [];
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const colMajorIndex = col * 4 + row;
      rowMajor.push(colMajor[colMajorIndex]);
    }
  }
  return rowMajor;
};

export const optimize = createAsyncThunk(
  'optimize',
  async (
    { modifiedCuboidIndex, modifiedCuboidMatrix, editorState, setEditorState, editingCuboidMode },
    { getState, dispatch }
  ) => {
    if (previousOptimizationPromise) {
      optimizeController.abort();
    }
    const rowMajor = colMajorToRowMajor(modifiedCuboidMatrix);
    optimizeController = new AbortController();
    const { expressions, transpiled } = getState().executorSlice;
    previousOptimizationPromise = fetch(`${getBaseUrl()}/optimize`, {
      headers: new Headers({
        'content-type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({
        modifiedCuboidIndex,
        modifiedCuboidMatrix: rowMajor,
        program: transpiled,
        expressions,
        editingCuboidMode,
      }),
      signal: optimizeController.signal,
    });
    const result = await previousOptimizationPromise;

    if (result.ok) {
      const code = editorStateToText(editorState);
      const { parameters } = await result.json();
      const { modifiedCode, optimizedParameters } = substitute(code, parameters);
      dispatch(saveOptimizedParameters(optimizedParameters));
      setEditorState(editorStateFromText(modifiedCode), { optimizedParameters });
    }
    throw new Error('Optimizer failed.');
  }
);

const executorSlice = createSlice({
  name: 'executorSlice',
  initialState: {
    // State for 3D editing.
    editingCuboidIndex: undefined,
    editingCuboidMode: 'scale',
    optimizationInProgress: false,
    modifiedCuboidMatrix: undefined,
    modifiedCuboidIndex: undefined,

    // This is where the expressions for each transpiled line's arguments are stored.
    // This allows the optimizer to keep the constraints imposed by Python-like ShapeAssembly's expressions.
    expressions: undefined,
    transpiled: undefined,

    executionInProgress: false,
    cuboids: undefined,
    errored: false,
  },
  reducers: {
    onCuboidClicked: (state, { payload }) => {
      // This is disabled if cuboid editability is disabled.
      if (!getEditabilityEnabled() || getOptimizerDisabled()) {
        return;
      }

      // If the cuboid is already selected, rotate the editing mode.
      if (state.editingCuboidIndex === payload) {
        const modes = ['translate', 'scale', 'rotate'];
        state.editingCuboidMode = modes[(modes.indexOf(state.editingCuboidMode) + 1) % modes.length];
      }

      // Make sure the cuboid gets selected.
      state.editingCuboidIndex = payload;
    },

    // Add a set of transpilation results.
    updateWithTranspilation: (state, { payload }) => {
      // Reset transpilation-related state if transpilation fails.
      if (!payload) {
        state.transpiled = undefined;
        state.expressions = undefined;
        return;
      }
      state.transpiled = payload.text;
      state.expressions = payload.expressions;
    },

    // Used to keep the cuboid from changing during optimization.
    setModifiedCuboidParameters: (state, { payload }) => {
      const { modifiedCuboidIndex, modifiedCuboidMatrix } = payload;
      state.modifiedCuboidMatrix = modifiedCuboidMatrix;
      state.modifiedCuboidIndex = modifiedCuboidIndex;
    },

    // Used to select between 'translate', 'rotate' and 'scale'.
    setEditingCuboidMode: (state, { payload }) => {
      state.editingCuboidMode = payload;
    },

    // De-select editing so that typing into the editor doesn't visibly change the rotation/scale/translation for 3D editing.
    endCuboidEditing: (state) => {
      state.editingCuboidIndex = undefined;
    },
  },
  extraReducers: {
    [execute.pending]: (state) => {
      state.executionInProgress = true;
      state.errored = false;
      state.editingCuboidIndex = undefined;
    },
    [execute.fulfilled]: (state, { payload }) => {
      const { timestamp } = payload;

      // Discard the results if they're outdated.
      if (timestamp < mostRecentExecutionCompletionTimestamp || !payload.json) {
        return;
      }
      mostRecentExecutionCompletionTimestamp = timestamp;

      const { cuboids } = payload.json;
      state.cuboids = cuboids;
      state.executionInProgress = false;
      state.errored = false;
      state.editingCuboidIndex = undefined;
      state.modifiedCuboidMatrix = undefined;
      state.modifiedCuboidIndex = undefined;
    },
    [execute.rejected]: (state) => {
      state.executionInProgress = false;
      state.errored = true;
      state.editingCuboidIndex = undefined;
    },
    [optimize.pending]: (state) => {
      state.optimizationInProgress = true;
      state.editingCuboidIndex = undefined;
    },
    [optimize.fulfilled]: (state) => {
      state.optimizationInProgress = false;
      state.modifiedCuboidIndex = undefined;
      state.modifiedCuboidMatrix = undefined;
    },
    [optimize.rejected]: (state) => {
      state.optimizationInProgress = false;
      state.modifiedCuboidIndex = undefined;
      state.modifiedCuboidMatrix = undefined;
    },
  },
});

export const {
  onCuboidClicked,
  updateWithTranspilation,
  setModifiedCuboidParameters,
  setEditingCuboidMode,
  endCuboidEditing,
} = executorSlice.actions;

export default executorSlice.reducer;
