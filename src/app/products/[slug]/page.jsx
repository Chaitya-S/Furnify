"use client";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import SplineCard from "@/components/ProductsPage/SplineCard";
import AddToCartButton from "@/components/Utility/AddToCartButton";
import { ivymode, montserrat } from "@/Fonts/FontMan";
import Reviews from "@/components/ProductsPage/Reviews";
import AddReview from "@/components/ProductsPage/AddReview";
import ProductInfo from "@/components/ProductsPage/ProductInfo";

async function getData(params) {
  const p =
    await client.fetch(groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
  _id,
  name, 
  price,
  splineurl,
  image,
  description,
  category,
  "slug" : slug.current,
  colors,
  }`);

  const allreviews = await client.fetch(
    groq`*[_type == "reviews" && productslug == "${params.slug}"] {
      _id,
      username,
      userimage, 
      message,
    }`
  );

  return { p, allreviews };
}

export default async function Product({ params }) {
  const { p, allreviews } = await getData(params);

  return (
    <>
      <div>
        <div className="grid grid-flow-row md:grid-cols-3 justify-items-center min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] gap-4 items-center pt-6 text-black mb-6 ml-6">
          <SplineCard url={p.splineurl} />
          <ProductInfo p={p} />
        </div>
        <p className={`${montserrat} text-[#553939] text-center text-2xl mb-3`}>
          Description
        </p>
        <p
          className={`${montserrat} text-center text-lg self-center p-4 mx-7 pb-9 md:mx-10 text-[#553939]`}
        >
          {p.description}
        </p>
      </div>
      {/* <AddReview slug={p.slug} /> */}
      <Reviews allreviews={allreviews} slug={p.slug} />
    </>
  );
}
