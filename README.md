# Teri Mummy - Next.js Version

Hindi roast/joke landing page built with Next.js 14 App Router + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API routes

- `GET /api/random` -> returns one random joke
- `GET /api` -> returns all jokes with total count

## Structure

- `app/page.tsx` -> full landing page
- `components/*` -> section-level UI blocks
- `data/jokes.ts` -> joke dataset + random selector
- `app/api/*` -> API route handlers
