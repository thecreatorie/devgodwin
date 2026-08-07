export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "2024 - 2025",
    role: "Web Developer — Evergreen Money",
    description:
      "Built the digital edition of CEO Bill Harris's book in Plasmic and shipped the high-yield checking site in lockstep with the fintech product launch.",
    icon: { light: "/assets/images/logo/logo-3.svg", dark: "/assets/images/logo/logo-4.svg", width: 32, height: 32 },
  },
  {
    period: "2017 - Now",
    role: "Creative Director — The Creatorie · MDM Design Studio · FACET",
    description:
      "Every decision on brand, marketing, and creative development for independent clients — responsive websites, print and web collateral, social and search marketing, and brand photography.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2017 - 2018",
    role: "Designer — Meredith Xcelerated Marketing",
    description:
      "Digital and print design on the Allergan account — BOTOX and Juvéderm — plus Acuvue, Art Van, Bob Evans, and Sun-Maid, including three major website redesigns with the UX team.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "2016 - 2017",
    role: "Web Designer — PatientPop",
    description:
      "Designed layouts and custom graphics for 100+ responsive medical websites on a custom Bootstrap CMS, with SEO best practices and top Google Pagespeed scores.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
  {
    period: "2014 - 2016",
    role: "Web Developer & Graphic Designer — Center for Advanced Public Safety",
    description:
      "Responsive WordPress builds for Alabama state agencies — abn.alabama.gov, atlasalabama.gov, safehomealabama.gov, and more — plus a TicketCity design internship with infographics featured on ESPN.com and CBSSports.com.",
    icon: { light: "/assets/images/item/edu-3.svg", dark: "/assets/images/item/edu-3_dark.svg", width: 120, height: 32 },
  },
  {
    period: "2011 - 2016",
    role: "The University of Alabama",
    description:
      "Bachelor's in Media with a Computer Science minor. UA Scholar, Alumni Scholar, Alumni Heritage, and Engineering Leadership awards, plus ISSA certifications in personal training and fitness nutrition.",
    icon: { light: "/assets/images/item/edu-2.svg", dark: "/assets/images/item/edu-2_dark.svg", width: 29, height: 32 },
  },
];
