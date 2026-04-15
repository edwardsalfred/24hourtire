# Phase 4 — Website Build Brief

## Positioning

**24 Hour Tire Houston is the only tire shop in greater Houston that is truly open,
truly mobile, and truly everywhere — 24 hours, 7 locations, one call.**

Everything else flows from that single sentence.

---

## Design Direction

### Palette
| Role | Hex | Usage |
|---|---|---|
| Fire red | `#E10600` | Primary CTA, urgency, headline accents |
| Asphalt black | `#0B0B0F` | Base background for hero + dark sections |
| Graphite | `#1A1714` | Body text on light, secondary background |
| Concrete | `#EDE8E0` | Warm neutral, light sections |
| Amber hazard | `#FFC300` | Highlights, counters, warning callouts |
| Off-white | `#F6F4F0` | Paper sections |

### Typography
- **Display:** `Anton` (Google Fonts) — condensed, industrial, highway-sign feel.
- **Body:** `Inter` 400 / 500 / 600.
- **Numerics:** tabular figures on counters + phone numbers.

### Photography / Asset Style
- Night shots. Work lights, amber glow, wet asphalt.
- Real Houston landmarks (I-610, downtown skyline, refineries at dusk).
- Techs in red hoodies / branded hi-vis. No stock photos of shiny tires on white.
- **All photography gets a `<!-- 3D SCROLL ASSET HERE -->` placeholder comment** —
  user will generate via Image Generator skill and drop in.

### Motion
- GSAP + ScrollTrigger from CDN.
- Hero: giant tire rotates and parallaxes on scroll, headline letters stagger in.
- Stats counter up on first intersection.
- Location pins drop sequentially on the map.
- Service cards rise on scroll with 60ms stagger.
- Respects `prefers-reduced-motion`.

### Avoid
- Template hero overlays.
- Blue corporate gradients.
- Service-list grids with no hierarchy.
- "Welcome to our website" copy.
- Stock photography.

---

## Site Architecture (single-page site, anchor navigation)

1. **Hero** — Urgent H1, primary CTA (tap-to-call), secondary CTA (locations), live status indicator.
2. **Stats strip** — 24/7 · 7 locations · ~15 min response · 10,000+ tires sold.
3. **Services** — 6-card grid (new tires, used tires, repair, alignment, mobile service, towing).
4. **"Right now" flow** — Two-path CTA block: "Flat tire now?" vs "Run a fleet?"
5. **Locations map** — 7 shop cards with addresses + tap-to-call per shop.
6. **Commercial** — 18-wheeler / fleet callout with dedicated CTA.
7. **Reviews** — Pulled testimonials (placeholder but styled), Google rating.
8. **FAQ** — 6 schema-friendly Q&As.
9. **Footer** — Phone, address, hours, service areas, schema-marked.

## Navigation
- Sticky header, transparent over hero → solid on scroll.
- Logo left, anchor links center (Services, Locations, Fleet, Reviews), persistent red "Call 832-283-7651" button right.
- Mobile: hamburger → full-screen menu with giant tap-to-call.

---

## Content Framework

### Homepage headline — three options

**Option A (urgency):**
> "Flat at 2 a.m.?  We're already rolling."
> Subhead: Houston's only truly 24/7 tire shop. Seven locations, mobile service anywhere inside the Loop.

**Option B (authority):**
> "Houston's tires. Around the clock. Around the city."
> Subhead: New, used, repaired, aligned, or brought to you — any tire, any hour, any neighborhood.

**Option C (benefit):**
> "One call. Back on the road."
> Subhead: 24/7 mobile tire service across greater Houston. Flats, alignments, towing, and 18-wheelers — day or night.

**Recommendation:** Option A. It speaks directly to the customer in the middle of the problem, which is the category-defining moment.

### Primary CTA
- **Label:** "Send help now" (red button, tap-to-call)
- **Secondary:** "Find nearest shop" (outline button, scrolls to locations)

### SEO targets
- "24 hour tire repair Houston"
- "mobile tire change Houston"
- "flat tire help Houston"
- "tire shop open now [neighborhood]"
- "18 wheeler tire repair Houston"

---

## Conversion Playbook

| Layer | Element |
|---|---|
| Primary goal | Tap-to-call (phone is the conversion) |
| Secondary goal | Location click-through |
| Tertiary goal | Fleet form submission |
| Above fold | Persistent call button + live status ("Open now · ~12 min avg response") |
| Social proof | Google rating + 3 rotating reviews + 7-location trust strip |
| Urgency | Animated counter for "calls answered in the last hour" |
| Trust | Years in business, review count, all 7 addresses visible |

---

## Tech & Performance

- HTML + CSS + vanilla JS, no framework.
- GSAP 3.12 + ScrollTrigger from jsDelivr CDN.
- System fonts fallback while Anton/Inter load.
- Lazy-load every image.
- Embed local-business schema.org JSON-LD.
- `prefers-reduced-motion` disables scroll animations, keeps reveals.
- Lighthouse 90+ on Performance, Accessibility, SEO.

---

## Checkpoint

**Ready to build?** The next step is writing the actual site. Hit approve and I ship.
