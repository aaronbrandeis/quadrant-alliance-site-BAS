## Quadrant Alliance — sandbox site

Multi-page marketing site for Quadrant Alliance, an operator-led building
automation and controls platform. Fourth in the sandbox series after Cove
Water / Archway (`sandbox-site`), Quadrant Service Alliance (`quadrant-site`),
and Atlas Water Alliance (`atlas-water-site`). Same stack throughout: Next.js
App Router, Tailwind CSS v4, Lucide, Framer Motion.

### Structure

```
src/app/
  page.tsx                     Home
  about/page.tsx               About Us
  areas-of-interest/page.tsx   Areas of Interest, the five pillars
  business-owners/page.tsx     For Business Owners
  advisors-connectors/page.tsx Advisors & Connectors
  contact/page.tsx             Start a Conversation
  api/contact/route.ts         Contact form endpoint, sends via Resend
  layout.tsx                   Fonts, Navbar/Footer shell, metadata
  opengraph-image.tsx          Social preview card, generated at build
  robots.ts, sitemap.ts        Both driven off src/lib/site.ts
src/components/
  Hero.tsx, PageHero.tsx       Hero blocks
  ImageSlot.tsx, Plate.tsx     Photo slots with line-art fallbacks
  ContactForm.tsx              Posts to /api/contact
src/lib/
  site.ts                      Domain and indexing switch, both env vars
  media.ts                     Every photo slot, in one place
```

### Colourway

Identical to Quadrant Service Alliance, so the two read as one family:
`ink-50` through `ink-950` for every surface and border, `brand-*` signal red
for buttons, links, and accent rules.

An amber variant was built and rejected. Worth knowing why, in case it comes
up again: amber is a pale hue, so white text on it fails WCAG AA. Making it
work required dark text on the buttons and dropping accent text two steps to
amber-800, which reads as bronze rather than amber. Red needs none of that.

### Search indexing

Off. `robots.txt` disallows everything and every page carries
`noindex, nofollow`, so the site is shareable by link but not findable.

To go live: set `NEXT_PUBLIC_INDEXABLE=true` in Vercel and redeploy. That
flips `robots.txt`, drops the noindex tags, and starts advertising the
sitemap. Nothing in the code changes.

### Photography

All thirteen slots are filled, all from Pexels, free for commercial use with
no attribution required. Each slot records its Pexels id in `src/lib/media.ts`.

Two rules carried over from the earlier builds, both learned the hard way:

- **Store heroes pre-cropped to 16:9 and pillars to 3:4.** A source in the
  wrong aspect gets sliced to a useless strip by `object-cover`. Pexels crops
  server side with `&fit=crop&w=2000&h=1120`.
- **For any photo with a person in it, require either no identifiable
  equipment or equipment that genuinely belongs to this trade.** Anything in
  between advertises the wrong trade to the only audience that would notice.

A third rule came out of this build:

- **A hero overlay is tuned to one photograph's tonal range and does not
  travel between sites.** The stack inherited from Quadrant Service was built
  for a near-white photo. Dropped onto a darker one here it erased the image
  completely while the image still reported as loaded. Check the hero visually,
  not just that the file arrived.

Imagery is deliberately biased toward controls and BMS over mechanical HVAC.
Ductwork appears only on the pillar that is actually about mechanical systems,
and the one chiller-plant shot sits on a page hero behind a heavy wash.

#### Rejected, and why

Screening every candidate at full resolution rather than by thumbnail caught
all three of these:

- A "high-tech command center" that is a **Star Trek LCARS set replica**.
- A technician at a control panel wearing a hard hat with **Cyrillic "НЛМК"
  branding**, in a Russian steel plant with Cyrillic placards throughout.
- A technician with a handheld pendant, which on inspection is a **CNC router**,
  a different trade entirely.

Energy & Analytics uses metering rather than a BMS dashboard. Pexels has no
real building-analytics screen: the results are stock-market charts, which
assert the wrong idea, or the sci-fi set above. Submetering and trend logging
are in that pillar's bullets, so metering is the honest choice.

### Contact form

Posts to `/api/contact`, which validates, drops honeypot hits, and sends via
Resend. The thank-you screen only appears after a send actually succeeds; a
failure shows a visible error and a fallback address, so a submission is never
silently lost.

Configured entirely by environment variable, see `.env.example`. Mail sends
from the already-verified `send.quadrantservice.com` sender with the display
name set to Quadrant Alliance. Only the recipients see that address, because
the API route puts the enquirer's own email in the reply-to.

### Local development

```bash
npm install
npm run dev
```

Registered in `../website/.claude/launch.json` as `quadrant-controls-site` on
port 3005.

Note: the dev server holds `.next` while running, so `npm run build` fails
with `EPERM` or `EBUSY` until it is stopped. Stop, build, restart.

### Deployment

Vercel project `mainstaypartners/quadrant-alliance-site`, connected to
`aaronbrandeis/quadrant-alliance-site-BAS`. Pushes to `main` deploy
automatically. No custom domain yet.
