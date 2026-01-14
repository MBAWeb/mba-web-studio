import { useParams, Link } from "react-router-dom";
import { getCaseStudyBySlug } from "../content/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    return (
      <main className="containerPage">
        <section className="sectionPad">
          <h1 className="h1">Not found</h1>
          <p className="p muted">That case study doesn’t exist yet.</p>
          <Link to="/work" className="btn btnGhost mt-4 inline-block">
            Back to Work
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="containerPage">
      <section className="sectionPad">
        <Link to="/work" className="btn btnGhost inline-block">
          ← Back to Work
        </Link>

        <div className="mt-6">
          <div className="pill">{cs.pill}</div>
          <h1 className="h1 mt-3">{cs.title}</h1>
          <p className="p muted mt-2">{cs.summary}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card cardPad">
            <h2 className="h2">Role</h2>
            <p className="p mt-2">{cs.role}</p>
          </div>

          <div className="card cardPad">
            <h2 className="h2">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="card cardPad">
            <h2 className="h2">Outcome</h2>
            <p className="p mt-2">{cs.outcome}</p>
          </div>
        </div>
      </section>

      <section className="sectionPad">
        <div className="card cardPad">
          {cs.sections.map((s) => (
            <div key={s.heading} className="py-4 first:pt-0 last:pb-0">
              <h2 className="h2">{s.heading}</h2>
              <p className="p muted mt-2">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sectionPad text-center">
        <h2 className="h2">Want something like this?</h2>
        <Link to="/contact" className="btn btnPrimary mt-4 inline-block">
          Start a project
        </Link>
      </section>
    </main>
  );
}
