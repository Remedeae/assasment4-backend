const env = import.meta.env;

export const frontendURL =
  env.MODE === "development"
    ? env.VITE_FRONTEND_URL_DEV
    : env.MODE === "production"
      ? env.VITE_FRONTEND_URL_PROD
      : "http://localhost:5173";

export const backendURL =
  env.MODE === "development"
    ? env.VITE_BACKEND_URL_DEV
    : env.MODE === "production"
      ? env.VITE_BACKEND_URL_PROD
      : "http://localhost:3000";
