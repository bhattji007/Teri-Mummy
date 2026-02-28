import { LiveCounter } from "@/components/LiveCounter";
import { WantedPoster } from "@/components/WantedPoster";

export function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-left">
        <p className="eyebrow">🔞 NOT SAFE FOR MUMMIES — PROCEED WITH ZERO REGRETS</p>
        <div className="hero-title-stack" role="heading" aria-level={1}>
          <p className="hero-line hero-line-1">INTERNET KA</p>
          <p className="hero-line hero-line-2">SABSE KHATARNAK</p>
          <p className="hero-line hero-line-3">JOKE SITE. 💀</p>
        </div>
        <p className="hero-copy">
          Delhi ki 2 AM chai stall energy. Raw. Unhinged. Legendary.
          <br />
          Teri mummy ko bhejo — woh block kar degi, tu viral ho jayega.
        </p>
        <div className="hero-seen-row">
          <span className="hero-seen-label">AS SEEN ON:</span>
          <span className="hero-seen-chip">📱 WhatsApp Groups</span>
          <span className="hero-seen-chip">💬 Papa Ki Phone</span>
          <span className="hero-seen-chip">🌐 Delhi Chai Stalls</span>
        </div>
        <div className="hero-cta">
          <a href="#joke-zone" className="btn btn-lime btn-hero-main">
            AUR SUNAO! 🔥
          </a>
          <a href="#api-zone" className="btn btn-dark btn-hero-secondary">
            API DEKHO →
          </a>
        </div>
      </div>
      <div className="hero-right">
        <WantedPoster />
        <LiveCounter />
      </div>
    </section>
  );
}
