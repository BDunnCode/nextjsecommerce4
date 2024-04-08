import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const products = [
    {id:1, name:'Painting 1', price:100, qty:2},
    {id:1, name:'Painting 2', price:200, qty:1},
  ]
  
  
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
              products.map(product => (
                <tr className="hover:bg-gray-50 text-center border-b text-[#5B20B6] border-gray-300" key={product.id}>
                  <td className="flex items-center py-2 px-4">
                    <Image 
                      src="/facelessmen.webp"
                      alt="img"
                      height={30}
                      width={30}
                      className="mr-2"
                    />
                    {product.name}
                  </td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="py-2 px-4">{product.qty}</td>
                  <td className="py-2 px-4">
                    <FaTrash className="mx-auto cursor-pointer" />
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default Cart