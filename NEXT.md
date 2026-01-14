# NEXT

This file tracks intentional next steps for the MBA Web Studio site.
Only resume work deliberately from here.

---

## ✅ Completed Milestones

- Vite + React scaffold
- Tailwind CSS with semantic `@layer components`
- Brand color system
- `globals.css` cleaned and stabilized
- SCSS `tokens.scss` added (standby)
- Layout wrapper with header/footer
- BrandMark component (micro + animated)
- React Router (Home / Work / Services / Contact)
- Active nav links (`NavLink`)
- Mobile navigation
- Services page (content complete)
- Contact page
  - Controlled inputs
  - Validation and submit states
  - Success feedback
  - Accessible input styling
- Work page
  - Data-driven from case study source
  - Clean card layout
  - CTA routing wired
- Case study detail pages
  - Dynamic route (`/work/:slug`)
  - Not-found handling
  - Back navigation
  - Role / Stack / Outcome sections
- Repo stabilized
  - Import/export consistency
  - File casing issues resolved

---

## 🧠 Current State

- One real case study is intentionally displayed
- Content is static and data-driven (no backend)
- Architecture supports future scaling without refactor
- Site is stable, readable, and intentional

---

## 🔜 Next Options (Pick One)

### Option 1 — Case Study Polish
- Improve typography rhythm on detail pages
- Add optional sections (Challenges, Learnings)
- Prepare layout for future screenshots/images

### Option 2 — Component Extraction
- Extract reusable `<ProjectCard />`
- Extract form input components (optional)
- Reduce JSX repetition

### Option 3 — Home Page Refinement
- Feature the case study more prominently
- Tighten narrative and CTA flow
- Remove any remaining placeholder copy

### Option 4 — UI / UX & Accessibility
- Hover and focus polish on cards
- Keyboard and focus accessibility pass
- Mobile navigation animation refinement

### Option 5 — SEO & Metadata
- Per-route titles and meta descriptions
- Open Graph defaults
- Social preview polish

---

## 🚫 Explicitly Out of Scope (For Now)

- Backend or CMS integration
- Multiple placeholder case studies
- Blog system
- Premature optimization

---

## 🔒 Locked-In Decisions

- Tailwind is used **semantically**, not utility-heavy
- JSX remains clean and readable
- Layout and routing stay centralized
- Naming changes only when clearly beneficial

---

## Notes for Future Me

- Project is stable — avoid feature creep
- Favor intentional content over filler
- Resume work deliberately
