"use client";

import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../CartContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { ivymode, montserrat } from "@/Fonts/FontMan";
import { SignedIn } from "@clerk/nextjs";

export default function ProductCard({ product }) {
  const { addToCart, cart, incrementQuantity, decrementQuantity, getQuantity } =
    useCart();
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
    <div className="bg-[#dac0a3] w-full max-w-sm bg-[#on] border border-[#dac0a3] rounded-lg shadow-lg">
      {/* <Image src={urlForImage(product.image)} width={300} height={450} /> */}
      <div className="mt-2 px-5 pb-5">
        <Link href={`/products/${product.slug}`}>
          <h5
            className={`text-2xl md:text-3xl tracking-tight text-black ${ivymode}`}
          >
            {product.name}
          </h5>
        </Link>
        <div className={`flex items-center justify-between ${montserrat}`}>
          <Link href={`/products/${product.slug}`}>
            <p className="text-lg md:text-2xl font-semibold tracking-tight text-black ">
              ₹{product.price}
            </p>
          </Link>
          <SignedIn>
            {isAdded ? (
              <div className="flex flex-row gap-3 justify-around items-center">
                <button
                  className="bg-blue-600 text-base hover:bg-[#0BB489] hover:border-[#0BB489] border-secondary rounded-md py-2 px-3 text-center font-medium text-black"
                  onClick={() => {
                    incrementQuantity(product._id);
                  }}
                >
                  +
                </button>
                <div className="text-xl text-black">{getQuantity(product)}</div>
                <button
                  className="bg-red-700 text-base hover:bg-[#0BB489] hover:border-[#0BB489] border-secondary rounded-md py-2 px-3 text-center font-medium text-black"
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
                className="bg-[#553939] hover:bg-[#704f4f] hover:text-[#eadbc8] border-secondary rounded-md inline-flex items-center justify-center py-2 px-7 text-center text-base font-medium text-[#dac0a3]"
              >
                <span className="mr-[10px]">
                  <FaCartPlus />
                </span>
                Add To Cart
              </button>
            )}
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
