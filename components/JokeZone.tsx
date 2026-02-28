"use client";

import { useState } from "react";
import type { Joke } from "@/data/jokes";

type JokeZoneProps = {
  initialJoke: Joke;
};

export function JokeZone({ initialJoke }: JokeZoneProps) {
  const [joke, setJoke] = useState<Joke>(initialJoke);
  const [loading, setLoading] = useState(false);
  const displayedJoke = joke.line.toUpperCase();

  const loadRandomJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/random", { cache: "no-store" });
      const nextJoke = (await response.json()) as Joke;
      setJoke(nextJoke);
    } finally {
      setLoading(false);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${joke.line} | terimummy.com`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareX = () => {
    const text = encodeURIComponent(`${joke.line} #TeriMummy`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyJoke = async () => {
    await navigator.clipboard.writeText(displayedJoke);
  };

  return (
    <section id="joke-zone" className="container joke-zone">
      <p className="section-label">// THE DAILY BURN //</p>
      <div className="joke-card">
        <div className="joke-top">
          <p className="joke-target">TERI MUMMY KI ROAST FILE #0069</p>
          <p className="joke-classified">⛔ CLASSIFIED</p>
        </div>
        <div className="joke-body">
          <p className="joke-open-quote">&quot;</p>
          <h2>{displayedJoke}</h2>
          <div className="izzat-section">
            <p>MUMMY KI IZZAT LEVEL:</p>
            <div className="izzat-progress">
              <div className="izzat-progress-fill" />
            </div>
            <span>8% (CRITICALLY LOW)</span>
          </div>
          <div className="joke-divider" />
          <div className="joke-actions">
            <button className="btn btn-wa" onClick={shareWhatsApp}>
              📱 SHARE PE WHATSAPP
            </button>
            <button className="btn btn-dark" onClick={shareX}>
              🐦 POST ON X
            </button>
            <button className="btn btn-dark" onClick={copyJoke}>
              📋 COPY
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-lime btn-joke" onClick={loadRandomJoke} disabled={loading}>
        {loading ? "LOADING..." : "🎲 NAYA JOKE LAO"}
      </button>
    </section>
  );
}
