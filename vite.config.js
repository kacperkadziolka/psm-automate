import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/psm-automate/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs', // Output directory for the built files
    assetsDir: './', // Output directory for assets relative to outDir
    sourcemap: true, // Generate source maps for easier debugging
    rollupOptions: {
      input: 'src/main.js' // Entry point of your app
    }
  },
  server: {
    host: true
  }
})