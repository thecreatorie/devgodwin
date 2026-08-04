export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean,
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Full-Stack Development",
    description:
      "Eight years shipping products end to end as an independent developer — front-end, back-end, and everything between — including compliance-grade builds for regulated industries.",
    tags: ["Web Apps", "APIs", "Compliance Builds"],
    images: ["/assets/images/section/service-1.jpg", "/assets/images/section/service-2.jpg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "UI/UX & Mobile-First Design",
    description:
      "Interfaces designed mobile-first and built to convert — clean layouts, considered interactions, and experiences that feel effortless on every screen.",
    tags: ["Mobile-First", "Interfaces", "Prototyping"],
    images: ["/assets/images/section/service-3.jpg", "/assets/images/section/service-4.jpg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Brand & Creative Direction",
    description:
      "Cohesive brand systems that carry from screen to print — identity, campaigns, and full marketing ownership like the studio and fitness brands I've run end to end.",
    tags: ["Identity", "Campaigns", "Print"],
    images: ["/assets/images/section/service-5.jpg", "/assets/images/section/service-6.jpg"],
    expanded: false,
  },
];
