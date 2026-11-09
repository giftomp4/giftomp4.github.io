# GIFtoMP4 — Free Online GIF to MP4 Converter (No Watermark, Zero Upload)

**100% Client-Side GIF to MP4 Converter — Turn Animated GIFs into 90% Smaller H.264 MP4 Videos with Zero Cloud Uploads & No Watermark.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-giftomp4.github.io-166BF3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://giftomp4.github.io/)
[![Astro 5.x Ready](https://img.shields.io/badge/Astro-5.x_Static_Islands-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![FFmpeg.wasm](https://img.shields.io/badge/Engine-FFmpeg.wasm_H.264-0B1528?style=for-the-badge&logo=webassembly&logoColor=ECB051)](https://ffmpegwasm.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-ECB051?style=for-the-badge&labelColor=0B1528)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_Developer-Buy_Me_a_Coffee-ECB051?style=for-the-badge&logo=buymeacoffee&logoColor=0B1528)](https://kisharadilshan.gumroad.com/coffee)

---

## Overview

**GIFtoMP4** ([https://giftomp4.github.io/](https://giftomp4.github.io/)) is a privacy-first, studio-grade web application that converts bulky animated `.GIF` files into ultra-crisp, hardware-accelerated H.264 `.MP4` videos directly inside your browser. By replacing legacy 1987 256-color GIF frame tables with modern inter-frame motion compensation (`-c:v libx264 -pix_fmt yuv420p -movflags +faststart`), GIFtoMP4 shrinks file sizes by up to **93%** while ensuring 100% compatibility across **Instagram Reels, TikTok, Discord, Twitter/X, iOS, Android, and modern web browsers**.

---

## Key Features

- **Zero Cloud Uploads (100% Local RAM):** Powered by client-side WebAssembly (`@ffmpeg/ffmpeg` & `@ffmpeg/util`). Your GIF and MP4 files never leave your device.
- **Universal H.264 `yuv420p` Encoding:** Automatically enforces even-pixel dimensions (`-vf scale=trunc(iw/2)*2:trunc(ih/2)*2`) and web streaming optimization (`-movflags +faststart`) so videos play everywhere without black/green border artifacts.
- **Instagram Reels & TikTok Loop Multiplier (`1x–5x` & Boomerang):** Extends short 1-second GIFs to meet the 3–5+ second minimum duration required by Instagram and TikTok, plus Boomerang reverse-bounce effects.
- **Smart Aspect Ratio & Speed Studio:** One-click presets for `Original`, `9:16 Vertical (Reels/TikTok)`, `1:1 Square`, and `16:9 Widescreen`, paired with `0.5x–2x` playback speed controls.
- **MP4 to GIF Reverse Mode & Multi-Format Utility:** Two-way conversion supporting `GIF to MP4`, `GIF to Video`, `GIF for Instagram / TikTok`, `MP4 to GIF`, `GIF to WebM`, and `GIF to PNG Frames`.
- **8-Language Internationalization (i18n):** Native localized routes for English (`/`), Español (`/es/`), Português (`/pt/`), Deutsch (`/de/`), Français (`/fr/`), 日本語 (`/ja/`), 中文 (`/zh/`), and Русский (`/ru/`).
- **Adaptive Light & Dark Theme:** Engineered with an **Electric Royal Blue & Warm Honey Gold** design system with zero Flash of Unstyled Content (FOUC).
- **Offline-Ready Progressive Web App (PWA):** Installable via **Add to Home Screen** (`manifest.webmanifest` + offline-first `sw.js` Service Worker caching HTML, CSS, JS, and WASM assets).

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Astro (Static Output Mode) | Zero-JS-by-default Islands Architecture optimized for GitHub Pages |
| **Styling** | Tailwind CSS + Custom CSS Variables | Responsive design, Electric Royal Blue & Warm Honey Gold theme tokens |
| **Media Engine** | `@ffmpeg/ffmpeg` & `@ffmpeg/util` | Lazy-loaded client-side WebAssembly H.264 / VP9 / GIF encoding |
| **Offline / PWA** | Service Worker (`public/sw.js`) & Web Manifest | Offline-first asset & WASM caching, standalone mobile/desktop install |
| **SEO & Schema** | Dual Sitemap (`sitemap.xml` + `sitemap-index.xml`) & JSON-LD | `WebApplication`, `HowTo`, `FAQPage`, and `BreadcrumbList` (Zero fake ratings) |
| **Analytics** | Google Tag Manager (`GTM-TJ3WDZP6`) & GA4 (`G-0YXS1M2VX2`) | Telemetry and conversion funnel insights |

---

## Color Palette Specification

| Token Name | Hex Code | Role in UI |
| :--- | :--- | :--- |
| **Warm Honey Gold** | `#ECB051` | Primary Dark-Mode Action, Active Dropzone Border, Badges & Support CTA |
| **Soft Sand Cream** | `#F2E2CA` | Light-Mode Surface Cards, Highlight Pills & Hover Accents |
| **Electric Royal Blue** | `#166BF3` | Primary Light-Mode Action Button, Workspace Borders & Brand Identity |
| **Cool Ice Blue Tint** | `#E1E8F4` | Default Light-Mode Page Canvas Background & Dark-Mode Primary Text |
| **Deep Midnight Slate** | `#0B1528` | Default Dark-Mode Page Canvas Background & Light-Mode Primary Text |
| **Pure Canvas White** | `#FFFFFF` | Light-Mode Interactive Converter Workspace Box Background |

---

## Quick Start & Deployment

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/giftomp4/giftomp4.github.io.git
cd giftomp4.github.io

# 2. Install dependencies
npm install

# 3. Start the local Astro development server
npm run dev

# 4. Build production static site into dist/
npm run build
```

### Automated GitHub Pages Deployment

This repository includes a turnkey GitHub Actions workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):
1. Push your commits to the `main` branch.
2. In your GitHub repository, navigate to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. `withastro/action@v3` (running Node 22) automatically builds all 8 language routes, verifies `public/.nojekyll`, generates both `/sitemap.xml` and `/sitemap-index.xml`, and deploys to `https://giftomp4.github.io/`.

---

## Support the Developer

If **GIFtoMP4** saved you time, bandwidth, or cloud subscription costs, consider supporting ongoing open-source development:

**[☕ Support the Developer on Gumroad](https://kisharadilshan.gumroad.com/coffee)**

---

## License

Released under the [MIT License](./LICENSE). Copyright © 2026 **Kishara Dilshan (GIFtoMP4)**.
