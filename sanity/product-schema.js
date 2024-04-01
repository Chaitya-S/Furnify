import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "splineurl",
      title: "SplineURL",
      type: "url",
    },
    {
      name: "bestseller",
      title: "Best Seller",
      type: "boolean",
    },
  ],
});

export const Images = defineType({
  name: "images",
  title: "Home Page Carousel Images",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
});

export const Reviews = defineType({
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    {
      name: "userimage",
      title: "User Image",
      type: "url",
    },
    {
      name: "productid",
      title: "Product Id",
      type: "string",
    },
    {
      name: "message",
      title: "Review",
      type: "string",
    },
  ],
});
