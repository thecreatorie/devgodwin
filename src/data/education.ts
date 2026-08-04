export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2024 - Now",
    role: "Independent Developer & AI Engineer — The Creatorie",
    description:
      "Building Claude-powered refactoring systems for SaaS platforms and shipping end-to-end web products for clients worldwide.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
  {
    period: "2023 - 2024",
    role: "Web Developer — Evergreen Money",
    description:
      "Built the digital edition of CEO Bill Harris's book in Plasmic, delivered in lockstep with a major product launch.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2018 - 2023",
    role: "Full-Stack Developer & Creative Director — Independent",
    description:
      "Owned design, development, and brand for clients in high-compliance industries — cannabis and adult entertainment — plus MDM Design Studio and a pole fitness studio, across web and print.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "2016 - 2018",
    role: "Developer & Designer — PatientPop · Meredith · Allergan",
    description:
      "Joined PatientPop in its startup phase and shipped creative work with Meredith for Allergan in Culver City.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
];
