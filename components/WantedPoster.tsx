"use client";

import { useEffect, useState } from "react";

export function WantedPoster() {
  const [scanProgress, setScanProgress] = useState(24.0);
  const [dots, setDots] = useState(1);
  const [recOn, setRecOn] = useState(true);

  useEffect(() => {
    let current = 24;
    let direction: 1 | -1 = 1;

    const timer = setInterval(() => {
      const step = 2 + Math.random() * 4.5;
      current += step * direction;

      if (current >= 98) {
        current = 98;
        direction = -1;
      } else if (current <= 22) {
        current = 22;
        direction = 1;
      }

      setScanProgress(Number(current.toFixed(1)));
    }, 180);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dotsTimer = setInterval(() => {
      setDots((value) => (value % 3) + 1);
      setRecOn((value) => !value);
    }, 420);

    return () => clearInterval(dotsTimer);
  }, []);

  return (
    <div className="wanted-poster">
      <div className="poster-banner">⚠ WANTED: FACIAL SCAN ⚠</div>
      <div className="poster-banner-divider" />

      <div className="poster-body">
        <div className="face-shell">
          <img
            className="face-image"
            src="/wanted-face.png"
            alt="Facial scan target"
            loading="lazy"
          />
          <div className="scan-overlay" />
          <span className="corner c1" />
          <span className="corner c2" />
          <span className="corner c3" />
          <span className="corner c4" />
          <div className={`scan-rec ${recOn ? "on" : "off"}`}>
            <span className="scan-rec-dot" />
            REC
          </div>
          <div className="scan-status-row">
            <span>ANALYZING{".".repeat(dots)}</span>
            <span>MATCH FOUND: {scanProgress.toFixed(1)}%</span>
          </div>
        </div>

        <p className="poster-subject">TERI MUMMY</p>

        <div className="scan-row">
          <span>ID#6969</span>
          <span>THREAT: MAX</span>
          <span>STATUS: ACTIVE</span>
        </div>

        <div className="scan-progress">
          <div className="scan-progress-track">
            <div
              className="scan-progress-fill"
              style={{ width: `${scanProgress}%` }}
              aria-label={`Scan confidence ${scanProgress.toFixed(1)} percent`}
            />
          </div>
        </div>

        <div className="poster-line" />

        <div className="bio-row">
          <span>AGE</span>
          <strong>FOREVER 29</strong>
        </div>
        <div className="bio-row">
          <span>LAST SEEN</span>
          <strong>IN EVERY GROUP CHAT</strong>
        </div>
        <div className="bio-row">
          <span>DANGER LEVEL</span>
          <strong>NUCLEAR ☢</strong>
        </div>
      </div>

      <div className="poster-bounty">BOUNTY: ∞ IZZAT — DEAD OR ROASTED</div>
    </div>
  );
}
