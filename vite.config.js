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
      
      registerType: 'autoUpdate',
      manifest: {
        name: 'Automate',
        short_name: 'Automate',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 20,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
          },
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'docs', // Output directory for the built files
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