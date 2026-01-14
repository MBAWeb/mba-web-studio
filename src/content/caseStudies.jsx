export const caseStudies = [
  {
    slug: "sample-case-study",
    title: "Sample Case Study",
    summary: "A short one-liner about the project and why it mattered.",
    pill: "Case Study",
    role: "Design + Front-End",
    stack: ["React", "Vite", "Tailwind"],
    outcome: "Clear outcome statement (e.g., improved conversion, faster launch).",

    challenges: [
      "Challenge 1 placeholder — replace with a real constraint you faced.",
      "Challenge 2 placeholder — replace with something concrete (scope, time, tooling, alignment).",
    ],
    learnings: [
      "Learning 1 placeholder — replace with a real takeaway (process, design, implementation).",
      "Learning 2 placeholder — replace with what you’d repeat or improve next time.",
    ],

    media: [
      {
        id: "shot-1",
        kind: "full",
        alt: "Homepage hero and primary CTA",
        caption: "Hero layout and CTA hierarchy (placeholder for future screenshot).",
        src: "", // leave empty for now
      },
    ],



    sections: [
      {
        heading: "Overview",
        body:
          "What the project was, who it was for, and what success looked like."
      },
      {
        heading: "Approach",
        body:
          "Your process: discovery, structure, build, iteration, and polish."
      },
      {
        heading: "Results",
        body:
          "Measured or qualitative results. Keep it concrete and scannable."
      }
    ]
  }
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
