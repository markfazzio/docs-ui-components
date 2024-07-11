// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  rollupOptions: {
    external: ['react', 'react-dom', 'tailwindcss'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        tailwindcss: 'tailwindcss',
      },
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
