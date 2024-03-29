"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FilterBar() {
  const labels = ["All", "Chairs", "Beds", "Tables", "Sofas"];
  const categories = ["all", "chair", "bed", "table", "sofa"];
  // const [activeCategory, setActiveCategory] = useState(categories[0]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const changeFilter = (l) => {
    // console.log(activeCategory);
    const params = new URLSearchParams(searchParams);
    // setActiveCategory(() => categories[labels.indexOf(l)]);
    params.set("category", categories[labels.indexOf(l)]);
    router.replace(`/products?${params.toString()}`);
    // console.log(activeCategory);
  };

  return (
    <div className="flex-row items-center justify-center py-4 md:py-8 flex-wrap">
      {labels.map((l) => (
        <button
          className="m-3 p-3 rounded-xl bg-slate-500 font-bold hover:bg-slate-400"
          key={labels.indexOf(l)}
          onClick={() => changeFilter(l)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
