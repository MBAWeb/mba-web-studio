export const caseStudies = [
  {
    slug: "sample-case-study",
    title: "MBA Web Studio — Portfolio Site",
    summary:
      "A fast, intentional portfolio build designed to showcase services and case studies with a clean, scalable structure.",
    pill: "Case Study",
    role: "Design + Front-End",
    stack: ["React", "Vite", "Tailwind", "React Router"],
    outcome:
      "Shipped a responsive, data-driven portfolio foundation that supports scalable case studies and future media without adding backend complexity.",

    challenges: [
      "Balance polish with speed: keep the UI professional without overbuilding components.",
      "Design a case study system that scales (routing, layout, content model) while staying simple and maintainable.",
    ],
    learnings: [
      "Semantic Tailwind component layers keep JSX clean while preserving consistent UI patterns.",
      "A small, thoughtful content model (sections + optional reflection/media) prevents redesign later when real work is added.",
    ],

    media: [
      {
        id: "shot-1",
        kind: "full",
        alt: "Case study page media slot placeholder",
        caption:
          "Media-ready slot for future screenshots (kept optional so content can ship without assets).",
        src: "",
      },
    ],

    sections: [
      {
        heading: "Overview",
        body:
          "The goal was to create a lightweight studio site with clear service positioning and a case study system that feels intentional—even with minimal content. The site needed to be responsive, easy to extend, and focused on clarity over flash."
      },
      {
        heading: "Approach",
        body:
          "Built a Vite + React SPA with React Router, a shared Layout wrapper, and data-driven Work/Case Study pages. Established semantic Tailwind component layers (buttons, cards, navigation, typography) to keep markup readable and consistent across pages."
      },
      {
        heading: "Results",
        body:
          "Delivered a clean, navigable portfolio foundation with dynamic case study routes, optional reflection sections (Challenges/Learnings), and prepared media slots for screenshots. The structure supports adding real work quickly without introducing a backend or CMS."
      }
    ]
  },

  {
    slug: "client-intake-ux",
    title: "Client Intake UX — Lightweight Lead Flow",
    summary:
      "A simple, conversion-focused intake experience that collects the right details without overwhelming the user.",
    pill: "Case Study",
    role: "UX + Front-End",
    stack: ["React", "Vite", "Tailwind"],
    outcome:
      "Improved clarity and completion by simplifying the flow, tightening copy, and validating inputs with friendly feedback states.",

    challenges: [
      "Keep the form short while still gathering actionable project details.",
      "Design feedback states that feel calm and helpful, not punitive.",
    ],
    learnings: [
      "Small UX improvements (labels, grouping, progressive disclosure) can outperform added features.",
      "Clear success/error states reduce uncertainty and increase trust during submissions.",
    ],

    media: [
      {
        id: "shot-1",
        kind: "full",
        alt: "Intake flow placeholder media slot",
        caption:
          "Reserved space for a form flow screenshot (kept optional while content is finalized).",
        src: "",
      },
    ],

    sections: [
      {
        heading: "Overview",
        body:
          "This project focused on turning a generic contact form into a lightweight intake flow. The goal was to reduce friction while collecting the essentials needed to scope a project and respond quickly."
      },
      {
        heading: "Approach",
        body:
          "Outlined the minimum information needed for a useful first reply, then grouped fields into a clear order. Implemented straightforward validation and friendly messaging, keeping the UI consistent with the site’s semantic Tailwind components."
      },
      {
        heading: "Results",
        body:
          "The intake flow reads faster, feels more confident, and provides better details for follow-up. The structure is reusable for future projects and can expand into multi-step onboarding without reworking the design system."
      }
    ]
  }
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
