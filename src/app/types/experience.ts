export type Experience = {
  logo: Logo;
  title: string;
  link: string;
  description: string;
  tech: string[];
  role: string;
  date: string;
  subItems?: {
    title: string;
    role?: string;
    description: string;
    date: string;
    tech?: string[];
    link?: string;
    isPromotion?: boolean;
  }[];
};
type Logo = {
  key: string;
  device: string;
  h: string;
  w: string;
  url: string;
};
