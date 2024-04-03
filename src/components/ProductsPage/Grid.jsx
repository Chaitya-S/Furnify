import ProductCard from "./ProductCard";

export default function Grid({ products }) {
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-9 md:mx-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
