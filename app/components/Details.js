import Image from "next/image";

const Details = ({product}) => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div classname="relative h-96 aspect-ratio-1 overflow-hidden shadow-md">
          <Image 
            src={product?.image}
            alt="art"
            height={150}
            width={300}
          />
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">{product.name}</h1>
          <p className="text-gray-500 text-lg mt-4">{product.description}</p>
          
          <div className="mt-5">
            <span className="text-2xl font-semibold text-[#5B20B6]">${product.price}</span>
          </div>

          <div className="mt-6 flex flex-col text-gray">
            <label htmlFor="">Qty</label>
            <input type="text" defaultValue={1} className="w-20 px-4 h-10 border
            border-gray-300 rounded-md"/>
          </div>

          <div className="mt-6">
            <button className="bg-[#5B20B6] text-white py-3 px-6 rounded-md">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Details