"use client";

import { ivymode } from "@/Fonts/FontMan";
import { useCart } from "../CartContext";

export default function CartSummary() {
  const { getTotalPrice, getCartCount, cart } = useCart();

  const handleCheckout = async () => {
    await fetch("https://furnify-drab.vercel.app/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: cart }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.url) {
          window.location.href = res.url;
        }
      });
  };

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
          onClick={handleCheckout}
          className="py-3 px-7 rounded-full disabled:opacity-45 bg-[#704f4f] border-2 border-[#472d2d] text-[#f8f0e5]"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
