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
      {/* ////////// */}

      <div id="default-carousel" className="w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((i) => (
            <div
              key={i}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                src={i}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          ))}
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* //////////// */}

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
