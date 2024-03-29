"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ivymode, montserrat } from "@/Fonts/FontMan";

export default function NavBar() {
  const pathName = usePathname();
  // const { cartCount } = useShoppingCart();
  const [nav, setNav] = useState(false);

  if (pathName.startsWith("/studio")) return null;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={ivymode}>
      <div className="bg-[#561c24] flex justify-between items-center h-16 mx-auto px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#fff243]">Furnify!</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link href="/products?category=all">Products</Link>
          </li>
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ul>
          <SignedIn>
            <li className="rounded-full ring-4 p-0 m-2 cursor-pointer">
              <UserButton />
            </li>
          </SignedIn>
          <SignedOut>
            <li className="p-4 hover:text-[#dac0a3] rounded-xl m-2 cursor-pointer duration-300">
              <Link href="/signed-in">Sign In</Link>
            </li>
          </SignedOut>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[45%] h-full border-r border-r-gray-900 bg-[#eadbc8] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="bg-[#561c24] w-full text-3xl p-4 font-bold text-[#fff243]">
            Furnify!
          </h1>

          {/* Mobile Navigation Items */}
          <li className="p-4 mt-4 duration-300 text-black cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 duration-300 text-black cursor-pointer">
            <Link href="/products?category=all">Products</Link>
          </li>
          <li className="p-4 duration-300 text-black cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
