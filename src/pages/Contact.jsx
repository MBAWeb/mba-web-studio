import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const [error, setError] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setStatus("idle");
  }

  function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return; // prevent double submit
    setError("");

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out name, email, and message.");
      return;
    }

    // Simple email check
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate sending
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  }

  return (
    <main className="containerPage">
      <section className="sectionPad">
        <h1 className="h1">Contact</h1>
        <p className="p muted">
          Tell me a bit about what you’re building, and I’ll reply with next
          steps.
        </p>
      </section>

      <section className="sectionPad">
        <div className="card cardPad">
          <form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div>
                <label className="p" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input mt-2"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="p" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input mt-2"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="p" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="textarea mt-2"
                  placeholder="What do you need help with?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btnPrimary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              {error ? <p className="p muted mt-2">{error}</p> : null}

              {status === "success" ? (
                <div className="mt-2">
                  <p className="p muted">Message ready — I’ll get back to you soon.</p>
                  <button
                    type="button"
                    className="btn btnGhost mt-3"
                    onClick={resetForm}
                  >
                    Send another
                  </button>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}