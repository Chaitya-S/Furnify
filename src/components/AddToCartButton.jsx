import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton({ product }) {
  const { incrementQuantity, decrementQuantity, addToCart, getQuantity, cart } =
    useCart();

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    const isInCart = cart.some((item) => {
      if (item.quantity > 0 && item._id === product._id) {
        return true;
      }
      return false;
    });
    setIsAdded(isInCart);
  });

  return (
    <>
      {isAdded ? (
        <div className="flex flex-row gap-3 justify-around items-center">
          <button
            className="bg-blue-600 text-base hover:bg-[#0BB489] hover:border-[#0BB489] border-secondary rounded-md py-2 px-3 text-center font-medium text-black"
            onClick={() => {
              incrementQuantity(product._id);
            }}
          >
            +
          </button>
          <div className="text-xl text-black">{getQuantity(product)}</div>
          <button
            className="bg-red-700 text-base hover:bg-[#0BB489] hover:border-[#0BB489] border-secondary rounded-md py-2 px-3 text-center font-medium text-black"
            onClick={() => {
              decrementQuantity(product._id);
            }}
          >
            -
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className="bg-[#553939] hover:bg-[#704f4f] hover:text-[#eadbc8] border-secondary rounded-md inline-flex items-center justify-center py-2 px-7 text-center text-base font-medium text-[#dac0a3] h-1 w-2 md:w-auto md:h-auto"
        >
          <span className="mr-[10px]">
            <FaCartPlus />
          </span>
          Add To Cart
        </button>
      )}
    </>
  );
}
