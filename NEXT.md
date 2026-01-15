# NEXT.md — MBA Web Studio

This document tracks post-v1 improvements and future enhancements.
v1 is complete, deployed, and stable.

Nothing in this file is required immediately.
Items are intentionally grouped by priority and scope.

---

## Phase 2 — Content & Case Studies (Highest Priority)

### Add real case studies
- Replace placeholder content with real project data
- Ensure each case study includes:
  - Clear problem statement
  - Constraints & tradeoffs
  - Outcome (quantitative if possible)

### Featured Case Study pattern
- One featured case study on Home
- Larger card variant with:
  - Image / screenshot
  - Short summary
  - Clear CTA

### Media support
- Add screenshots to case studies
- Support:
  - Full-width media
  - Inset media
  - Captions
- Lazy-load images

---

## Phase 3 — Design & UX Polish

### Micro-interactions
- Subtle hover transitions on cards
- Optional:
  - Focus states
  - Reduced-motion support

### Visual hierarchy refinements
- Refine spacing rhythm between sections
- Optional gradient dividers between major sections

### Theming improvements (optional)
- Light mode experiment
- Or multiple accent themes (future-proof tokens already exist)

---

## Phase 4 — SEO & Sharing (Optional)

### Metadata improvements
- Per-route `<title>` and `<meta description>`
- Open Graph tags for social sharing
- Twitter card support

### Structured data
- Basic schema.org:
  - Person or Organization
  - Website

---

## Phase 5 — DX & Maintainability

### Content organization
- Consider moving case studies to:
  - Markdown, or
  - A separate data layer

### Utilities
- Small helpers for:
  - Slug generation
  - Route metadata
  - Image handling

### Testing (only if needed)
- Basic smoke tests for routes
- Not required unless site grows

---

## Explicitly Out of Scope (for now)

- Redux / global state
- Backend / CMS
- Authentication
- Animations libraries
- Overly complex build tooling

---

## Guiding Principles

- Ship small
- Design with real content
- Optimize only when necessary
- Keep the codebase understandable at a glance
