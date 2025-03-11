import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use this if your GitHub repository is named "lukagrunt.com"
  base: '/lukagrunt.com/',  // Make sure the base path is correct for GitHub Pages

  plugins: [react()],
});
