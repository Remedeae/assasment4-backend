const env = import.meta.env;

export const frontendURL =
  env.VITE_MODE === "development"
    ? env.VITE_FRONTEND_URL_DEV
    : env.VITE_MODE === "production"
      ? env.VITE_FRONTEND_URL_PROD
      : "http://localhost:5173";

export const backendURL =
  /*   env.VITE_MODE === "development"
    ? env.VITE_BACKEND_URL_DEV
    : env.VITE_MODE === "production"
      ? env.VITE_BACKEND_URL_PROD
      : */ "https://backend-production-26ed.up.railway.app";
