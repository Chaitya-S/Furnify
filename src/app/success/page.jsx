"use client";

import { useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { montserrat } from "@/Fonts/FontMan";
import { GiConfirmed } from "react-icons/gi";

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  });

  return (
    <div
      className={`flex flex-col justify-center items-center text-black h-[100vh] gap-4 ${montserrat}`}
    >
      <h1 className="flex flex-row text-4xl text-[#553939] md:text-6xl">
        <GiConfirmed className="text-[#50c878] pr-3" />
        Order Placed Successfully!!
      </h1>
      <h3 className="text-md text-[#986a4d] md:text-xl">
        It will be shipped within 2-3 working days.
      </h3>
      <h2 className="text-xl text-[#986a4d] md:text-3xl">
        Thank You For shopping with us!!
      </h2>
    </div>
  );
}
