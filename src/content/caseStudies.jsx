export const caseStudies = [
  {
    slug: "sample-case-study",
    title: "Sample Case Study",
    summary: "A short one-liner about the project and why it mattered.",
    pill: "Case Study",
    role: "Design + Front-End",
    stack: ["React", "Vite", "Tailwind"],
    outcome: "Clear outcome statement (e.g., improved conversion, faster launch).",
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
