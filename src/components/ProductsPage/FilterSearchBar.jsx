"use client";

import { montserrat } from "@/Fonts/FontMan";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { CiCircleRemove } from "react-icons/ci";
import Modal from "../Utility/Modal";

export default function FilterSearchBar() {
  const labels = ["All", "Chairs", "Beds", "Tables", "Sofas"];
  const categories = ["all", "chair", "bed", "table", "sofa"];

  const searchParams = useSearchParams();
  const router = useRouter();

  const inputRef = useRef();

  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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
      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex items-center justify-center py-2 md:py-8 w-full ${montserrat} overflow-x-scroll`}
        style={{ scrollbarWidth: "none" }}
      >
        {labels.map((l) => (
          <button
            className="m-3 py-3 px-5 rounded-xl hover:bg-[#eadbc8] font-bold text-[#553939] border-2 border-[#553939] "
            key={labels.indexOf(l)}
            onClick={() => changeFilter(l)}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="shadow-md text-[#704f4f] mt-5 ml-5 md:hidden bg-[#eadbc8] hover:bg-[#dac0a3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setOpen(true)}
      >
        Categories
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        {labels.map((l) => (
          <button
            className="m-3 py-3 px-5 rounded-xl bg-[#eadbc8] hover:bg-[#dac0a3] font-bold text-[#553939] border-2 border-[#553939] "
            key={labels.indexOf(l)}
            onClick={() => changeFilter(l)}
          >
            {l}
          </button>
        ))}
      </Modal>

      <div className="mt-5 mr-5 text-[#553939] flex flex-row gap-2 items-center w-full justify-end">
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
