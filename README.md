# MSM Advocates Website

Next.js 14 website for MSM Advocates, built with Tailwind CSS, Framer Motion, and Sanity CMS.

---

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in your values
npm run dev
```

The app runs at `http://localhost:3000`. The Sanity Studio runs at `/studio` once the project ID is configured.

---

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | [sanity.io/manage](https://sanity.io/manage) after creating a project |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` (default) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` (or today's date) |
| `SANITY_API_TOKEN` | sanity.io/manage > API > Tokens (Editor role) |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | [formspree.io](https://formspree.io) after creating a form |
| `NEXT_PUBLIC_SITE_URL` | Your production domain, e.g. `https://www.msmadvocates.co.ug` |

The app works without Sanity configured: all pages use static seed data from `lib/constants.ts` and `lib/seeds.ts`. Sanity adds live CMS editing for team members, practice areas, insights, and site settings.

---

## Logo

Place the MSM Advocates logo at:

```
public/msm-logo.png
```

The logo should be square (512x512 or 1024x1024) with a transparent background. The existing `ChatGPT_Image_Jun_26__2026__02_27_32_PM.png` file can be used directly after renaming.

Also add:

```
public/favicon.ico
public/apple-touch-icon.png
public/og-default.jpg   (1200x630, used as default social share image)
```

---

## Sanity CMS setup

1. Create a project at [sanity.io](https://sanity.io).
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`.
3. Run `npm run dev` and visit `/studio` to open the embedded Studio.
4. Enter content for Site Settings, Practice Areas, Team Members, and Insights.
5. Once content is in Sanity, switch pages from seed data to live fetches:
   - Import the relevant query from `sanity/lib/queries.ts`
   - Replace the `PRACTICE_AREAS_SEED` / `TEAM_SEED` / `INSIGHTS_SEED` references with `await getAllPracticeAreas()` etc.

---

## Project structure

```
app/                      Next.js 14 App Router pages
  layout.tsx              Root layout: Navbar, Footer, WhatsAppFAB
  page.tsx                Home
  about/                  About the firm
  practice-areas/         Index + [slug] detail pages
  team/                   Index + [slug] profile pages
  clientele/              Sectors served
  insights/               Index + [slug] article pages
  contact/                Inquiry form + office details
  studio/                 Sanity Studio (embedded)
  not-found.tsx           Custom 404

components/
  layout/                 Navbar, Footer, WhatsAppFAB
  primitives/             Container, Section, PageHeader, Typography, CTAButton
  motion/                 MotionWrapper, StaggerContainer
  cards/                  PracticeAreaCard, TeamMemberCard, InsightCard
  shared/                 ContactForm, SectionCTA, PortableTextRenderer

lib/
  constants.ts            Firm data, nav links, practice areas seed, team seed
  seeds.ts                Insights seed, sectors data
  utils.ts                cn() classname merger

sanity/
  schemas/                teamMember, practiceArea, insight, siteSettings
  lib/
    client.ts             Sanity client + sanityFetch helper
    image.ts              Image URL builder
    queries.ts            All GROQ queries

types/
  index.ts                TypeScript types for all Sanity documents

tailwind.config.ts        Full msm-* design token system
sanity.config.ts          Sanity Studio configuration
```

---

## Design tokens

All brand colours are prefixed `msm-*`:

| Token | Hex | Usage |
|---|---|---|
| `msm-slate` | `#3d4f6b` | Primary: headings, dark UI, navbar text |
| `msm-steel` | `#5a7080` | Secondary: body text, sub-headings |
| `msm-mist` | `#8ca5b5` | Tertiary: captions, borders, placeholders |
| `msm-gold` | `#b8922a` | Accent: CTAs, hover states, underlines |
| `msm-cream` | `#f8f6f2` | Background: alternate sections |
| `msm-parchment` | `#f2ede6` | Background: pull quote sections |
| `msm-ink` | `#1a1f2e` | Body text on light backgrounds |

Fonts: `font-serif` = DM Serif Display, `font-sans` = Inter. Both loaded via `next/font/google` with `display: swap`.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Import to [vercel.com](https://vercel.com).
3. Add all environment variables in the Vercel dashboard.
4. Deploy. Subsequent pushes to `main` deploy automatically.

For on-demand ISR (revalidation when Sanity content changes), add a Sanity webhook pointing to `https://your-domain.vercel.app/api/revalidate` with the `SANITY_WEBHOOK_SECRET` environment variable. A Route Handler for this can be added at `app/api/revalidate/route.ts`.

---

## Content guidelines

- No em dashes in any copy. Use periods, commas, colons, or semicolons instead.
- Headings use DM Serif Display at regular (400) weight.
- CTAs are verb-first: "Request a Consultation", "View Practice Areas", "Read the Insight".
- Team bios marked `[NEEDS CONTENT]` in the seed data need real copy before launch.
