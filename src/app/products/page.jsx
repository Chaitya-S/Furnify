import FilterSearchBar from "@/components/ProductsPage/FilterSearchBar";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import Grid from "@/components/ProductsPage/Grid";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

export default async function Products({ searchParams }) {
  const { category, search } = searchParams;
  const productFilter = `_type == "product"`;

  const categoryFilter =
    category && category != undefined && category != "all"
      ? ` && category == "${category}"`
      : "";

  const searchFilter = search ? ` && name match "${search}"` : "";
  const filter = `*[${productFilter}${categoryFilter}${searchFilter}]`;
  const products = await client.fetch(groq`${filter} {
    _id,
    name, 
    price,
    "slug": slug.current,
    splineurl,
    image,
    category
  }`);

  // can use products.length to show total products on the respective filter.

  return (
    <>
      <div className="flex-col bg-[#f8f0e5] w-full">
        <FilterSearchBar />
        <Grid products={products} />
      </div>
    </>
  );
}
