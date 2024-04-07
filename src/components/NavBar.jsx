"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineLoading,
  AiOutlineMenu,
} from "react-icons/ai";
import { ivymode } from "@/Fonts/FontMan";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "./CartContext";

export default function NavBar() {
  const pathName = usePathname();
  const { getCartCount } = useCart();
  const [nav, setNav] = useState(false);
  const { user, isLoaded } = useUser();

  let c = getCartCount();

  if (pathName.startsWith("/studio")) return null;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={ivymode}>
      <div className="bg-[#561c24] flex justify-between items-center h-16 mx-auto px-4 text-white">
        {/* Logo */}
        <img src="/images/logo.png" className="h-10" alt="Furnify Logo" />
        <h1 className="ml-2 w-full text-3xl font-bold text-[#f8f0e5]">
          <Link href="/">Furnify!</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link className="py-4" href="/">
              Home
            </Link>
          </li>
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link className="py-4" href="/products?category=all">
              Products
            </Link>
          </li>
          <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
            <Link className="py-4" href="/about">
              About
            </Link>
          </li>
          <SignedIn>
            <li className="p-4 hover:text-[#dac0a3] m-2 w-56 cursor-pointer">
              <Link className="py-4" href="/furniture-editor">
                Design Your Room
              </Link>
            </li>
            <li className="p-4 hover:text-[#dac0a3] m-2 cursor-pointer">
              <Link className="flex gap-2 items-center" href="/cart">
                <FaCartShopping />
                Cart
                <span>({c ? c : 0})</span>
              </Link>
            </li>
          </SignedIn>
        </ul>
        <ul>
          <SignedIn>
            <li className="rounded-full ring-4 p-0 m-2 cursor-pointer">
              {isLoaded ? (
                <UserButton afterSignOutUrl="https://furnify-drab.vercel.app/" />
              ) : (
                <AiOutlineLoading />
              )}
            </li>
          </SignedIn>
          <SignedOut>
            {/* <li className="hover:text-[#dac0a3] w-8 m-2 cursor-pointer"> */}
            <li className="p-4 hover:text-[#dac0a3] m-2 w-28 cursor-pointer">
              <Link href="/sign-in">Sign In</Link>
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
          <div className="flex flex-row bg-[#561c24]">
            <img
              src="/images/logo.png"
              className="m-4 h-10"
              alt="Furnify Logo"
            />
            <h1 className="bg-[#561c24] w-full text-3xl py-4 font-bold text-[#f8f0e5]">
              Furnify!
            </h1>
          </div>

          {/* Mobile Navigation Items */}
          <li className="p-4 mt-4 duration-300 text-[#553939] cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 duration-300 text-[#553939] cursor-pointer">
            <Link href="/products?category=all">Products</Link>
          </li>
          <li className="p-4 duration-300 text-[#553939] cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <SignedIn>
            <li className="p-4 text-[#553939] m-2 cursor-pointer">
              <Link href="/furniture-editor">Design Your Room</Link>
            </li>
            <li className="p-4 text-[#553939] hover:text-[#dac0a3] m-2 cursor-pointer">
              <Link className="flex gap-2 items-center" href="/cart">
                <FaCartShopping />
                Cart
                <span>({c ? c : 0})</span>
              </Link>
            </li>
          </SignedIn>
        </ul>
      </div>
    </header>
  );
}
