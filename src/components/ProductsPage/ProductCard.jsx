"use client";

import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../CartContext";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const {
    addToCart,
    cart,
    incrementQuantity,
    removeFromCart,
    decrementQuantity,
  } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isInCart = cart.some((item) => {
      if (item.quantity > 0 && item._id === product._id) {
        return true;
      }
      return false;
    });
    setIsAdded(isInCart);
  });

  const handleAddToCart = () => {
    addToCart(product);
    console.log("ADD TO CART CLICKED AND NOW CART IS");
    console.log(cart);
  };

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
          {isAdded ? (
            <div>
              <button
                onClick={() => {
                  incrementQuantity(product._id);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  decrementQuantity(product._id);
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className="bg-[#553939] hover:bg-[#0BB489] hover:border-[#0BB489] border-secondary rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-yellow-600"
            >
              <span className="mr-[10px]">
                <FaCartPlus />
              </span>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
