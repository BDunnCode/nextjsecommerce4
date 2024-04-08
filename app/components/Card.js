import Image from "next/image";

const Card = () => {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <Image
          src="/facelessmen.webp"
          layout="fill"
          alt="art"
          objectFit="cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-[#5B20B6] text-3xl font-semibold">Painting One</h1>
        <p className="text-xl text-gray-500 truncate">Description of the painting being sold</p>
        <br />
        <br />
        <div className="absolute bottom-0 right-0 p-2 bg[#F5F3FF] shadow-md">
          <span className="absolute text-[#5B20B6] text-lg font-semibold">$15</span>
        </div>
      </div>

    </div>
  )
}

export default Card