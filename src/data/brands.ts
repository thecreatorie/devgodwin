export type Brand = {
  name: string;
  light: string;
  dark: string;
  width: number;
  height: number;
};

export const brands: Brand[] = [
  { name: "Golden Sol Circus", light: "/assets/images/brand/godwin-golden-sol.png", dark: "/assets/images/brand/godwin-golden-sol_dark.png", width: 72, height: 36 },
  { name: "Burlesque To Go", light: "/assets/images/brand/godwin-burlesque.png", dark: "/assets/images/brand/godwin-burlesque_dark.png", width: 113, height: 20 },
  { name: "Flash Fashion", light: "/assets/images/brand/godwin-flash-fashion.png", dark: "/assets/images/brand/godwin-flash-fashion_dark.png", width: 67, height: 34 },
  { name: "MDM Design Studio", light: "/assets/images/brand/godwin-mdm.png", dark: "/assets/images/brand/godwin-mdm_dark.png", width: 40, height: 40 },
  { name: "FACET", light: "/assets/images/brand/godwin-facet.png", dark: "/assets/images/brand/godwin-facet_dark.png", width: 74, height: 28 },
];
