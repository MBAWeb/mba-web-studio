export function Work() {
  const projects = [
    {
      title: "Marketing Landing System",
      desc: "High-conversion landing pages built with reusable components.",
      tag: "Frontend"
    },
    {
      title: "Design System Scaffold",
      desc: "Token-driven UI system with Tailwind + semantic layers.",
      tag: "Design System"
    },
    {
      title: "Performance Optimization",
      desc: "Lighthouse improvements and bundle tuning for production apps.",
      tag: "Performance"
    }
  ];

  return (
    <section className="sectionPad">
      <div className="containerPage">
        <h1 className="h1 mb-6">Work</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="card cardPad">
              <div className="muted">{p.tag}</div>
              <h2 className="mt-2 font-semibold">{p.title}</h2>
              <p className="p mt-2 text-sm">{p.desc}</p>
              <div className="mt-4">
                <button className="btnGhost">View case study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
