# Tradesmen Master Website Engine

An ultra-fast, mobile-first, high-converting website platform tailored specifically for Irish & UK trade contractors (Electricians, Plumbers, Builders, Carpenters, Roofers).

Engineered with **Astro** for sub-second page loads, zero database overhead, zero CMS maintenance headaches, and maximum mobile lead conversion.

---

## ⚡ Key Conversion Features

1. **Mobile Sticky Call & WhatsApp Bar:** 
   - Instant tap-to-call and WhatsApp photo triage on mobile devices.
2. **Irish Trade Trust & Regulatory Badges:**
   - Safe Electric Registered Contractor
   - SEAI Approved EV Charger & Heat Pump Installer
   - €6.5M Public Liability Insurance
   - RECI Certified Workmanship
3. **Interactive Instant Quote / Estimate Form:**
   - Multi-step job quote request that formats and routes directly to the contractor's **WhatsApp** or email.
4. **Local SEO & Google Schema.org:**
   - Pre-configured `LocalBusiness` and `Electrician` / `Plumber` JSON-LD structured data for Google Maps and local search ranking in Dublin / Ireland.
5. **Verified Google 5-Star Reviews Component:**
   - Highlights real customer ratings and testimonials.
6. **Multi-Trade Presets:**
   - Includes full presets for **Electrician** (`VoltPro Electrical`) and **Plumber** (`FlowPro Plumbing & Heating`).

---

## 🛠️ Quick Start

```bash
cd /Users/jinishrajan/Webprojects/Tradesmen

# Install dependencies
pnpm install

# Run Electrician template
pnpm dev:electrician

# Run Plumber template
pnpm dev:plumber
```

---

## 🚀 5-Minute Client Replication Playbook

When an electrician or plumber signs up:

1. **Copy or duplicate the folder / repo:**
   ```bash
   git clone <repo> client-electrician
   cd client-electrician
   ```
2. **Update `src/configs/electrician.ts` (or create a new config):**
   - Business Name, Owner Name, Phone Number, WhatsApp Number
   - Service areas (e.g. Castleknock, Blanchardstown, Swords)
   - Certifications (Safe Electric number, Insurance, SEAI)
   - Services offered & pricing guides
3. **Deploy to Cloudflare Pages:**
   - Connect the repo to Cloudflare Pages
   - Build command: `pnpm run build`
   - Output directory: `dist`
   - Attach client's custom domain (e.g., `declanbyrneelectrical.ie`) with free automatic SSL.

---

## 📁 Project Architecture

```text
/Users/jinishrajan/Webprojects/Tradesmen/
├── site.config.ts                     # Active preset switcher (Electrician / Plumber)
├── package.json                       # Scripts for dev and build
├── astro.config.mjs                   # Astro configuration & sitemap integration
├── src/
│   ├── types/config.ts                # TypeScript schema for tradesmen
│   ├── configs/
│   │   ├── electrician.ts             # VoltPro Electrical preset
│   │   └── plumber.ts                 # FlowPro Plumbing preset
│   ├── layouts/BaseLayout.astro       # SEO meta, JSON-LD Schema, Google Fonts
│   ├── components/
│   │   ├── Header.astro               # Click-to-call, WhatsApp CTA, navigation
│   │   ├── EmergencyBanner.astro      # 24/7 Red emergency alert bar
│   │   ├── Hero.astro                 # Conversion headline, highlights & quick quote
│   │   ├── TrustBadges.astro          # Safe Electric, SEAI, €6.5M Insured
│   │   ├── ServicesGrid.astro         # 6 core electrical services with pricing guides
│   │   ├── QuoteEstimator.astro       # Interactive job enquiry form
│   │   ├── Reviews.astro              # Google 5-star customer reviews
│   │   ├── ServiceAreas.astro         # Dublin areas covered & SEO tags
│   │   ├── MobileCallBar.astro        # Sticky bottom mobile call & WhatsApp bar
│   │   └── Footer.astro               # Webengineer.ie attribution & trade legalities
│   └── pages/
│       ├── index.astro                # High-converting homepage
│       ├── services.astro             # Dedicated services page
│       ├── emergency.astro            # 24/7 Emergency callout landing page
│       ├── areas.astro                # Local service areas covered
│       └── contact.astro              # Direct contact & quotation page
```

---

Built & Engineered by **[webengineer.ie](https://webengineer.ie)**
