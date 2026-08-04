export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "AI Integration",
    duty: "Claude-powered builds & automation",
    image: { light: "/assets/images/section/tech-1.svg", width: 19, height: 28 },
    progress: 95,
  },
  {
    name: "Full-Stack Development",
    duty: "11+ languages mastered",
    image: {
      light: "/assets/images/section/tech-2.svg",
      dark: "/assets/images/section/tech-2_dark.svg",
      width: 18,
      height: 28,
    },
    progress: 90,
  },
  {
    name: "GitHub & Agile/Scrum",
    duty: "Version control & sprint workflows",
    image: { light: "/assets/images/section/tech-3.svg", width: 29, height: 28 },
    progress: 90,
  },
];
