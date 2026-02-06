interface ImportMetaEnv {
  readonly VITE_FRONTEND_URL_DEV: string;
  readonly VITE_FRONTEND_URL_PROD: string;
  readonly VITE_BACKEND_URL_DEV: string;
  readonly VITE_BACKEND_URL_PROD: string;
  readonly MODE: "development" | "production" | "test";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
