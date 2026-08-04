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
    title: "LOUD Collective",
    description:
      "Cannabis lifestyle e-commerce — smoke gear, apparel, and CBD on a fully compliant storefront",
    year: "2020",
    role: "Design & Development",
    tags: ["E-Commerce", "Cannabis", "Compliance"],
    image: "/assets/images/section/godwin-work-1.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Plant Buddies",
    description:
      "Home grow kits and LA's cannabis relief program — ordering, free delivery, and installation",
    year: "2020",
    role: "Design & Development",
    tags: ["Wix", "E-Commerce", "Cannabis"],
    image: "/assets/images/section/godwin-work-2.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Cymantix Spatial Design",
    description:
      "Portfolio for an immersive lighting and projection studio — video-rich, cinematic, and dark",
    year: "2025",
    role: "Design & Development",
    tags: ["Portfolio", "Motion", "Custom Build"],
    image: "/assets/images/section/godwin-work-3.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Order of the Fire",
    description:
      "Fire performance troupe site built to book shows — dancers, breathers, and a full cast of acts",
    year: "2024",
    role: "Design & Development",
    tags: ["Brand", "Booking", "Showcase"],
    image: "/assets/images/section/godwin-work-4.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Pole Fitness Studio",
    description:
      "Class and party booking for a Vegas pole fitness studio — 30+ instructors, every level welcome",
    year: "2023",
    role: "Design & Development",
    tags: ["Booking", "Brand", "Marketing"],
    image: "/assets/images/section/godwin-work-5.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
];
