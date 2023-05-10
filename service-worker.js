const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/psm-automate/',
  '/psm-automate/index.html',
  '/psm-automate/favicon-16x16.png',
  '/psm-automate/favicon-32x32.png',
  '/psm-automate/android-chrome-192x192.png',
  '/psm-automate/android-chrome-512x512.png',
  '/psm-automate/pwa-192x192.png',
  '/psm-automate/pwa-512x512.png',
  '/psm-automate/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
          .catch((error) => {
            console.error('Failed to cache file:', error);
          });
      })
      .catch((error) => {
        console.error('Failed to open cache:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.error('Failed to fetch resource:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['my-pwa-cache-v1'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .catch((error) => {
      console.error('Failed to get cache keys:', error);
    })
  );
});