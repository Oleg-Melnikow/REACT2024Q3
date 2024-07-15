/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      interface: `${path.resolve(__dirname, "./src/interface/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      api: `${path.resolve(__dirname, "./src/api/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      reducers: `${path.resolve(__dirname, "./src/reducers/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
    },
  },
});
