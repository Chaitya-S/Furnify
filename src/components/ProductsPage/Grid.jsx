import Link from "next/link";

export default function Grid({ products }) {
  //TEMPORARY DATA FETCHING DONE BROTHER

  return (
    <>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <Link href={product.splineurl}> SPLINE URL </Link>
        </div>
      ))}
    </>
  );
}
