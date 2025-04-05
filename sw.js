self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('treino-jj').then(function (cache) {
      return cache.addAll([
        './',
        'index.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request).then(function (response) {
        return response || caches.match('index.html');
      });
    })
  );
});