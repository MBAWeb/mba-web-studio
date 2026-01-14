import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BrandMark } from "./BrandMark";


export function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh">
      <header className="navBar">
  <div className="containerPage h-16 flex items-center justify-between">
    <BrandMark />

    {/* Desktop nav */}
    <nav className="hidden md:flex items-center gap-6">
      <NavLink className={({ isActive }) => `navLink ${isActive ? "navLinkActive" : ""}`} to="/work">
        Work
      </NavLink>
      <NavLink className={({ isActive }) => `navLink ${isActive ? "navLinkActive" : ""}`} to="/services">
        Services
      </NavLink>
      <NavLink className={({ isActive }) => `navLink ${isActive ? "navLinkActive" : ""}`} to="/contact">
        Contact
      </NavLink>
      <button className="btnPrimary" type="button">Start a project</button>
    </nav>

    {/* Mobile toggle */}
    <button
      className="btnGhost md:hidden"
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-label="Toggle menu"
    >
      Menu
    </button>
  </div>

  {/* Mobile panel */}
  {open && (
    <div className="md:hidden">
      <div className="containerPage pb-4">
        <div className="card cardPad">
          <div className="grid gap-2">
            <NavLink
              to="/work"
              className="navLink navLinkBlock"
              onClick={() => setOpen(false)}
            >
              Work
            </NavLink>
            <NavLink
              to="/services"
              className="navLink navLinkBlock"
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="navLink navLinkBlock"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <button
              className="btnPrimary mt-2 w-full"
              type="button"
              onClick={() => setOpen(false)}
            >
              Start a project
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</header>


      <main>{children}</main>

      <footer className="py-10">
        <div className="containerPage flex items-center justify-between">
          <BrandMark variant="micro" />
          <span className="muted">© {new Date().getFullYear()} MBA Web Studio</span>
        </div>
      </footer>
    </div>
  );
}
