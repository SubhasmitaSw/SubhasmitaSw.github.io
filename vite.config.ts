import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from '@mdx-js/rollup';
import path from "path";

// Assuming componentTagger is a custom plugin, ensure it's properly imported or defined
// For demonstration purposes, let's assume it's defined in a local file named componentTagger.ts
import { componentTagger } from './componentTagger';

const plugins = [
  mdx(),
  react(),
  // Conditionally include componentTagger based on the mode
  process.env.NODE_ENV === 'development' ? componentTagger() : null,
].filter(Boolean);

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './',
});
