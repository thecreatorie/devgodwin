export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "Claude Refactoring Systems", publisher: "The Creatorie", year: 2025, image: "/assets/images/section/award-1.jpg" },
  { name: "Digital Book Launch", publisher: "Evergreen Money", year: 2024, image: "/assets/images/section/award-2.jpg" },
  { name: "Full Brand Ownership", publisher: "MDM Design Studio", year: 2022, image: "/assets/images/section/award-3.jpg" },
  { name: "National Brand Creative", publisher: "Meredith · Allergan", year: 2018, image: "/assets/images/section/award-4.jpg" },
  { name: "Growth-Stage Platform", publisher: "PatientPop", year: 2017, image: "/assets/images/section/award-5.jpg" },
];
