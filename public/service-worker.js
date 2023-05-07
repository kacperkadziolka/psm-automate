// Install service worker
self.addEventListener('install', (event) => {
    console.log('Service worker installed');
  });
  
  // Activate service worker
  self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
  });
  
  // Fetch from network or cache
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    event.respondWith(fetch(event.request));
  });