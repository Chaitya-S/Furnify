"use client";

import { ivymode } from "@/Fonts/FontMan";
import { useCart } from "../CartContext";

export default function CartSummary() {
  const { getTotalPrice, getCartCount } = useCart();

  return (
    <div
      className={`flex flex-row justify-between items-center px-3 pt-6 pb-6 font-semibold text-2xl ${ivymode}`}
    >
      <div className="py-3 px-3 text-[#553939] ml-3">
        Total Items: {getCartCount()}
      </div>
      <div className="flex">
        <div className="py-3 px-3 text-[#553939]">
          Sub-Total: ₹ {getTotalPrice()}{" "}
        </div>
        <button
          disabled={getCartCount() === 0}
          className="py-3 px-7 rounded-full disabled:opacity-45 bg-[#704f4f] border-2 border-[#472d2d] text-[#f8f0e5]"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
