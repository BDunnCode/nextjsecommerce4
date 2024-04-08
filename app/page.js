import Header from "./components/Header";

export function page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-6 justify-center">
        <h1 className="mt-10 text-3xl text-[#5B20B6] font-bold">Get Artistic Prints!</h1>
        <p className="text-gray-500">Elevate your space with stunning art prints, Transform your surroundings with captivating visuals.</p>
      </div>
    </div>
  );
}

export default page;