// eslint-disable-next-line import/no-commonjs
require('dotenv').config();

export const getBaseUrl = () => process.env.REACT_APP_BASE_URL ?? 'http://localhost:5000';

export const getExecutionBaseUrl = () => process.env.REACT_APP_EXECUTION_BASE_URL ?? 'http://localhost:5000';

export const getEditabilityEnabled = () =>
  process.env.REACT_APP_EDITABILITY_ENABLED ? process.env.REACT_APP_EDITABILITY_ENABLED === 'true' : true;

export const getShowTutorial = () =>
  process.env.REACT_APP_SHOW_TUTORIAL ? process.env.REACT_APP_SHOW_TUTORIAL === 'true' : true;

export const getOptimizerDisabled = () =>
  process.env.REACT_APP_OPTIMIZER_DISABLED ? process.env.REACT_APP_OPTIMIZER_DISABLED === 'true' : true;
