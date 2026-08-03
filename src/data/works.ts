export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
};

export const works: Work[] = [
  {
    title: "Evergreen Money",
    description:
      "Digital edition of CEO Bill Harris's book, built in Plasmic and shipped in time with the product launch",
    year: "2024",
    role: "Web Developer",
    tags: ["Plasmic", "Web", "Publishing"],
    image: "/assets/images/section/work-1.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "The Creatorie",
    description:
      "Claude-powered refactoring systems that modernize SaaS codebases with AI-driven automation",
    year: "2025",
    role: "Founder & Engineer",
    tags: ["AI", "SaaS", "Automation"],
    image: "/assets/images/section/work-2.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "MDM Design Studio",
    description:
      "Full brand, marketing, and web ownership for a working design studio — online and in print",
    year: "2022",
    role: "Creative Director",
    tags: ["Brand", "Web", "Print"],
    image: "/assets/images/section/work-3.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
];
