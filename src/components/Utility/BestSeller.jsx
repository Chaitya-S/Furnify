import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BestSellerGrid from "./BestSellerGrid";

export default async function BestSeller() {
  const products =
    await client.fetch(groq`*[_type == "product" && bestseller == true] {
      _id,
      image,
      name,
      price,
  }`);

  return <BestSellerGrid products={products} />;
}
