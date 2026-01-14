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
          <p className="p subtle mt-2">That case study doesn’t exist yet.</p>
          <Link to="/work" className="btn btnGhost mt-4 inline-block">
            Back to Work
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="containerPage">
      {/* Header + summary */}
      <section className="sectionPad">
        <Link to="/work" className="btn btnGhost inline-block">
          ← Back to Work
        </Link>

        <div className="mt-8 measure">
          <div className="pill">{cs.pill}</div>
          <h1 className="h1 mt-4">{cs.title}</h1>
          <p className="p subtle mt-3">{cs.summary}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card cardPad">
            <h2 className="h2">Role</h2>
            <p className="p mt-3">{cs.role}</p>
          </div>

          <div className="card cardPad">
            <h2 className="h2">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="card cardPad">
            <h2 className="h2">Outcome</h2>
            <p className="p mt-3">{cs.outcome}</p>
          </div>
        </div>
      </section>

      {/* Reflection + media + narrative */}
      <section className="sectionPad">
        {(cs.challenges?.length || cs.learnings?.length) && (
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {cs.challenges?.length ? (
              <div className="card cardPad">
                <h2 className="h2">Challenges</h2>
                <ul className="mt-4 space-y-2">
                  {cs.challenges.map((item) => (
                    <li key={item} className="p subtle">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {cs.learnings?.length ? (
              <div className="card cardPad">
                <h2 className="h2">Learnings</h2>
                <ul className="mt-4 space-y-2">
                  {cs.learnings.map((item) => (
                    <li key={item} className="p subtle">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}

        {cs.media?.length ? (
          <div className="mb-10 space-y-8">
            {cs.media.map((m) => (
              <figure key={m.id} className={m.kind === "inset" ? "measure" : ""}>
                <div className="mediaFrame">
                  {m.src ? (
                    <img
                      src={m.src}
                      alt={m.alt || ""}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mediaInner" aria-hidden="true" />
                  )}
                </div>
                {m.caption ? (
                  <figcaption className="mediaCap">{m.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}

        <div className="card cardPad">
          {cs.sections.map((s) => (
            <div key={s.heading} className="py-6 first:pt-0 last:pb-0">
              <h2 className="h2 measure">{s.heading}</h2>
              <p className="p subtle measure mt-3">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sectionPad text-center">
        <h2 className="h2">Want something like this?</h2>
        <Link to="/contact" className="btn btnPrimary mt-4 inline-block">
          Start a project
        </Link>
      </section>
    </main>
  );
}
