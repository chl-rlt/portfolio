export type Project = {
  id: string;
  name: string;
  repo: string;
  date: string;
  descriptionTitle: string;
  description: string;
  imageOptions: {
    key: string;
    value: string;
  }[];
  images: {
    key: string;
    device: string;
    h: string;
    w: string;
    url: string;
  }[];
  stack: {
    key: string;
    name: string;
    type: string;
  }[];
};
