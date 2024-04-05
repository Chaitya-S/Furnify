"use client";

import { ivymode } from "@/Fonts/FontMan.js";
import Carousel from "../components/Utility/Carousel.jsx";
import BestSeller from "@/components/Utility/BestSeller.jsx";
import { MdOutlineDoubleArrow } from "react-icons/md";
import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const images = ["/images/i1.jpg", "/images/i2.jpg", "/images/i3.jpg"];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${ivymode}`}
    >
      <div className="sm:w-full md:w-3/5 lg:w-5/6 mt-4">
        <Suspense
          fallback={<div className="w-screen h-screen text-4xl">LOADING</div>}
        >
          <Spline scene="https://prod.spline.design/7Q6BdrThb-USp2wy/scene.splinecode" />
        </Suspense>
      </div>
      <p className="text-[#a77979] text-4xl md:text-6xl content-center text-center justify-center mt-4 mb-8 w-4/5">
        'A <span className="text-[#6d2932]">revolutionary</span> online
        <span className="text-[#6d2932]"> 3D </span> experience furniture
        store.'
      </p>
      <p className="text-[#6d2932] flex flex-row text-4xl md:text-4xl text-center justify-center mt-4 mb-8 w-4/5">
        Design Your Room{" "}
        <MdOutlineDoubleArrow className="mt-1 hover:bg-[#e8d8c4]" />
      </p>
      <p className="text-[#6d2932] text-4xl content-center text-center justify-center my-8">
        Designed by us....
      </p>
      <Carousel images={images} />
      <p className="text-center text-[#6d2932] text-4xl mt-10 w-full mx-6 ml-6">
        Best-Sellers
      </p>
      <BestSeller className="w-full" />
    </main>
  );
}
