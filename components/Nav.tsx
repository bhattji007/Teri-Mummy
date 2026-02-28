export function Nav() {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <div className="logo-wrap">
          <div className="logo-mark">TM</div>
          <div className="logo-stack">
            <p className="logo">TERI MUMMY</p>
            <p className="logo-sub">.COM</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#joke-zone">JOKES</a>
          <a href="#api-zone">API</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </nav>
        <div className="live-pill">
          <span className="live-dot">●</span>
          <span>69,420 LIVE</span>
        </div>
      </div>
    </header>
  );
}
