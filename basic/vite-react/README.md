# AfroVibes Experience Platform

Premium conversion-focused web platform for AfroVibes (Cape Town), built with React + Vite + GSAP.

## Highlights

- Cinematic intro + immersive hero
- Multi-page structure (`/`, `/experiences`, `/programs`, `/book`, `/about`, `/vibes`, `/journal`, `/partners`, `/community`)
- Founder-first storytelling (`Train with TG`)
- Conversion stack: sticky CTA, social proof blocks, urgency labels, exit intent email capture
- 3-step booking flow with Stripe test card placeholders
- SEO-oriented journal section with five growth articles
- Community + partner funnels
- Lightweight analytics event tracker via `window.__afrovibesEvents`

## Tech

- React 18
- Vite 5
- GSAP motion
- Tailwind available in project (not required for current styling)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Production integration checklist

- Swap route shim with Next.js App Router implementation
- Connect booking step 3 to real Stripe Checkout / PaymentIntents
- Persist spots/urgency from PostgreSQL + Prisma
- Replace mock analytics with PostHog
- Connect email capture to Resend or Mailchimp
- Wire CMS (Sanity or Contentlayer) for journal and experience content
