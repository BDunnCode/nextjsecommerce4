"use client";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import useCartStore from './../cartStore';

const Cart = () => {
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const totalItems = useCartStore(state => state.totalItems);
  const cartTotal = useCartStore(state => state.cartTotal);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId)
  }
 
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Cart</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-[#5B20B6]">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Remove</th>
          </tr>
        </thead>

        <tbody>
          {
              cart?.map(product => (
                <tr key={product?.id} className="hover:bg-gray-50 text-center border-b text-[#5B20B6] border-gray-300" >
                  <td className="flex items-center py-2 px-4" >
                    <Image 
                      src={product?.image}
                      alt="img"
                      height={50}
                      width={50}
                      className="mr-2"
                    />
                    {product.name}
                  </td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="py-2 px-4">{product.quantity}</td>
                  <td className="py-2 px-4">
                    <FaTrash onClick={() => handleRemoveFromCart(product?._id)} className="mx-auto cursor-pointer" />
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>

      <div>
        <div className="space-x-4 mt-10">
          <span className="text-md font-semibold text-[#5B20B6]">Total:</span>
          <span className="text-md font-semibold text-[#5B20B6]">${cartTotal}</span>
        </div>
        
        <div className="mt-6 mx-auto space-y-4 max-w-sm ">
          <button className="bg-[#5B20B6] text-white py-3 px-6 rounded-md w-full text-lg font-semibold">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart