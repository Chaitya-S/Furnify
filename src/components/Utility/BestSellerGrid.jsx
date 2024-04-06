"use client";

import { useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

export default function BestSellerGrid({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-6 mt-6 mb-8 p-4 bg-[#eadbc8]">
        {products.map((p) => (
          <img
            key={p._id}
            src={urlForImage(p.image)}
            onClick={() => {
              setData(p);
              setIsOpen(true);
            }}
            className="shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-[#eadbc8]"
          />
        ))}
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`
           fixed inset-0 flex justify-center
            items-center transition-colors ${
              open ? "visible bg-black/20" : "invisible"
            }
       `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-[#553939] max-w-sm rounded-lg shadow m-3 p-3 duration-1000 transition-all ${
              open ? "scale-100 opacity-100" : "scale-125 opacity-0 "
            }`}
          >
            <button
              className="absolute top-2 right-2 p-1 rounded-lg text-[#553939]"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <Link href="/">
              <img
                className="rounded-t-lg"
                src={urlForImage(data.image)}
                alt=""
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.price}
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Product
              </button>
            </div>
          </div>

          {/* <div>
              <img
                src={urlForImage(data.image)}
                className="h-[350px] w-[350px]"
                alt=""
              />
              <div className="text-[#553939]">
                <p className="text-xl font-semibold">{data.name}</p>
                {data.price}
              </div>
            </div> */}
        </div>
      )}
    </>
  );
}
