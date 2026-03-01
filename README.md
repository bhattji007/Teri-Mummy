# Teri Mummy 🔥

> *"Teri mummy colony ka public Wi-Fi hai, sab connect hoke bhaag jaate."*

A Hindi roast machine disguised as a respectable Next.js web app. Type nothing, click a button, and receive a world-class burn about someone's mummy — delivered with surgical precision and zero mercy.

---

## What even is this?

**Teri Mummy** is a landing page that generates AI-grade roasts about your (definitely not real) mummy. It features:

- 60+ hand-crafted Hindi roasts with roast levels ranging from `MID` to `NUCLEAR`
- A **Damage Score** for each joke (e.g. `∞ izzat`, `IQ -404`, `seismic apocalypse`)
- A live joke zone that fetches a new roast every time you can't handle the last one
- Fake testimonials from people who definitely existed before they read joke #43
- A public REST API so you can roast programmatically (yes, really)
- A scrolling ticker of chaos, a warn band, and a footer that judges you

---

## Stack

| Thing | Why |
|---|---|
| Next.js 14 App Router | Because we use the latest things even for petty roasts |
| TypeScript | Type-safe burns only |
| Tailwind CSS | Makes the UI look good while it destroys you |
| Playwright | Tests. Yes, we test roasts. |

---

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and get roasted.

---

## API

Because roasting shouldn't be limited to the browser.

```
GET /api/random   → one random roast (for the indecisive)
GET /api          → all 60 roasts + total count (for the masochist)
```

Example response:

```json
{
  "id": 7,
  "joke": "Teri mummy ka network itna strong hai, tower khud call karta hai.",
  "punchline": "Signal full, privacy null.",
  "damage": "5G gossip",
  "category": "network",
  "roast_level": "NUCLEAR"
}
```

---

## Quirks worth knowing

- `roast_level` goes `MID → HIGH → NUCLEAR`. There is no `LOW`. We don't do LOW here.
- The `damage` field is scientifically meaningless and spiritually devastating.
- Joke #44 caused tectonic plate drift during testing. We left it in.
- The `WarnBand` component warns you before you enter. You will ignore it. Everyone does.
- `LiveCounter` tracks absolutely nothing real. The number feels right though.
- There is a `WantedPoster` component. We don't talk about what it contains.

---

## Project structure

```
app/
  page.tsx          ← the landing page
  api/route.ts      ← all jokes endpoint
  api/random/       ← random joke endpoint
components/
  Hero.tsx          ← where the damage begins
  JokeZone.tsx      ← the roast dispensary
  Ticker.tsx        ← scrolling chaos
  WarnBand.tsx      ← warning nobody reads
  StatsBar.tsx      ← made-up numbers, real vibes
  Testimonials.tsx  ← fake reviews, real burns
  ApiSection.tsx    ← for the nerds
  Footer.tsx        ← final words
data/
  jokes.ts          ← the nuclear arsenal
```

---

## Submit your own joke

Think you can out-roast us? We respect that energy.

**Open a pull request and add your joke to [`data/jokes.ts`](data/jokes.ts).**

Follow this format:

```ts
{
  id: 61, // next available id
  joke: "Teri mummy ka [your setup here].",
  punchline: "[the kill shot].",
  damage: "[creative damage stat]",
  category: "your-category",
  roast_level: "MID" | "HIGH" | "NUCLEAR"
}
```

### Submission rules (very strict, very serious)

1. **Hindi preferred.** Hinglish accepted. English-only jokes need to be exceptional.
2. **No real people.** Fictional mummies only. We are a lawful chaotic project.
3. `NUCLEAR` tier requires at least one absurd metaphor. This is non-negotiable.
4. The `damage` field is your creative canvas. Use it wisely. (`"soul evaporation"`, `"IQ -∞"`, `"existence canceled"` — this is the vibe).
5. `punchline` must land. If you have to explain it, it doesn't pass review.
6. PRs with only one joke are fine. PRs with 5+ jokes get a special place in our hearts.

---

## Contributing (beyond jokes)

Found a bug? Have a feature idea? Open an issue. Or just open a PR. We're friendly. Unless you submit a `MID` tier joke and call it `NUCLEAR`.

```bash
npm test    # run Playwright tests
npm run lint
npm run build
```

---

## License

MIT. Roast freely. Credit appreciated. Teri mummy not included.

---

*Built with love, mild trauma, and an unhealthy knowledge of Indian aunty dynamics.*
