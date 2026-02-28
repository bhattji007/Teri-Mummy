const goals = [
  { label: "JOKES DELIVERED", value: "69,420+" },
  { label: "MAMMAS ROASTED", value: "∞" },
  { label: "IZZAT RATING ⭐", value: "4.5/5" },
  { label: "MUMMY APPROVED", value: "100%" }
];

export function StatsBar() {
  return (
    <section className="stats-wrap">
      <div className="container stats-grid">
        {goals.map((goal) => (
          <div key={goal.label} className="stat">
            <strong>{goal.value}</strong>
            <span>{goal.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
