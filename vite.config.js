import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
    port: 3000,
  },
  plugins: [react()],
});
