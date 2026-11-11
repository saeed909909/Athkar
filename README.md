# أذكاري

A personal athkar counter: أذكار الاستيقاظ، الصباح، المساء، النوم, each card with a tap counter that resets every day, plus a جزء عمّ reader.

- Static site, no server, no build step. Hosted with GitHub Pages.
- Data lives in the browser's local storage on each device. Use **الإعدادات → حفظ نسخة احتياطية** to export JSON, and **استعادة من ملف JSON** to import it on another device.
- The starting list on a new device is `data/athkar-default.js` (from `athkar-backup-2026-11-11.json`). To change the starting list, replace that file's contents with a newer backup.
- Works offline after the first visit and can be added to the home screen.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `data/athkar-default.js` | Default athkar list (your backup) |
| `data/mushaf-meta.js` | Surah list and page index for Juz Amma |
| `mushaf/paper/*.webp`, `mushaf/dark/*.webp` | Madinah mushaf pages 582–604 as images (cream and dark) |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline support and home-screen icon |

## Juz Amma

Juz Amma is shown as the printed Madinah mushaf (Hafs): same pages, same 15 lines per page, same line breaks. The pages are pre-rendered images, so they show instantly and work offline. Swipe sideways to turn pages, pull down to go back, tap to show the buttons.

- Rendered with the QPC V2 fonts, © King Fahd Glorious Quran Printing Complex (free for non-commercial use), as used by quran.com.
- Page and line layout: quran.com data, via [zonetecde/mushaf-layout](https://github.com/zonetecde/mushaf-layout) (ISC).
- Surah-name font: "Surah Name V4" by Ahmed Alaa Elgharib.
