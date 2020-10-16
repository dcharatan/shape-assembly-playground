export const getBaseUrl = () => process.env.SERVER_BASE_URL ?? 'http://localhost:5000';

export const getEditabilityEnabled = () => process.env.EDITABILITY_ENABLED ?? true;
