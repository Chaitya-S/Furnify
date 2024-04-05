import { useEffect } from "react";
import { useCart } from "../CartContext";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AddToCartButton({ product, isAdded, setIsAdded }) {
  const { incrementQuantity, decrementQuantity, addToCart, getQuantity, cart } =
    useCart();

  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart!`);
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
            className="bg-[#553939] hover:bg-[#704f4f] text-base border-secondary rounded-md py-2 px-3 text-center font-medium text-[#dac0a3] hover:text-[#eadbc8]"
            onClick={() => {
              incrementQuantity(product._id);
            }}
          >
            +
          </button>
          <div className="text-lg md:text-2xl text-[#553939]">
            {getQuantity(product)}
          </div>
          <button
            className="bg-[#553939] hover:bg-[#704f4f] text-base border-secondary rounded-md py-2 px-3 text-center font-medium text-[#dac0a3] hover:text-[#eadbc8]"
            onClick={() => {
              if (getQuantity(product) === 1)
                toast.error(`Removed ${product.name} from cart.`);
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
          className="bg-[#553939] hover:bg-[#704f4f] hover:text-[#eadbc8] border-secondary rounded-md inline-flex items-center justify-center py-2 px-3 md:px-7 text-center text-md md:text-base font-medium text-[#dac0a3] w-auto h-auto"
        >
          <span className="mr-3 md:mr-[10px]">
            <FaCartPlus />
          </span>
          Add To Cart
        </button>
      )}
    </>
  );
}
