/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ContentState, EditorState } from 'draft-js';
import { getBaseUrl, getEditabilityEnabled } from '../../environment';
import { saveOptimizedParameters } from '../editor/editorSlice';

export const PARAMETER_SUBSTITUTION_THRESHOLD = 0.011;

let executeController;
let previousExecutionPromise;

let optimizeController;
let previousOptimizationPromise;

export const execute = createAsyncThunk('execute', async (programText) => {
  // Cancel the last execution.
  if (previousExecutionPromise) {
    executeController.abort();
  }
  executeController = new AbortController();

  // Call the executor.
  previousExecutionPromise = fetch(getBaseUrl(), {
    headers: new Headers({
      'content-type': 'application/json',
    }),
    method: 'POST',
    body: JSON.stringify({
      program: programText,
    }),
    signal: executeController.signal,
  });
  const result = await previousExecutionPromise;
  if (result.ok) {
    return result.json();
  }
  throw new Error('Executor failed.');
});

const substitute = (code, parameters) => {
  const optimizedParameters = [];
  const sortedParameters = parameters;
  sortedParameters.sort((lhs, rhs) => lhs[0] - rhs[0]);
  let modifiedCode = code;
  let offset = 0;
  sortedParameters.forEach(([start, end, value]) => {
    const substitution = value.toFixed(2);
    const adjustedStart = start + offset;
    const oldValue = parseFloat(modifiedCode.substring(adjustedStart, end + offset));

    // Only do the substitution if the value is bigger.
    if (Math.abs(oldValue - parseFloat(substitution)) >= PARAMETER_SUBSTITUTION_THRESHOLD) {
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
      const code = editorState.getCurrentContent().getPlainText('\n');
      const { parameters } = await result.json();
      const { modifiedCode, optimizedParameters } = substitute(code, parameters);
      dispatch(saveOptimizedParameters(optimizedParameters));
      setEditorState(EditorState.createWithContent(ContentState.createFromText(modifiedCode)), { optimizedParameters });
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
    cuboidMetadata: undefined,

    executionInProgress: false,
    cuboids: undefined,
    attachmentMetadata: undefined,
    errored: false,
  },
  reducers: {
    onCuboidClicked: (state, { payload }) => {
      // This is disabled if cuboid editability is disabled.
      if (!getEditabilityEnabled()) {
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
        state.cuboidMetadata = undefined;
        return;
      }
      state.transpiled = payload.text;
      state.expressions = payload.expressions;
      state.cuboidMetadata = payload.cuboidMetadata;
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
      const { cuboids, attachmentMetadata } = payload;
      state.cuboids = cuboids;
      state.attachmentMetadata = attachmentMetadata;
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
