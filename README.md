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
| `data/juz-amma.js` | Surahs 78–114 |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline support and home-screen icon |

## Quran text

Quran text: **Tanzil Quran Text (Uthmani)**, Copyright (C) 2007-2021 [Tanzil Project](https://tanzil.net), licensed under Creative Commons Attribution 3.0. The text is included verbatim. The basmala at the start of each surah is shown as a separate heading above the first ayah.
