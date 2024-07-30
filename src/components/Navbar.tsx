"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="  bg-white z-50 ">
      <div className="max-w-screen-xl flex items-center  text-center justify-between mx-auto p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 h-10   md:w-auto">
          <Image
            priority
            src="/logo.png"
            width={100}
            height={52}
            alt="Logo Image"
          />
        </Link>

        {/* Mobile Menu for Smaller Screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

        {/* Desktop Menu for Larger Screens */}
        <div className="hidden lg:flex w-auto">
          <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 gap-x-6 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {/* Main Navigation Items */}
            <li>
              <Link href="/breakfast">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Breakfast
                </span>
              </Link>
            </li>
            <li>
              <Link href="/lunch">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Lunch
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dinner">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Dinner
                </span>
              </Link>
            </li>
            <li>
              <Link href="/desserts">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Desserts
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Profile Image */}
        <div className="hidden lg:flex lg:w-auto">
          <ul className="flex items-center font-normal p-4 md:p-0 mt-4 border gap-x-6 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Image
                src="/icons/Ellipse 2.svg"
                width={48}
                height={48}
                quality={100}
                alt="Profile"
                className="rounded-full cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
