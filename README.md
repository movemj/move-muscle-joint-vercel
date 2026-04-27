# Move Muscle Joint — Next.js Site

A Next.js 15 / React 19 / Tailwind CSS site for an Overland Park chiropractic practice. Vercel-ready.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

### Option A — One-click via dashboard (easiest)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js. Leave all settings on default.
4. Click **Deploy**. Done.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel        # first run: links project, asks for confirmation
vercel --prod # deploy to production
```

## What was changed from the original Base44 export

The original zip shipped two parallel codebases (a Next.js version under `app/` and a Vite version under `src/`). This is the Next.js version, cleaned up:

- Removed `src/`, `vite.config.js`, `index.html`, `jsconfig.json`, `tailwind.config.js`, `postcss.config.js` (Vite-only files)
- Removed `base44/entities/` (Base44 SDK schemas — not used in the Next.js code)
- Stripped unused dependencies from `package.json`: `@base44/sdk`, `@base44/vite-plugin`, `react-hook-form`, `@hookform/resolvers`, `zod`, `resend` — none of these are imported by any file in `app/` or `components/`
- Removed `--turbopack` flag from `dev` script for broader compatibility (optional — add it back if you want)

## Structure

```
app/                    Next.js App Router pages
  api/contact/          Contact form endpoint (currently a stub)
  about/, book/, ...    Page routes
  layout.tsx            Root layout
  page.tsx              Home page
  globals.css           Global Tailwind styles
  sitemap.ts            Auto-generated sitemap
components/
  home/                 Home page sections
  layout/               Header, Footer
  templates/            Shared page templates (conditions, services)
  ui/                   Reusable UI primitives
lib/
  site-data.ts          Site-wide constants (name, address, image URLs)
  utils.ts              `cn()` className helper
public/                 Static assets
```

## Environment variables

None are required for the site to build and run. The contact API route at `app/api/contact/route.ts` is a stub that logs submissions to the server console.

To wire up real email delivery, install `resend` and uncomment the `resend.emails.send(...)` block in that file:

```bash
npm install resend
```

Then add `RESEND_API_KEY` to your Vercel project's Environment Variables.

## Notes

- All hero/section images are hosted on `media.base44.com`. They're served via `next/image` and the domain is whitelisted in `next.config.ts`. If Base44 ever takes those URLs down, you'll need to host the images yourself (move them to `/public` and update `lib/site-data.ts`).
- The site uses the Montserrat font via `next/font/google` — no extra config needed.
