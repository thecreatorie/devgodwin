export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

// Placeholder quotes — swap in real client testimonials before launch.
export const testimonials: Testimonial[] = [
  {
    text: "Caroline took our platform from legacy mess to modern stack fast, and the AI-assisted refactoring meant nothing broke along the way.",
    authorName: "SaaS Client",
    authorRole: "Platform Refactor",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    text: "One person handled our brand, our site, and our print campaigns — and all three felt like they came from the same sharp vision.",
    authorName: "Studio Client",
    authorRole: "Brand & Marketing",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    text: "Our industry makes compliance hard. Caroline built us something beautiful that also passed every review we threw at it.",
    authorName: "Regulated-Industry Client",
    authorRole: "Compliance Build",
    image: "/assets/images/section/tes-3.jpg",
  },
];
