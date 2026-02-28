const entries = [
  {
    name: "— RAM_420, DELHI NCR",
    text: "BHAI YE SITE NE MERI MUMMY KI IZZAT KA KAAM TAMAM KAR DIYA. 10/10 WOULD ROAST AGAIN.",
    tone: "magenta"
  },
  {
    name: "— SHARMA JI KI BETI, KANPUR",
    text: "SHARMA JI NE SHARE KIYA, SHARMA JI KI BETI NE SHARE KIYA, TERI MUMMY NE BHI SHARE KI APNI KHUD KI ROAST.",
    tone: "lime"
  },
  {
    name: "— TERI MUMMY KA PADOSI",
    text: "TERI MUMMY KA PADOSI HOON. IH JOKES MERE BAARE MEIN HAIN. PLEASE DELETE KARO. 5 STARS.",
    tone: "yellow"
  }
] as const;

export function Testimonials() {
  return (
    <section className="testimonials-wrap">
      <div className="container testimonials">
        <h3>VICTIM TESTIMONIALS</h3>
        <div className="testi-row">
          {entries.map((entry, idx) => (
            <article key={entry.name} className={`quote-card tilt-${idx + 1}`}>
              <p className={`verify-chip ${entry.tone}`}>✓ VERIFIED VICTIM</p>
              <p className="stars">★★★★★</p>
              <p className="quote-text">{entry.text}</p>
              <span className={`quote-name ${entry.tone}`}>{entry.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
