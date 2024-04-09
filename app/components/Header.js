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
    <div className="p-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href='/'>
          <div className="flex gap-2 items-center text-2xl lg:text-3xl font-bold">
            <Image 
              src="/facelessmen.webp"
              alt="logo"
              height={50}
              width={50}
            />
            <h1 className="">Artistry Market</h1>
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
          {/* <FaTruck className="text-3xl text-[#5B20B6] cursor-pointer" /> */}
          <div className="ml-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header