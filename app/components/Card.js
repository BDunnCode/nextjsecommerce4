import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <Link href={`/details/${product?.slug}`}>
          <Image
            src={product?.image}
            layout="fill"
            alt="art"
            objectFit="cover"
          />
        </Link>
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-[#5B20B6] text-3xl font-semibold">{product?.name}</h1>
        <p className="text-xl text-gray-500 truncate">{product?.description}</p>
        <br />
        <br />
        <div className="absolute bottom-0 right-0 p-2 bg[#F5F3FF] shadow-md">
          <span className="absolute text-[#5B20B6] text-lg font-semibold">${product?.price}</span>
        </div>
      </div>

    </div>
  )
}

export default Card