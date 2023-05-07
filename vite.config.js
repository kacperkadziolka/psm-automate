import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';


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
  server: {
    host: true,
    // Serve index.html from the public directory
    // This is the default behavior, but it's good to be explicit
    index: 'index.html',
  },
});