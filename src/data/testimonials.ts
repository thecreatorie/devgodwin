export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

// Five-star client reviews for MDM Design Studio, styled by Caroline as social
// content over the studio's own project photography.
export const testimonials: Testimonial[] = [
  {
    text: "Fantastic artisan and a good person. If you want the best call this guy.",
    authorName: "Vance",
    authorRole: "MDM Design Studio client",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    text: "Michael and his crew are the best I know. If you can think of it, Michael can find a way to make it. I've worked with him and his team on several projects and have been happy with the results every time.",
    authorName: "Peter",
    authorRole: "MDM Design Studio client",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    text: "The work was done and installed very quickly and absolutely exactly what I had envisioned. I highly recommend them.",
    authorName: "Jennifer",
    authorRole: "MDM Design Studio client",
    image: "/assets/images/section/tes-3.jpg",
  },
];
