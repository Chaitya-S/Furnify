import Link from "next/link";
import ProductCard from "./ProductCard";

export default function Grid({ products }) {
  //TEMPORARY DATA FETCHING DONE BROTHER

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
