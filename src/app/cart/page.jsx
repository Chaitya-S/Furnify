"use client";

import { useCart } from "@/components/CartContext";

export default function Cart() {
  const { cart } = useCart();

  console.log(cart);
  return <div>Cart</div>;
}
