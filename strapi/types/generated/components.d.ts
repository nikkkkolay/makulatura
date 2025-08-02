import type { Schema, Struct } from "@strapi/strapi";

export interface SeoMetaDate extends Struct.ComponentSchema {
  collectionName: "components_seo_meta_dates";
  info: {
    displayName: "Meta Date";
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<"images", true>;
    metadataBase: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "seo.meta-date": SeoMetaDate;
    }
  }
}
