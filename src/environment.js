export const getBaseUrl = () => {
  if (process.env.SERVER_BASE_URL) {
    return process.env.SERVER_BASE_URL;
  }
  return 'http://localhost:5000';
};

export const getEditabilityEnabled = () => {
  if (process.env.EDITABILITY_ENABLED !== undefined) {
    return process.env.EDITABILITY_ENABLED;
  }
  return true;
};
