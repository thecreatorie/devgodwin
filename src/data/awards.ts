export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  { name: "UA Scholar Award", publisher: "The University of Alabama", year: 2011, image: "/assets/images/section/award-1.jpg" },
  { name: "Alumni Scholar Award", publisher: "The University of Alabama", year: 2011, image: "/assets/images/section/award-2.jpg" },
  { name: "Alumni Heritage Award", publisher: "The University of Alabama", year: 2011, image: "/assets/images/section/award-3.jpg" },
  { name: "Engineering Leadership Award", publisher: "UA College of Engineering", year: 2014, image: "/assets/images/section/award-4.jpg" },
  { name: "Engineering President Cabinet Scholarship", publisher: "UA College of Engineering", year: 2014, image: "/assets/images/section/award-5.jpg" },
];
