# 24 Hour Tire Houston

A premium, scroll-animated marketing site for **24 Hour Tire Houston** — Houston's only
truly 24/7 tire + roadside + mobile service shop. Built from a full competitive analysis
of the local niche (see `competitive-analysis.html`).

## What's in here

```
.
├── research/
│   ├── 01-client-brand.md        # Brand extraction from 24tirehouston.com
│   ├── 02-competitor-analysis.md # Top 5 competitor teardown
│   ├── 03-build-brief.md         # Design & content direction
│   └── 04-quality-audit.md       # Phase 6 QA checklist
├── competitive-analysis.html     # PDF-ready client deliverable (open in browser → Print → Save as PDF)
└── site/
    ├── index.html
    ├── css/style.css
    ├── js/main.js                # GSAP ScrollTrigger animations
    └── assets/favicon.svg
```

## Running locally

No build step. Just serve the `site/` folder:

```bash
# Python
cd site && python -m http.server 8080

# Or Node
npx serve site

# Or VS Code Live Server — right-click site/index.html → "Open with Live Server"
```

Then open http://localhost:8080.

## Deploying

### Vercel (recommended)
```bash
npm i -g vercel
cd site
vercel
```
Follow the prompts. Vercel auto-detects static HTML — no config needed.

### Netlify
Drag the `site/` folder onto https://app.netlify.com/drop.

### GoDaddy (current host replacement)
Upload the contents of `site/` via their file manager or FTP into `public_html`.

## Tech

- Vanilla HTML + CSS + JS, no framework.
- **GSAP 3.12** + **ScrollTrigger** from jsDelivr CDN for scroll animations.
- Google Fonts: Anton (display) + Inter (body).
- `prefers-reduced-motion` fully respected.
- `AutoRepair` schema.org JSON-LD for local SEO.

## Placeholders to replace

Search the project for `3D SCROLL ASSET HERE` — these are intentional hooks for the user
to drop in rendered 3D / photographic assets generated with the Image Generator skill:

1. **Hero background** — night-shot Houston highway or tire-shop exterior video (1920×1080, 20s loop).
2. **Hero tire** — rendered 3D tire PNG sequence (2000×2000, ~120 frames) to replace the SVG placeholder.
3. **Fleet visual** — 1200×1400 rendered 18-wheeler truck in red/black.
4. **Open Graph image** — `site/assets/og.jpg` (1200×630).

All placeholders currently use styled SVG so the site looks complete out of the box —
replace at your pace.

## Phone numbers & data

Phone numbers, addresses, hours, and service area are pulled from the live client site.
Update them in `site/index.html` if anything changes — they appear in the header, hero,
locations grid, fleet, final CTA, footer, sticky mobile button, and the schema.org block.

## Notes for the client

- The current GoDaddy site can be pointed at this build with a single DNS change.
- The 832-283-7651 consumer line and 832-757-5357 fleet line are split across CTAs
  throughout the page — consumer on main, fleet on the fleet section and "Start a fleet
  account" button.
- Reviews are styled placeholders. Swap with real Google review quotes + names when ready.
