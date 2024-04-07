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
      name: "colors",
      title: "Colours",
      type: "array",
      of: [{ type: "string" }],
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
  title: "Bestseller",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "slug",
      title: "Product ka slug",
      type: "slug",
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
      name: "productslug",
      title: "Product Slug",
      type: "string",
    },
    {
      name: "message",
      title: "Review",
      type: "string",
    },
  ],
});
