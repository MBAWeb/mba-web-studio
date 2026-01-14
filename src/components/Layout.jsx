import { BrandMark } from "./BrandMark";

export function Layout({ children }) {
  return (
    <div className="min-h-dvh">
      <header className="navBar">
        <div className="containerPage h-16 flex items-center justify-between">
          <BrandMark />
          <nav className="flex items-center gap-6">
            <a className="navLink" href="#work">Work</a>
            <a className="navLink" href="#services">Services</a>
            <a className="navLink" href="#contact">Contact</a>
            <button className="btnPrimary">Start a project</button>
          </nav>
        </div>
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
