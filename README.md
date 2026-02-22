# VELORY Website

Marketing site for VELORY, built with Next.js and Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Vercel Speed Insights

## Run locally

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Lead form delivery

The contact form submits to `POST /api/contact`.

Configure one of these delivery options:

1. `CONTACT_WEBHOOK_URL`
- Sends each lead payload to your webhook endpoint (Zapier, Make, n8n, etc.).

2. `RESEND_API_KEY` + `LEAD_TO_EMAIL`
- Sends each lead as an email via Resend API.
- Optional: `CONTACT_FROM_EMAIL` (defaults to `onboarding@resend.dev`).

## Optional public config

- `NEXT_PUBLIC_CONTACT_EMAIL` (defaults to `velorysystems@outlook.com`)

## Routes

- `/` Home
- `/privacy-policy`
- `/terms`
- `/robots.txt`
- `/sitemap.xml`

## Notes

- Facebook Pixel is loaded in `app/layout.jsx`.
- JSON-LD schema is injected from `src/components/StructuredData.jsx`.
