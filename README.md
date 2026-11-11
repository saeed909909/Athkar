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
| `data/mushaf-juz30.js` | Juz Amma page layout: Madinah mushaf pages 582–604, 15 lines each |
| `fonts/qpc2/` | King Fahd Complex QPC V2 page fonts for those pages, plus the basmala font |
| `fonts/surahs.ttf` | Surah-name calligraphy font |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline support and home-screen icon |

## Juz Amma

Juz Amma is shown exactly as the printed Madinah mushaf (Hafs): same pages, same 15 lines per page, same line breaks. Swipe to turn pages; tap an ayah to bookmark it.

- Glyph fonts: QPC V2, © King Fahd Glorious Quran Printing Complex (all rights reserved; free for non-commercial use), as used by quran.com.
- Page and line layout: quran.com data, via [zonetecde/mushaf-layout](https://github.com/zonetecde/mushaf-layout) (ISC).
- Surah-name font: "Surah Name V4" by Ahmed Alaa Elgharib.
