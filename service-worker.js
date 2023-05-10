const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'pwa-192x192.png',
  'pwa-512x512.png',
  'site.webmanifest',
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