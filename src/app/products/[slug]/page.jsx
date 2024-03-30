"use client";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import SplineCard from "@/components/ProductsPage/SplineCard";

async function getData(params) {
  const p =
    await client.fetch(groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
  _id,
  name, 
  price,
  splineurl,
  image,
  description,
  category
  }`);

  return p;
}

export default async function Product({ params }) {
  const product = await getData(params);

  return (
    <div className="grid justify-items-center gap-4">
      <SplineCard url={product.splineurl} />
    </div>
  );
}
