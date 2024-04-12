"use client";

import Image from "next/image";
import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import useCartStore from "../cartStore";

function Header() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div className="px-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href='/'>
          <div className="flex gap-2 items-center text-2xl lg:text-3xl font-bold">
            <Image
              src="/logo.png"
              alt="logo"
              height={90}
              width={90}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <h1 className="text-4xl">The Art Gallery</h1>
          </div>
        </Link>
        <div className="flex items-center relative">
          <Link href='/cart'>
            <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer"  />
          </Link>
            { 
              totalItems > 0 && (  
                <div className="ml-2 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                  {totalItems}
                </div>   
              )        
            }
          <Link href="/order">
            <FaTruck className="text-3xl text-[#5B20B6] cursor-pointer ml-4" />
          </Link>
          <div className="ml-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header