"use client";

import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { ivymode, montserrat } from "@/Fonts/FontMan";
import { SignedIn } from "@clerk/nextjs";
import AddToCartButton from "../Utility/AddToCartButton";
import { useCart } from "../CartContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const { removeFromCart } = useCart();

  return (
    <div className="bg-[#dac0a3] w-full max-w-sm border border-[#dac0a3] rounded-lg shadow-lgs hover:shadow-2xl">
      <div
        style={{ height: "360px", width: "100%" }}
        className="flex justify-center items-center shadow-md"
      >
        <img
          src={urlForImage(product.image)}
          style={{ height: "90%", width: "90%", objectFit: "fill" }}
        />
      </div>
      <div className="mt-3 px-5 pb-5">
        <Link href={`/products/${product.slug}`}>
          <h5
            className={`text-2xl md:text-3xl tracking-tight text-[#553939] ${ivymode}`}
          >
            {product.name}
          </h5>
        </Link>
        <div className={`flex items-center justify-between ${montserrat}`}>
          <Link href={`/products/${product.slug}`}>
            <p className="text-lg md:text-2xl font-semibold tracking-tight text-[#553939] ">
              ₹{product.price}
            </p>
          </Link>
          <SignedIn>
            <AddToCartButton
              isAdded={isAdded}
              setIsAdded={setIsAdded}
              product={product}
            />
          </SignedIn>
        </div>
        {isAdded && (
          <button
            className={`self-end mt-2 px-2 ${montserrat} text-md text-[#553939] border-2 rounded-lg border-[#553939] hover:bg-[#eadbc8]`}
            onClick={() => {
              toast.success(`${product.name} removed from cart`);
              removeFromCart(product._id);
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
