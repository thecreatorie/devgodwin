export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2018 - Now",
    role: "Owner — The Creatorie",
    description:
      "My marketing agency, focused on website development, branding, marketing, advertising, social media management, and media creation for fintech and B2B technology clients.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
  {
    period: "2023 - 2024",
    role: "Web Developer — Evergreen Money",
    description:
      "Worked alongside CEO Bill Harris to design and develop evergreenmoney.com — a 200+ page site — and built the design workflow for the team using Plasmic, Figma, GitHub, Linear, and Photoshop.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2017 - 2018",
    role: "Designer, Allergan Account — MXM",
    description:
      "Marketing materials for Allergan brands including BOTOX, Juvéderm, and Brilliant Distinctions — print and digital ads, websites, email blasts, custom graphics, and pitch decks.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "2016 - 2017",
    role: "Web Designer — PatientPop",
    description:
      "Designs for hundreds of doctors' practices across the US in a variety of specialties, implementing responsive HTML and CSS, custom graphics, and best SEO practices.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2011 - 2016",
    role: "Computer Science & Digital Media — University of Alabama",
    description:
      "UA Scholar, Alumni Scholar, and Alumni Heritage awards, plus the Engineering Leadership Award and Engineering President Cabinet Scholarship. Also certified as a Personal Trainer & Nutritionist through ISSA.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
];
