import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className="h-10 w-10 text-gray-600" />
      </SheetTrigger>
      <SheetContent className="bg-main text-white border-l-0 rounded-lg">
        <div className="relative">
          <div className="w-full flex flex-col text-2xl p-0 gap-8 relative rounded-md">
            {/* Main Navigation Items */}
            <h1>
              <Link href="/breakfast">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Breakfast
                </span>
              </Link>
            </h1>
            <h1>
              <Link href="/lunch">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Lunch
                </span>
              </Link>
            </h1>
            <h1>
              <Link href="/dinner">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Dinner
                </span>
              </Link>
            </h1>
            <h1>
              <Link href="/desserts">
                <span className="flex items-center space-x-2 cursor-pointer">
                  Desserts
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
