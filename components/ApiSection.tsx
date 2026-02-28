export function ApiSection() {
  return (
    <section id="api-zone" className="container api-section">
      <div className="api-left">
        <p className="api-eyebrow">// FOR THE NERDS //</p>
        <h3>FREE JOKE API.</h3>
        <p className="api-sub">
          Apni app mein teri mummy ka dard inject karo. 100% free. No auth. No rate
          limit (theek hai thoda hai).
        </p>
        <div className="api-chip">
          <strong>GET</strong>
          <span>terimummy.com/api/random</span>
        </div>
      </div>
      <div className="terminal">
        <div className="terminal-head">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
          <p>bash — terimummy-api</p>
        </div>
        <pre>
          <code>{`$ curl terimummy.com/api/random
{
  "id": 69,
  "joke": "Teri mummy itni slow hai ki...",
  "punchline": "...usne Google Maps khola aur GPS ne bhi bol diya GOOD LUCK.",
  "damage": "∞ izzat",
  "category": "speed",
  "roast_level": "NUCLEAR"
}`}</code>
        </pre>
      </div>
    </section>
  );
}
