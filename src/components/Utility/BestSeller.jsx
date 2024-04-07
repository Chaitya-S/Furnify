import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BestSellerGrid from "./BestSellerGrid";

export default async function BestSeller() {
  const products = await client.fetch(groq`*[_type == "images"] {
      _id,
      image,
      name,
      price,
      slug,
  }`);

  return <BestSellerGrid products={products} />;
}
