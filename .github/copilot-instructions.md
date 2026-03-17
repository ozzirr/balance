# Balance Codebase Guide for AI Agents

## Project Overview

Balance is a **privacy-first personal finance web application** - a marketing/product site hosted on Vercel for an offline-first iOS/Android app. The codebase is a **static multi-page website** (no build process) with Italian/English/Portuguese i18n support, featuring hero animations, glassmorphism UI, and a product roadmap.

**Key distinction**: This repo contains the *marketing website* (`index.html`, `balancepro.html`, `roadmap.html`), not the mobile app itself.

---

## Architecture & File Structure

### Core Files (in root)
- **`index.html`** - Main marketing homepage with hero section, trust bar, features, pricing
- **`balancepro.html`** - Balance Pro subscription landing page
- **`pro-waitlist.html`** - Countdown to Pro release (March 20, 2026)
- **`roadmap.html`** - Development timeline, principles, contribution guide
- **`privacy.html`, `terms.html`, `contacts.html`** - Legal/contact pages

### Styling & Interaction
- **`style.css`** (3233 lines) - Monolithic stylesheet defining:
  - CSS custom properties (--bg0, --accent1, --glass-bg, etc.)
  - Glass morphism cards (`.glass-card` with border gradients)
  - Animations (`float`, `card-rise`, `pulse-marker`, `detail-pop`)
  - Responsive breakpoints (`@media (max-width: 768px)`)
  - Component classes (`.btn-primary`, `.section-title`, `.pricing-card`)

- **`script.js`** (463 lines) - Vanilla JS (no frameworks):
  - Intersection Observer for scroll reveals (`.reveal` + `.active` classes)
  - Carousel initialization (`initCarousel()`)
  - Mobile menu toggle with icon animation
  - 3D iPhone interaction (`initIPhone3D()`)
  - Feature detail switcher
  - Contact form handling

### Internationalization
- **`i18n.js`** (1949 lines) - Complete i18n system:
  - Supports: Italian (it), English (en), Portuguese (pt)
  - Stores all copy in `COPY` object keyed by language
  - Modifies DOM content, OG tags, and meta tags on language change
  - Persists language choice to localStorage (`balance-lang`)
  - **No external i18n library** - custom implementation

### Backend/Database (Minimal)
- **`api/`** - Empty; no serverless functions deployed
- **`prisma/`** - Empty; no database schema
- **`supabase/newsletter_subscribers.sql`** - Unused SQL schema
- **`.env.local`** - Local environment (not in repo)

---

## Design System & Conventions

### Color Variables (`:root`)
```css
--bg0: #06060F (darkest)
--bg1: #0A0C18
--bg2: #10152B
--accent1: #8F5BFF (purple, primary)
--accent2: #3FD5FF (cyan, secondary)
--accent3: #47F1AE (green)
--glass-bg: rgba(14, 18, 32, 0.65)
--glass-border: rgba(150, 190, 255, 0.18)
--success-color: #59F3A2
--danger-color: #FF7E7E
```

### Typography
- **Display**: Space Grotesk (headings, large text)
- **Body**: Manrope (paragraphs, UI text)
- Loaded from Google Fonts (no local fonts)

### Component Patterns
- **Glass cards**: `.glass-card` + `::before` pseudo-element with gradient border
- **Buttons**: `.btn` (base) + `.btn-primary`, `.btn-secondary`, `.btn-disabled`
- **Sections**: `.section-title` (gradient text), `.section-text` (secondary color)
- **Animations**: `.reveal` + `.delayed`, `.delayed-1`, `.delayed-2` for staggered scrolls

### Spacing (no spacing scale; uses pixels)
- `--container-width: 1120px`
- `--header-height: 72px`
- `--radius-lg: 24px, --radius-md: 16px, --radius-sm: 12px`

---

## HTML Structure Conventions

### Standard Page Template
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <!-- SEO: title, description, og:tags, canonical -->
  <!-- Fonts: Google Fonts preconnect -->
  <!-- CSS: style.css -->
  <!-- Icons: Font Awesome 6.4.0 CDN -->
</head>
<body class="site-bg">
  <header class="glass-nav">
    <!-- nav-container with logo and nav-links -->
  </header>
  <main class="page-content">
    <!-- Sections with .reveal for scroll animations -->
  </main>
  <footer class="footer-scene">
    <!-- Copyright, language selector, links -->
  </footer>
  <script src="i18n.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### Scroll Animation Pattern
- Add `.reveal` class to elements you want to fade in on scroll
- Add `.delayed`, `.delayed-1`, `.delayed-2` for staggered timing
- Intersection Observer in `script.js` adds `.active` class when in viewport

### Feature Flip Cards (index.html only)
- `.feature-card` with `.feature-face.feature-front` / `.feature-back`
- `data-feature="snapshot"` attribute links to detail panel
- Click event switches active state + updates `.feature-detail` aside

---

## JavaScript Interaction Patterns

### Carousels
```javascript
initCarousel('hero-carousel', { duration: 3000 });
// Requires:
// - Container with id="hero-carousel"
// - .carousel-slide children
// - .indicator buttons with data-index
```

### Mobile Menu Toggle
- Button `.mobile-menu-btn` toggles `.nav-links.active`
- Icon changes from `fa-bars` to `fa-xmark`
- Closes automatically on link click

### i18n Language Switching
- Footer dropdown `#footer-language` triggers language change
- Updates all text via `COPY[lang]` nested object
- Updates HTML lang attribute, OG tags, localStorage

---

## Product Content Structure

### Pages & Their Purpose
1. **index.html** - Hero → Trust bar → Split sections (context/clarity) → Features (5 cards) → Pricing (Free/Pro) → FAQ → Download CTA
2. **balancepro.html** - Pro-specific landing (feature comparison)
3. **pro-waitlist.html** - Countdown timer to March 20, 2026 + Pro features preview
4. **roadmap.html** - Timeline (completed/in-progress/planned/vision) + principles + contribution guide
5. **contacts.html** - Contact form + email submission
6. **privacy.html**, **terms.html** - Legal text

### Recurring UI Blocks
- **Hero CTA**: Download buttons (App Store link, "Coming soon" for Google Play)
- **Pricing cards**: Free (3 wallets) vs Pro (unlimited, €2.99/mo or €19.99/yr)
- **Trust badges**: 100% offline, No server, Open source, iOS & Android
- **Footer**: Copyright, language selector, Privacy/Terms/Contacts links

---

## Common Tasks & Patterns

### Adding a New Page
1. Create `pagename.html` following standard template
2. Include `.reveal` animations for scroll effect
3. Reference i18n copy in `i18n.js` under language objects
4. Add language selector dropdown to footer
5. Link from navigation/other pages

### Styling a New Component
1. Define color variables from `:root` palette
2. Use `.glass-card` base + custom padding/gap
3. Add hover states with `transform: translateY(-2px)`
4. Include box-shadow for depth (use `--shadow-soft` or `--shadow-strong`)
5. Ensure mobile responsiveness in `@media (max-width: 768px)`

### Adding i18n Copy
1. Locate language object in `i18n.js` (e.g., `COPY.it.home.newSection`)
2. Add nested object with strings
3. In HTML, add data attribute or JS reference
4. `updatePageContent()` function handles DOM updates

---

## Performance & Best Practices

- **No build/bundling**: CSS and JS loaded directly
- **Font Awesome CDN** for icons (6.4.0)
- **Google Fonts preconnect** for faster loading
- **Smooth scroll**: `html { scroll-behavior: smooth; }`
- **Intersection Observer** for lazy animations (not images)
- **No npm dependencies** in frontend code
- **Minimal JS runtime** - DOMContentLoaded listener does all setup

---

## Deployment

- **Platform**: Vercel (inferred from `.vercel/` likely present)
- **No build step**: HTML, CSS, JS served as-is
- **URL**: https://ozzirr.github.io/balance/ (GitHub Pages) or Vercel domain
- **Branches**: `main` is production

---

## Quick Reference: Key Classes

| Class | Purpose |
|-------|---------|
| `.glass-card` | Glassmorphism container (border gradient + shadow) |
| `.reveal` | Fade-in on scroll via Intersection Observer |
| `.btn-primary` | Purple gradient CTA button |
| `.section-title` | Large gradient text heading |
| `.center-text` | Center alignment utility |
| `.glass-nav` | Navigation header with semi-transparent bg |
| `.site-bg` | Radial gradient background applied to body |
| `.active` | Added by JS to reveal elements when in viewport |
| `.feature-card` | Flip card in feature section |
| `.countdown-container` | Flex layout for timer boxes |

---

## Known Quirks & Edge Cases

- **No trailing-slash URLs**: Pages are `index.html`, `roadmap.html` (not `/roadmap/`)
- **i18n sync**: Must manually update all language objects in `i18n.js` - no automatic sync
- **Font Awesome versions**: CDN loads 6.4.0; check icon names if adding new icons
- **Mobile menu**: Only `.mobile-menu-btn` visible on `@media (max-width: 768px)`
- **Countdown timer (pro-waitlist.html)**: Hardcoded to March 20, 2026 - update inline script if date changes
- **No dark mode toggle**: App-wide dark theme only (no light mode variant)

---

## When In Doubt

1. Check existing page structure in `index.html` or `roadmap.html`
2. Reference `.glass-card` + `.btn-primary` for styling consistency
3. Add `.reveal` to new sections for animations
4. Use CSS custom properties from `:root` (don't hardcode colors)
5. Test mobile responsiveness at `@media (max-width: 768px)`
