// eslint-disable-next-line import/no-commonjs
require('dotenv').config();

export const getBaseUrl = () => process.env.REACT_APP_BASE_URL ?? 'http://localhost:5000';

export const getEditabilityEnabled = () =>
  process.env.REACT_APP_EDITABILITY_ENABLED ? process.env.REACT_APP_EDITABILITY_ENABLED === 'true' : true;
