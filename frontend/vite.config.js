import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_NOT_FOUND') {
          // Ignore missing module warnings
          console.warn('Module not found:', warning.message);
        } else {
          warn(warning);
        }
      },
    },
  },
});
