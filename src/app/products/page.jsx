import FilterBar from "@/components/ProductsPage/FilterBar";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Grid from "@/components/ProductsPage/Grid";
// import ProductCard from "/src/components/ProductsPage/ProductCard"

export default async function Products({ searchParams }) {
  const { category } = searchParams;
  const productFilter = `_type == "product"`;

  let categoryFilter = "";
  if (category != "" && category != "all") {
    categoryFilter = ` && category == "${category}"`;
  }

  const filter = `*[${productFilter}${categoryFilter}]`;
  const products = await client.fetch(groq`${filter} {
    _id,
    name, 
    price,
    "slug": slug.current,
    splineurl,
    category
  }`);

  // can use products.length to show total products on the respective filter.
  return (
    <>
      <div className="flex-col">
        <FilterBar />
        <Grid products={products} />
      </div>
    </>
  );
}
