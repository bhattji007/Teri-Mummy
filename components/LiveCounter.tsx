"use client";

import { useEffect, useState } from "react";

export function LiveCounter() {
  const [damage, setDamage] = useState(6942069);
  const [forwards, setForwards] = useState(69400);

  useEffect(() => {
    const timer = setInterval(() => {
      setDamage((value) => value + Math.floor(Math.random() * 41) + 7);
      setForwards((value) => value + Math.floor(Math.random() * 3) + 1);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-counter">
      <div className="counter-head">
        <span className="dot" />
        <span>LIVE DAMAGE COUNTER</span>
      </div>

      <p className="counter-big">{damage.toLocaleString()}</p>
      <p className="counter-sub">jokes served • izzat barbad</p>
      <div className="counter-divider" />

      <div className="counter-row">
        <span>WhatsApp forwards</span>
        <strong className="counter-green">{(forwards / 1000).toFixed(1)}K</strong>
      </div>
      <div className="counter-row">
        <span>Mammas roasted</span>
        <strong className="counter-magenta">∞</strong>
      </div>
    </div>
  );
}
