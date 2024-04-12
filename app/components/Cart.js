"use client";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import useCartStore from "./../cartStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Cart = () => {
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const totalItems = useCartStore(state => state.totalItems);
  const cartTotal = useCartStore(state => state.cartTotal);

  console.log('cart:', cart)
  console.log('cartTotal:', cartTotal)

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId)
  }

  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async () => {

    const cardElement = elements?.getElement("card");

    try{
      console.log('try is firing')
      if (!stripe || !cardElement) return null;

      const data = await axios.post("api/stripe", {
        data: { amount: cartTotal.toFixed() }
      })

      const res = await stripe?.confirmCardPayment(data?.data?.intent, {
        payment_method:{
          card:cardElement
        } 
      })

      console.log('res:', res)

      const status = res?.paymentIntent?.status;

      console.log('status:', status)

      
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">{totalItems} items in Cart</h1>

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
                <tr key={product?._id} className="hover:bg-gray-50 text-center border-b text-[#5B20B6] border-gray-300" >
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
                  <td className="py-2 px-4">${product?.price}</td>
                  <td className="py-2 px-4">{product?.quantity}</td>
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

        <div className="my-6">
          <label className="text-lg mb-2 font-semibold text-[#5B20B6]">Card Details</label>
          <CardElement className="border border-gray-200 rounded-md p-4" />
        </div>
        
        <div className="mt-6 mx-auto space-y-4 max-w-sm">
          <button onClick={onSubmit} className="bg-[#5B20B6] text-white py-3 px-6 rounded-md w-full text-lg font-semibold">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart