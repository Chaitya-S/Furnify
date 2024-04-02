"use client";

import { montserrat } from "@/Fonts/FontMan";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { TfiSearch } from "react-icons/tfi";
import { CiCircleRemove } from "react-icons/ci";

export default function FilterSearchBar() {
  const labels = ["All", "Chairs", "Beds", "Tables", "Sofas"];
  const categories = ["all", "chair", "bed", "table", "sofa"];

  const searchParams = useSearchParams();
  const router = useRouter();

  const inputRef = useRef();

  const defaultSearchQuery = searchParams.get("search") ?? "";

  const changeFilter = (l) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categories[labels.indexOf(l)]);
    router.replace(`/products?${params.toString()}`);
  };

  const searchSubmit = () => {
    if (inputRef.current.value)
      router.replace(`/products?search=${inputRef.current.value}`);
  };

  return (
    <div className={`flex flex-row justify-around ${montserrat}`}>
      <div
        className={`flex items-center justify-center py-2 md:py-8 w-full ${montserrat} overflow-x-scroll`}
        style={{ scrollbarWidth: "none" }}
      >
        {labels.map((l) => (
          <button
            // className="m-3 p-3 rounded-xl bg-slate-500 font-bold hover:bg-slate-400"
            className="m-3 py-3 px-5 rounded-xl hover:bg-[#eadbc8] font-bold text-[#553939] border-2 border-[#553939] "
            key={labels.indexOf(l)}
            onClick={() => changeFilter(l)}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="text-black flex flex-row gap-2 items-center w-full justify-end mr-4">
        <form onSubmit={searchSubmit}>
          <input
            ref={inputRef}
            name="search"
            id="search"
            autoComplete="off"
            className="text-[#704f4f] placeholder-[#553939] border-3 border-[#553939] rounded-full shadow-md  p-4 hover:bg-[#dac0a3] bg-[#eadbc8]"
            placeholder="Search Products..."
            defaultValue={defaultSearchQuery}
          />
        </form>
        <button
          onClick={searchSubmit}
          className="text-[#553939] text-2xl absolute right-20"
        >
          <TfiSearch />
        </button>
        <button
          onClick={() => {
            inputRef.current.value = "";
            router.replace("/products");
          }}
          className="text-[#553939] text-3xl"
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
}
