export function Home() {
  return (
    <>
      <section className="sectionPad">
        <div className="containerPage">
          <div className="card cardPad">
            <h1 className="h1">Build, ship, and polish modern web experiences.</h1>
            <p className="p mt-3 max-w-2xl">
              MBA Web Studio templates: clean structure, tokenized styling, and reusable components —
              built step-by-step in React + Vite.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btnPrimary">View services</button>
              <button className="btnGhost">See work</button>
            </div>

            <div className="mt-6 muted">Brand: bg / surface / accent / text / muted</div>
          </div>
        </div>
      </section>

      <section id="work" className="sectionPad">
        <div className="containerPage">
            <div className="card cardPad">
                <h2 className="h2">Selected Work</h2>
                    <p className="p mt-2 text-sm text-text/80">
                        Case studies coming soon — this section will showcase recent builds and results.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {["Landing Systems", "Design Systems", "Performance"].map((t) => (
                            <div key={t} className="card cardPad bg-bg/30">
                                <div className="muted">Category</div>
                                <div className="mt-1 font-medium">{t}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


      <section id="services" className="sectionPad">
        <div className="containerPage grid gap-6 sm:grid-cols-3">
          {["Design", "Build", "Launch"].map((t) => (
            <div key={t} className="card cardPad">
              <h2 className="h2 text-lg">{t}</h2>
              <p className="p mt-2 text-sm text-text/80">
                Semantic Tailwind classes keep JSX readable and consistent.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="sectionPad">
        <div className="containerPage">
          <div className="card cardPad max-w-xl">
            <h2 className="h2">Contact</h2>
            <p className="p mt-2">Send a quick note and we’ll reply.</p>

            <form className="mt-5 grid gap-3">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" />
              <textarea className="input min-h-28" placeholder="Message" />
              <button className="btnPrimary justify-self-start" type="button">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
