/* SIRIO — service worker per l'uso offline e a basso consumo dati.
   Strategia: network-first per l'HTML (aggiornamenti subito), cache-first
   per asset immutabili (js/css/font/immagini). Nessun dato personale passa
   di qui: i progressi vivono in localStorage/IndexedDB. */
const CACHE = "sirio-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // font Google ecc.: lascia al browser

  const isHTML = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname === "/";
  if (isHTML) {
    // network-first: sempre fresco quando c'è rete, cache quando manca
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((m) => m || caches.match("/index.html")))
    );
  } else {
    // cache-first per gli asset con hash nel nome
    e.respondWith(
      caches.match(req).then((m) => m || fetch(req).then((res) => {
        const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res;
      }))
    );
  }
});
