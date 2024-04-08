"use client";

import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex gap-2 items-center text-2xl lg:text-3xl font-bold">
          <Image 
            src="/facelessmen.webp"
            alt="logo"
            height={50}
            width={50}
          />
          <h1 className="">Artistry Market</h1>
        </div>
        <div className="flex items-center relative">
          <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer"  />
          <div className="ml-2 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
            1
          </div>
          {/* <FaTruck className="text-3xl text-[#5B20B6] cursor-pointer" /> */}
          {/* <p>usericon</p> */}
        </div>
      </div>
    </div>
  )
}

export default Header