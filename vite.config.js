import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { GenerateSW } from 'workbox-webpack-plugin';

export default defineConfig({
  base: '/psm-automate/',
  plugins: [
    vue(),
    VitePWA({
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // Output directory for the built files
    assetsDir: './', // Output directory for assets relative to outDir
    sourcemap: true, // Generate source maps for easier debugging
    rollupOptions: {
      input: 'src/main.js', // Entry point of your app
    },
    // Use Workbox to generate service worker
    // Pass additional options to GenerateSW
    // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config
    plugins: [new GenerateSW()],
  },
  server: {
    host: true,
  },
});