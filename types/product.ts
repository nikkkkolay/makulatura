export type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

export type ImageData = {
  id: number;
  url: string;
  formats: {
    small?: ImageFormat;
    thumbnail?: ImageFormat;
    [key: string]: ImageFormat | undefined;
  };
};

export type Product = {
  id: number;
  documentId: string;
  name: string;
  type: "sticker" | "vertical-card" | "horizontal-card";
  description: string;
  ozonLink: string;
  image: ImageData[];
};

export type ProductResponse = {
  data: Product[];
};
