"use client";

export function WantedPoster() {
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
          <div className="target-box" />
        </div>

        <p className="poster-subject">TERI MUMMY</p>

        <div className="scan-row">
          <span>ID#6969</span>
          <span>THREAT: MAX</span>
          <span>STATUS: ACTIVE</span>
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
