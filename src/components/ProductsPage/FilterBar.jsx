"use client";

import { montserrat } from "@/Fonts/FontMan";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FilterBar() {
  const labels = ["All", "Chairs", "Beds", "Tables", "Sofas"];
  const categories = ["all", "chair", "bed", "table", "sofa"];

  const searchParams = useSearchParams();
  const router = useRouter();

  const changeFilter = (l) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", categories[labels.indexOf(l)]);
    router.replace(`/products?${params.toString()}`);
  };

  return (
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
  );
}
