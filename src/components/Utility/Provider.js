import { CartProvider } from "../CartContext";
import { ClerkProvider } from "@clerk/nextjs";

export default function Provider({ children }) {
  return (
    <ClerkProvider>
      <CartProvider>{children}</CartProvider>
    </ClerkProvider>
  );
}
