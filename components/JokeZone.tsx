"use client";

import { useState, useEffect, useRef } from "react";
import type { RoastJoke } from "@/data/jokes";

type JokeZoneProps = {
  initialJoke: RoastJoke;
};

export function JokeZone({ initialJoke }: JokeZoneProps) {
  const [joke, setJoke] = useState<RoastJoke>(initialJoke);
  const [loading, setLoading] = useState(false);
  const [izzatLevel, setIzzatLevel] = useState(() => Math.floor(Math.random() * 46) + 50);
  const [displayText, setDisplayText] = useState(initialJoke.joke.toUpperCase());
  const [isTyping, setIsTyping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fullText = joke.joke.toUpperCase();
    setDisplayText("");
    setIsTyping(true);
    let i = 0;
    const charDelay = Math.max(14, Math.min(34, Math.floor(1800 / fullText.length)));
    const timer = setInterval(() => {
      i++;
      setDisplayText(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, charDelay);
    return () => clearInterval(timer);
  }, [joke]);

  const loadRandomJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/random?except=${joke.id}`, { cache: "no-store" });
      if (!response.ok) throw new Error(response.statusText);
      const nextJoke = (await response.json()) as RoastJoke;
      setJoke(nextJoke);
      setIzzatLevel(Math.floor(Math.random() * 49) + 50);
    } catch {
      // keep existing joke on error
    } finally {
      setLoading(false);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${joke.joke} ${joke.punchline} | terimummy.com`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareX = () => {
    const text = encodeURIComponent(`${joke.joke} ${joke.punchline} #TeriMummy`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const izzatColor =
    izzatLevel >= 85 ? "#ff2222" :
    izzatLevel >= 70 ? "#ff6b00" :
                       "#ffd700";

  const izzatLabel =
    izzatLevel >= 90 ? "COMPLETELY FLATLINED" :
    izzatLevel >= 80 ? "NUCLEAR LEVEL"        :
    izzatLevel >= 65 ? "CRITICALLY LOW"       :
                       "DANGEROUSLY LOW";

  const copyJoke = async () => {
    await navigator.clipboard.writeText(`${joke.joke} ${joke.punchline}`);
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
          <p className="joke-open-quote">{'\u201C'}</p>
          <h2>
            {displayText}
            {isTyping && <span className="typewriter-cursor" aria-hidden="true">|</span>}
          </h2>
          <div className="izzat-section">
            <p>MUMMY KI IZZAT LEVEL:</p>
            <div className="izzat-progress">
              <div
                className="izzat-progress-fill"
                style={{ width: `${izzatLevel}%`, background: izzatColor }}
                aria-label={`Izzat level ${izzatLevel}%`}
              />
            </div>
            <span style={{ color: izzatColor }}>{izzatLevel}% ({izzatLabel})</span>
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
