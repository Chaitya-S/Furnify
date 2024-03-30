import ProductCard from "./ProductCard";

export default function Grid({ products }) {
  //TEMPORARY DATA FETCHING DONE BROTHER
  // (#reply) OK BROTHER🫡

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
