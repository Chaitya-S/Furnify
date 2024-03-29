import FilterBar from "@/components/ProductsPage/FilterBar";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Grid from "@/components/ProductsPage/Grid";

export default async function Products() {
  const products = await client.fetch(groq`*[_type == "product"] {
    _id,
    _createdAt,
    name, 
    sku, 
    price,
    "slug": slug.current,
    splineurl,
    category
  }`);

  // can use products.length to show total products on the respective filter.
  return (
    <>
      {/* <FilterBar /> */}
      <Grid products={products} />
    </>
  );
}
