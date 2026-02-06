export const frontendURL = process.env.MODE === "development"
    ? String(process.env.FRONTEND_URL_DEV)
    : process.env.MODE === "production"
        ? String(process.env.FRONTEND_URL_PROD)
        : "http://localhost:5173";
export const backendURL = process.env.MODE === "development"
    ? String(process.env.BACKEND_URL_DEV)
    : process.env.MODE === "production"
        ? String(process.env.BACKEND_URL_PROD)
        : "http://localhost:3000";
//# sourceMappingURL=urls.js.map