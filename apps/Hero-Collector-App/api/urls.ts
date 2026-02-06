const env = import.meta.env;
const mode = import.meta.env.MODE;

export const frontendURL =
  mode === "development"
    ? env.VITE_FRONTEND_URL_DEV
    : mode === "production"
      ? env.VITE_FRONTEND_URL_PROD
      : "http://localhost:5173";

export const backendURL =
  mode === "development"
    ? env.VITE_BACKEND_URL_DEV
    : mode === "production"
      ? env.VITE_BACKEND_URL_PROD
      : "http://localhost:3000";
