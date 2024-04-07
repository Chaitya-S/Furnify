"use client";

import { ivymode, montserrat } from "@/Fonts/FontMan.js";
import Carousel from "../components/Utility/Carousel.jsx";
import BestSeller from "@/components/Utility/BestSeller.jsx";
import React, { Suspense } from "react";
import Link from "next/link.js";
import { SlArrowRightCircle } from "react-icons/sl";
import { TbArmchair2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineTableBar } from "react-icons/md";
import { PiCouchLight } from "react-icons/pi";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const CarouselImages = ["/images/i1.jpg", "/images/i2.jpg", "/images/i3.jpg"];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${ivymode}`}
    >
      <div className="sm:w-full md:w-3/5 lg:w-5/6 mt-4">
        <Suspense
          fallback={
            <div className="flex justify-center items-center text-4xl text-[#553939]">
              LOADING...
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/7Q6BdrThb-USp2wy/scene.splinecode" />
        </Suspense>
      </div>

      <p className="text-[#a77979] text-4xl md:text-6xl content-center text-center justify-center mt-4 mb-8 w-4/5">
        &apos;A <span className="text-[#6d2932]">revolutionary</span> online
        <span className="text-[#6d2932]"> 3D </span> experience furniture
        store&apos;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 md:m-6 w-[90vw]">
        <div className={`col-span-2 w-full rounded-lg bg-white ${montserrat}`}>
          <div className="text-[#472d2d] texl-xl px-6 mt-6">
            SHOP BY CATEGORIES
          </div>
          <div className="text-[#986a4d] text-4xl px-6 mb-6">
            DISCOVER CATEGORIES
          </div>
          <div className="text-[#986a4d] text-2xl grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 md:m-6">
            <Link
              href="products?category=all"
              className="bg-[#f8f0e5] text-3xl text-[#472d2d] rounded-lg hover:bg-[#eadbc8] py-6 flex flex-col justify-center items-center ml-2"
            >
              All
            </Link>
            <Link
              href="/products?category=chair"
              className="bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] md:py-8 mr-2"
            >
              <div className="flex justify-center mt-2 md:my-2">
                <TbArmchair2 />
              </div>
              <div className="flex text-[#472d2d] justify-center mb-2">
                Chairs
              </div>
            </Link>
            <Link
              href="products?category=bed"
              className="bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] md:py-8 ml-2"
            >
              <div className="flex justify-center mt-2 md:my-2">
                <IoBedOutline />
              </div>
              <div className="flex text-[#472d2d] justify-center mb-2">
                Beds
              </div>
            </Link>
            <Link
              href="products?category=table"
              className="bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] md:py-8 mr-2"
            >
              <div className="flex justify-center mt-2 md:my-2">
                <MdOutlineTableBar />
              </div>
              <div className="flex text-[#472d2d] justify-center mb-2">
                Tables
              </div>
            </Link>
            <Link
              href="products?category=sofa"
              className="bg-[#f8f0e5] rounded-lg hover:bg-[#eadbc8] md:py-8 ml-2 mb-2"
            >
              <div className="flex justify-center mt-2 md:my-2">
                <PiCouchLight />
              </div>
              <div className="flex text-[#472d2d] justify-center mb-2">
                Sofas
              </div>
            </Link>
          </div>
        </div>
        <div
          className="bg-cover bg-center rounded-lg md:w-[30vw] md:h-[30vw] w-[420px] h-[420px]"
          style={{ backgroundImage: 'url("/images/room.jpg")' }}
        >
          <button className="flex flex-row justify-center md:w-[30vw] md:h-[30vw] w-[420px] h-[420px] absolute bg-gray-900/40 md:bg-gray-900/70 md:hover:bg-gray-900/40 transition-all duration-300 rounded-lg items-center p-2">
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

      <Carousel images={CarouselImages} />
      <p className="text-center text-[#6d2932] text-4xl mt-10 w-full mx-6 ml-6">
        Best-Sellers
      </p>
      <BestSeller className="w-full" />
    </main>
  );
}
