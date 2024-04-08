type Work = {
  desc: string;
};

type Section = {
  id: string;
  title: string;
  description: string;
};

type Header = {
  title: string;
  link: string;
  icon: string;
};
type RatingRange = {
  min: number;
  max: number;
};

type Rating = {
  rate: number;
  count: number;
};

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Tech = {
  image: string;
  size: string;
  alt: string;
};

type SocialLinkTypes = {
  id: string;
  link: string;
  icon: string;
};

type SelectItems = {
  label: string;
  sort: string;
};

type ItemCount = {
  start: number;
  end: number;
};

type Pagination = {
  currPage: number;
  perPage: number;
  pageCount: number;
  dataLength: number;
  data: Products[];
  dataRange: ItemCount;
};

type View = "front" | "rear" | "bottom" | "top";

type Image = {
  front: string;
  rear: string;
  bottom: string;
  top: string;
};

declare global {
  interface Navigator {
    msSaveBlob: (blob: Blob, fileName: string) => boolean;
  }

  interface Window {
    stream: MediaStream;
  }
}

export type {
  SelectItems,
  RatingRange,
  Work,
  Section,
  Header,
  Products,
  SocialLinkTypes,
  Tech,
  Pagination,
  Navigator,
  View,
  Image,
};
