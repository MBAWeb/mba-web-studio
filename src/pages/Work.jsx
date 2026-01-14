import { Link } from "react-router-dom";
import { caseStudies } from "../content/caseStudies";

export default function Work() {
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
          {caseStudies.map((c) => (
            <article key={c.slug} className="card cardPad cardHover">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {c.title}
                  </h2>
                  <p className="p mt-2 text-sm text-text/80">
                    {c.summary}
                  </p>
                </div>
                <span className="pill">{c.pill}</span>
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
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="muted">Outcome</div>
                <p className="p mt-2 text-sm text-text/80">
                  {c.outcome}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={`/work/${c.slug}`} className="btn btnPrimary">
                  View details
                </Link>
                <Link to="/contact" className="btn btnGhost">
                  Start a similar project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
