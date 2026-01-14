import { Link } from "react-router-dom";


export default function Work() {
  const cases = [
    {
      title: "Marketing Landing System",
      summary: "Reusable landing blocks + conversion-focused layout.",
      role: "Design + Frontend",
      stack: ["React", "Tailwind", "Vite"],
      outcome: "Systemized new pages with consistent UI and faster iteration.",
    },
    {
      title: "Design System Scaffold",
      summary: "Tokens + semantic Tailwind layers for clean JSX.",
      role: "UI Systems",
      stack: ["Tailwind", "PostCSS", "SCSS Tokens"],
      outcome: "Reduced styling drift and improved maintainability.",
    },
    {
      title: "Performance Optimization",
      summary: "Bundle cleanup and UX-focused performance improvements.",
      role: "Perf + DX",
      stack: ["Vite", "Code Splitting", "Audit"],
      outcome: "Faster loads and cleaner build output.",
    },
  ];

  return (
    <section className="sectionPad">
      <div className="containerPage">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="h1">Work</h1>
            <p className="p mt-2 max-w-2xl text-sm text-text/80">
              Selected case studies (starter content). Each card can become a detail page later.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="card cardPad cardHover">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{c.title}</h2>
                  <p className="p mt-2 text-sm text-text/80">{c.summary}</p>
                </div>
                <span className="pill">Case Study</span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="muted">Role</div>
                  <div className="mt-1 text-sm">{c.role}</div>
                </div>

                <div className="sm:col-span-2">
                  <div className="muted">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.stack.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="muted">Outcome</div>
                <p className="p mt-2 text-sm text-text/80">{c.outcome}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/work/sample-case-study" className="btn btnPrimary">View details</Link>
                <button className="btnPrimary" type="button">Start a similar project</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
