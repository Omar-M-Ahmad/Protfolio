import type { ProjectItem } from "@/types/portfolio";

export const projectDefinitions: Array<
  Pick<ProjectItem, "id" | "number" | "tech" | "visualVariant" | "liveUrl">
> = [
  {
    id: "oraxFlow",
    number: "01",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Workflow Design",
      "AI Integrations",
    ],
    visualVariant: "saas",
    liveUrl: "https://github.com/Omar-M-Ahmad/ORAX-Media.git",
  },
  {
    id: "oraxFree",
    number: "02",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "UI System"],
    visualVariant: "saas",
    liveUrl: "https://orax-free.vercel.app/",
  },
  {
    id: "luminaFlow",
    number: "03",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Content Workflow",
      "Netlify",
    ],
    visualVariant: "saas",
    liveUrl: "https://lumina-flow.netlify.app/",
  },

  {
    id: "multiVendorPlatform",
    number: "04",
    tech: ["Laravel", "PHP", "Stripe", "MySQL", "Livewire", "TailwindCSS"],
    visualVariant: "marketplace",
  },
  {
    id: "saasInvoicingPlatform",
    number: "05",
    tech: ["Laravel", "Filament", "MySQL", "Queues", "PDF", "Multi-tenant"],
    visualVariant: "saas",
  },
];
