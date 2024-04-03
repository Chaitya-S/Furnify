"use client";

import { ivymode } from "@/Fonts/FontMan.js";
import Carousel from "../components/Utility/Carousel.jsx";
import Spline from "@splinetool/react-spline";
import BestSeller from "@/components/bestseller.jsx";

export default function Home() {
  const images = ["/images/i1.jpg", "/images/i2.jpg", "/images/i3.jpg"];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${ivymode}`}
    >
      <div className="sm:w-full md:w-3/5 lg:w-5/6 mt-4">
        <Spline scene="https://prod.spline.design/7Q6BdrThb-USp2wy/scene.splinecode" />
      </div>
      <p className="text-[#a77979] text-4xl md:text-6xl content-center text-center justify-center mt-4 mb-8 w-4/5">
        'A <span className="text-[#6d2932]">revolutionary</span> online
        <span className="text-[#6d2932]"> 3D </span> experience furniture
        store.'
      </p>
      <Carousel images={images} />
      <p className="text-black text-4xl content-center text-center justify-center my-8 w-4/5">
        Designed by us....
      </p>
      <BestSeller />
    </main>
  );
}
