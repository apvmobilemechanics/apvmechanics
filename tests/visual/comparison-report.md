# Automart strict visual comparison

Reference: `https://scriptfusions.mnsithub.com/html/automart/index.html`

Local: `http://127.0.0.1:3000`

## Route and section status

| Route | Section | Viewport | Status | Difference / correction | Evidence |
|---|---|---:|---|---|---|
| `/` | Header and hero | Desktop | Pass | Two-tier header, sticky navigation, hero scale, controls, customer badge and APV branding aligned | `local/header-hero-local-1440x900-final.png` |
| `/` | Comprehensive Car Solutions | Desktop | Pass | Five 100px service rows, exact content grid, icons, pill CTAs, hover previews and staggered reveals added | `local/services-offer-local.png` |
| `/` | Why Choose Us | Desktop | Pass | Navy split layout, mechanic, support card, tools artwork, author detail and red marquee aligned | `local/choose-local.png` |
| `/` | Process and team | Desktop | Pass | Alternating connected process, single-line title, source-sized 350x312 team cards and scroll entrances aligned | `local/process-team-local.png`, `local/team-local.png` |
| `/` | Video gallery | Desktop | Pass | Reference background, composition, play control and reveal animation aligned | `local/video-gallery-local-1440x900-iteration-03.png` |
| `/` | Pre-footer CTA and footer | Desktop | Pass | Reference imagery, CTA proportions, four-column footer and bottom bar restored | `local/footer-cta-local-1440x900-iteration-01.png`, `local/footer-main-local-1440x900-iteration-01.png` |
| All routes | HTTP output | Desktop | Pass | 36/36 application routes returned HTTP 200 | Automated route crawl |
| Shared layout | Responsive regression | 1024px, 768px, 390px | Pass | No horizontal overflow; responsive service, choose, process and navigation layouts verified | `local/mobile-home-390.png` |

## Validation

| Check | Status |
|---|---|
| ESLint | Pass |
| TypeScript | Pass |
| Next.js 16 production build | Pass, 40 static pages generated |
| Browser console | Pass, no errors or warnings on final homepage load |
| Horizontal overflow | Pass at desktop, tablet and mobile widths |
| Motion accessibility | Pass, `prefers-reduced-motion` disables reveal motion |

## Motion implemented

- Staggered 3D character reveals for the requested homepage headings.
- Intersection-based fade-up, slide-left, slide-right and zoom entrances.
- Alternating process-step timing and connected-line composition.
- Service-row hover preview, icon state and CTA transitions.
- Team image hover, carousel controls, marquee, video ripple, hero carousel and page loader.
