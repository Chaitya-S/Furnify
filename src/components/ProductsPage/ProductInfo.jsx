import { ivymode, montserrat } from "@/Fonts/FontMan";
import { useState } from "react";
import AddToCartButton from "../Utility/AddToCartButton";

const ProductInfo = ({ p }) => {
  const [isAdded, setIsAdded] = useState(false);
  const colors = p.colors;
  const [activeColor, setActiveColor] = useState(`${colors[0]}`);

  return (
    <>
      <div
        className={`flex flex-wrap md:flex-nowrap flex-row md:flex-col justify-start ${ivymode} gap-4 my-4 md:my-0`}
      >
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#553939]">
            {p.name}
          </h1>
          <h2 className="text-2xl lg:text-3xl text-[#553939]">₹{p.price}</h2>
        </div>
        <span className="md:my-8"></span>
        <div className={`${montserrat}`}>
          <div className="m-2 text-2xl">Colors </div>
          <div className="m-2 text-sm md:text-md">
            Explore/Change Colors in the 3D view
          </div>
          {colors.map((c) => (
            <button
              key={c}
              className={
                activeColor === c
                  ? "bg-[#dac0a3] mx-2 p-4 rounded-lg border-2 border-[#553939]"
                  : "border-2 border-[#553939] hover:bg-[#eadbc8] m-2 p-4 rounded-lg"
              }
              onClick={() => setActiveColor(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="md:my-8"></span>
        <AddToCartButton
          setIsAdded={setIsAdded}
          isAdded={isAdded}
          product={p}
        />
      </div>
    </>
  );
};

export default ProductInfo;
