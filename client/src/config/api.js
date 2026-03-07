const API_BASE_URL = (process.env.REACT_APP_API_URL || '').trim();
export const API_ENABLED = API_BASE_URL.length > 0;

export default API_BASE_URL;
