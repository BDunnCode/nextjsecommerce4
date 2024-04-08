import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10 space-y-4 justify-center">
        <h1 className="text-4xl text-[#5B20B6] font-bold">Get Artistic Prints!</h1>
        <p className="text-gray-500 text-xl">Elevate your space with stunning art prints, Transform your surroundings with captivating visuals.</p>
      </div>

      <div className="flex p-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;