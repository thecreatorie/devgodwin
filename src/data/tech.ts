export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "React & Next.js",
    duty: "Full-stack web apps",
    image: { light: "/assets/images/section/tech-1.svg", width: 19, height: 28 },
    progress: 90,
  },
  {
    name: "Claude & AI Tooling",
    duty: "Agentic refactoring systems",
    image: {
      light: "/assets/images/section/tech-2.svg",
      dark: "/assets/images/section/tech-2_dark.svg",
      width: 18,
      height: 28,
    },
    progress: 95,
  },
  {
    name: "Plasmic & No-Code",
    duty: "Rapid visual builds",
    image: { light: "/assets/images/section/tech-3.svg", width: 29, height: 28 },
    progress: 85,
  },
];
