/* Offline support.
   App code (html/js): always asks GitHub for the newest copy when online, falls back to the saved copy offline.
   Mushaf pages, icons and fonts: kept in a separate store that survives app updates, served from the device. */
const VERSION = "8";
const CACHE = "athkar-v" + VERSION;   // app code, replaced on each version
const KEEP = "athkar-keep";           // mushaf pages, icons, fonts: kept across versions
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./data/athkar-default.js", "./data/mushaf-meta.js"
];
const KEEP_FILES = [
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/favicon.png",
  ...Array.from({ length: 23 }, (_, i) => `./mushaf/paper/${582 + i}.webp`)
];

self.addEventListener("install", e => {
  e.waitUntil(Promise.all([
    caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})))),
    caches.open(KEEP).then(c => Promise.all(KEEP_FILES.map(u => c.match(u).then(hit => hit || c.add(u)).catch(() => {}))))
  ]).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== KEEP).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isStatic = url => /\.(webp|png|jpg|woff2?|ttf)$/i.test(url.pathname);
const keep = (req, res) => { if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(KEEP).then(c => c.put(req, copy)); } return res; };

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: from the device first
  if (url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => keep(req, res))));
    return;
  }
  if (url.origin !== self.location.origin) return;

  // Mushaf pages and icons: from the device first
  if (isStatic(url)) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => keep(req, res))));
    return;
  }

  // App code: network first, skipping the browser's HTTP cache
  e.respondWith(
    fetch(req, { cache: "no-cache" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
