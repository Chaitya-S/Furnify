"use client";

import { ivymode } from "@/Fonts/FontMan.js";
import Carousel from "../components/Utility/Carousel.jsx";
import BestSeller from "@/components/Utility/BestSeller.jsx";
import React, { Suspense } from "react";
import Link from "next/link.js";
import { motion } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const CarouselImages = [
    "/images/i1.jpg",
    "/images/i2.jpg",
    "/images/i3.jpg",
    "/images/i4.jpg",
    "/images/i5.jpg",
    "/images/i6.jpg",
  ];

  const HomeImages = [
    {
      img: "/Home/i1.jpg",
      link: "",
    },
    {
      img: "/Home/i2.jpg",
      link: "",
    },
    {
      img: "/Home/i3.jpg",
      link: "",
    },
    {
      img: "/Home/i4.jpg",
      link: "",
    },
    {
      img: "/Home/i5.jpg",
      link: "",
    },
    {
      img: "/Home/i1.jpg",
      link: "",
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${ivymode}`}
    >
      <div className="sm:w-full md:w-3/5 lg:w-5/6 mt-4">
        <Suspense
          fallback={
            <div className="w-screen h-screen flex justify-center items-center text-4xl">
              LOADING
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/7Q6BdrThb-USp2wy/scene.splinecode" />
        </Suspense>
      </div>
      <span className="h-[175px]"></span>
      <motion.p
        initial={{ y: "200px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        className="text-[#a77979] text-4xl md:text-6xl content-center text-center justify-center mt-4 mb-8 w-4/5"
      >
        'A <span className="text-[#6d2932]">revolutionary</span> online
        <span className="text-[#6d2932]"> 3D </span> experience furniture
        store.'
      </motion.p>

      <span className="h-[175px]"></span>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:m-6 w-[90vw]">
        <div className="col-span-2 w-full rounded-lg bg-white">
          <div className="text-[#6d2932] text-3xl m-4">DISCOVER CATEGORIES</div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 md:m-6">
            <div className="text-[#6d2932] bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] py-6 px-3">
              hello
            </div>
            <div className="text-[#6d2932] bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] py-6 px-3">
              hello
            </div>
            <div className="text-[#6d2932] bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] py-6 px-3">
              hello
            </div>
            <div className="text-[#6d2932] bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] py-6 px-3">
              hello
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center  md:w-[30vw] md:h-[30vw] w-[450px] h-[450px]"
          style={{ backgroundImage: 'url("/images/room.jpg")' }}
        >
          <button className="justify-center md:w-[30vw] md:h-[30vw] w-[450px] h-[450px] absolute bg-gray-900/70 hover:bg-gray-900/40 transition-all duration-300 rounded-lg flex flex-row items-center p-2">
            <Link href="/furniture-editor">
              <span className="flex self-center text-4xl font-medium text-white">
                Design Your Room
                <span>
                  <SlArrowRightCircle className="mt-1 ml-2" />
                </span>
              </span>
            </Link>
          </button>
        </div>
      </div>
      {/* /////////////// */}

      <p className="text-[#6d2932] text-4xl content-center text-center justify-center my-8">
        Designed by us....
      </p>
      <Carousel images={CarouselImages} />
      <p className="text-center text-[#6d2932] text-4xl mt-10 w-full mx-6 ml-6">
        Best-Sellers
      </p>
      <BestSeller className="w-full" />
    </main>
  );
}
