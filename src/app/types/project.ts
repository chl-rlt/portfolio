export type Project = {
  id: string;
  name: string;
  repo: string;
  date: string;
  descriptionTitle: string;
  description: string;
  moreLinks: string;
  websiteLink: string;
  imageOptions: {
    key: string;
    value: string;
  }[];
  images: {
    imgelink: string;
  }[];
  stack: {
    key: string;
    name: string;
    type: string;
  }[];
};
