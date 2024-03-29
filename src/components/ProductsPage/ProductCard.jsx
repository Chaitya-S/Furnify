import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#dac0a3] w-full max-w-sm bg-[#on] border border-gray-200 rounded-lg shadow">
      {/* <img
        className="p-8 rounded-t-lg "
        src="/docs/images/products/apple-watch.png "
        alt="product image "
      /> */}
      <div className="px-5 pb-5">
        <Link href={`/products/${product.slug}`}>
          <h5 className="text-2xl md:text-3xl font-semibold tracking-tight text-black ">
            {product.name}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <Link href={`/products/${product.slug}`}>
            <p className="text-xl md:text-2xl font-semibold tracking-tight text-black ">
              ₹{product.price}
            </p>
          </Link>
          <button className="bg-[#553939] border-secondary rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
            <span className="mr-[10px]">
              <FaCartPlus />
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
