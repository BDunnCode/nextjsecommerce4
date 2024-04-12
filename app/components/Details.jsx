"use client";
import Image from "next/image";
import { useState } from "react";
import useCartStore from "../cartStore";

const Details = ({product}) => {
  const cart = useCartStore(state => state.cart);
  const addToCart = useCartStore(state => state.addToCart);
  const [ quantity, setQuantity ] = useState(1);
  console.log(cart)

  const handleAddToCart = () => {
    addToCart({product, quantity:quantity})
  }

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative h-96 aspect-ratio-1 overflow-hidden shadow-md">
          <Image
            src={product?.image}
            alt="art"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>

        <div className="flex flex-col justify-between px-4">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">{product.name}</h1>
          <p className="text-gray-500 text-lg mt-4">{product.description}</p>
          
          <div className="mt-5">
            <span className="text-2xl font-semibold text-[#5B20B6]">${product.price}</span>
          </div>

          <div className="mt-6 flex flex-col text-gray">
            <label htmlFor="">
              Qty
            </label>
            <input 
              value={quantity} 
              onChange={(e)=>{setQuantity(e.target.value)}}
              type="number" 
              className="w-20 px-4 h-10 borderborder-gray-300 rounded-md" 
            />
          </div>

          <div className="mt-6">
            <button 
              className="bg-[#5B20B6] text-white py-3 px-6 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details