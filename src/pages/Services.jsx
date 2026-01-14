import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="containerPage">
      <section className="sectionPad">
        <h1 className="h1">Services</h1>
        <p className="p muted">
          I help teams design, build, and ship thoughtful web experiences.
        </p>
      </section>

      <section className="sectionPad grid gap-6 md:grid-cols-3">
        <div className="card cardPad">
          <h2 className="h2">Design</h2>
          <p className="p">
            UX-first layouts, brand alignment, and interaction design.
          </p>
        </div>

        <div className="card cardPad">
          <h2 className="h2">Build</h2>
          <p className="p">
            Modern React builds with clean architecture and performance in mind.
          </p>
        </div>

        <div className="card cardPad">
          <h2 className="h2">Launch</h2>
          <p className="p">
            Deployment, polish, and handoff so teams can move fast.
          </p>
        </div>
      </section>

      <section className="sectionPad">
        <h2 className="h2">How it works</h2>
        <ol className="mt-4 space-y-2">
          <li className="p">
            <span className="muted">1.</span> Discovery &amp; goals
          </li>
          <li className="p">
            <span className="muted">2.</span> Design &amp; structure
          </li>
          <li className="p">
            <span className="muted">3.</span> Build &amp; iterate
          </li>
          <li className="p">
            <span className="muted">4.</span> Launch &amp; refine
          </li>
        </ol>
      </section>

      <section className="sectionPad card cardPad text-center">
        <h2 className="h2">Have a project in mind?</h2>
        <Link to="/contact" className="btn btnPrimary mt-4 inline-block">
          Contact me
        </Link>
      </section>
    </main>
  );
}