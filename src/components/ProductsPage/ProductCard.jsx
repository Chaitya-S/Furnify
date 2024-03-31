"use client";

import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { ivymode, montserrat } from "@/Fonts/FontMan";
import { SignedIn } from "@clerk/nextjs";
import AddToCartButton from "../AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#dac0a3] w-full max-w-sm bg-[#on] border border-[#dac0a3] rounded-lg shadow-lgs hover:shadow-2xl">
      <div style={{ height: "320px", width: "100%" }}>
        <img
          src={urlForImage(product.image)}
          style={{ height: "100%", width: "100%", objectFit: "fill" }}
        />
      </div>
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
            <AddToCartButton product={product} />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
