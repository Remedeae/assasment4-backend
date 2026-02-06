export const frontendURL: string =
  process.env.NODE_ENV === "dev"
    ? String(process.env.FRONTEND_URL_DEV)
    : process.env.NODE_ENV === "production"
      ? String(process.env.FRONTEND_URL_PROD)
      : "http://localhost:5173";

export const backendURL: string =
  process.env.NODE_ENV === "dev"
    ? String(process.env.BACKEND_URL_DEV)
    : process.env.NODE_ENV === "production"
      ? String(process.env.BACKEND_URL_PROD)
      : "http://localhost:3000";
