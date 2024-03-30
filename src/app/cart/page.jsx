"use client";

import { useCart } from "@/components/CartContext";
import CartSummary from "@/components/CartPage/CartSummary";
import Grid from "@/components/ProductsPage/Grid";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="flex-col bg-[#f8f0e5] justify-center">
      <CartSummary />
      <Grid products={cart} />
    </div>
  );
}
