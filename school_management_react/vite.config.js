import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Don't forget to install the Node types

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});