
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('treino-jj').then(function(cache) {
      return cache.addAll([
        'Treino_Semanal_JiuJitsu_Mobile.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
