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
    title: "Web Development",
    description:
      "Full-stack builds from scratch or on any platform — Plasmic, WordPress, Shopify, Wix, Webflow, Squarespace, or standalone on GitHub. Recent work includes a 200+ page fintech site built alongside its CEO.",
    tags: ["Full-Stack", "Any Platform", "AI Integration"],
    images: ["/assets/images/section/service-1.jpg", "/assets/images/section/service-2.jpg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "Marketing & Advertising",
    description:
      "Print and digital campaigns for national brands and local businesses alike — email blasts, paid social, pitch decks, and trade show materials, with SEO built in from the start.",
    tags: ["Campaigns", "Email", "SEO"],
    images: ["/assets/images/section/service-3.jpg", "/assets/images/section/service-4.jpg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Brand & Creative Direction",
    description:
      "Identity systems that carry from screen to print — logos, collateral, social content, and brand photography shot and produced in-house.",
    tags: ["Identity", "Social", "Photography"],
    images: ["/assets/images/section/service-5.jpg", "/assets/images/section/service-6.jpg"],
    expanded: false,
  },
];
