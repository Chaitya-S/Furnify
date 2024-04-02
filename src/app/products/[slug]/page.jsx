"use client";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import SplineCard from "@/components/ProductsPage/SplineCard";
import AddToCartButton from "@/components/Utility/AddToCartButton";
import { ivymode, montserrat } from "@/Fonts/FontMan";
import Reviews from "@/components/ProductsPage/Reviews";
import AddReview from "@/components/ProductsPage/AddReview";

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
        <div className="grid grid-flow-row md:grid-cols-3 justify-items-center min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] gap-4 items-center pt-6 text-black mb-6">
          <SplineCard url={p.splineurl} />
          <div
            className={`flex flex-row md:flex-col justify-start ${ivymode} gap-4 my-4 md:my-0`}
          >
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#553939]">
                {p.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-[#553939]">
                ₹{p.price}
              </h2>
            </div>
            <span className="md:my-8"></span>
            <AddToCartButton product={p} />
          </div>
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
