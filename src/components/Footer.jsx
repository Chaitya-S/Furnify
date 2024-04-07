import { ivymode, montserrat } from "@/Fonts/FontMan";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`bg-[#561c24] p-4 ${montserrat}`}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-10" alt="Furnify Logo" />
            <span
              className={`${ivymode} self-center text-2xl font-semibold whitespace-nowrap text-[#f8f0e5]`}
            >
              Furnify!
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#f8f0e5] sm:mb-0">
            <li>
              <Link href="/products" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/furniture-editor"
                className="hover:underline me-4 md:me-6"
              >
                Design Your Room
              </Link>
            </li>
            <li>
              <a
                href="https://youtu.be/jGeoDyv-Gys"
                className="hover:underline me-4 md:me-6"
              >
                Happy Home, Happy You!
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#f8f0e5] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-[#f8f0e5] sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline me-4 md:me-6">
            Furnify!™
          </Link>
          All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
