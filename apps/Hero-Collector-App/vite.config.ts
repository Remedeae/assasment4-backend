import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
const PORT = Number(process.env.PORT) || 5173;

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname),
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",
    port: PORT,
  },
  preview: {
    host: "0.0.0.0",
    port: PORT,
    allowedHosts: [".up.railway.app"],
  },
});
