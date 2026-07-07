import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // No React plugin — pro.html is a standalone static frontend
  plugins: [],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },
  // Make pro.html the entry point
  build: {
    rollupOptions: {
      input: 'pro.html'
    }
  }
});
