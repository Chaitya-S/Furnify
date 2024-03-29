import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a> */}
        <div className="px-5 pb-5">
          <Link href={`/products/${product.slug}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </Link>
          <div className="flex items-cener justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>

            {/* ADD A BUTTON HERE PATELL!!!!! FOR ADD TO CART */}
          </div>
        </div>
      </div>
    </>
  );
}
