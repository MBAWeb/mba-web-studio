# MBA Web Studio

MBA Web Studio is a modern React + Vite project built step-by-step with a focus on
clean architecture, reusable styling, and professional frontend patterns.

This project emphasizes:
- semantic Tailwind CSS (via `@layer components`)
- clean JSX (no utility soup)
- scalable layout and routing
- brand-driven design tokens

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
  - semantic component classes
  - brand color system
- **React Router**
- **Sass (SCSS)** – standby for future theming
- **Git + GitHub**

---

## Project Structure

```text
src/
├─ components/
│  ├─ Layout.jsx        # Global layout (header, footer, nav)
│  └─ BrandMark.jsx     # Logo / brand component (micro + animated)
│
├─ pages/
│  ├─ Home.jsx
│  ├─ Work.jsx
│  ├─ Services.jsx
│  └─ Contact.jsx
│
├─ styles/
│  └─ tokens.scss       # Brand tokens (SCSS standby)
│
├─ globals.css          # Tailwind layers + semantic classes
├─ App.jsx              # Router + layout wiring
└─ main.jsx             # App entry point