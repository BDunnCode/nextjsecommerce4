
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getUsersByEmail, createUser, getProducts } from "./sanity/sanity-utils";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <div>User is not logged in.</div>

  const existingUser = await getUsersByEmail(user?.emailAddresses[0]?.emailAddress);

  if(existingUser.length === 0) {
    await createUser({
      name:user?.firstName,
      email:user?.emailAddresses[0]?.emailAddress
    });
  }

  const products = await getProducts();
  
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-10 space-y-4 justify-center">
        <h1 className="text-4xl text-[#5B20B6] font-bold">Get Artistic Prints!</h1>
        <p className="text-gray-500 text-xl">Elevate your space with stunning art prints, Transform your surroundings with captivating visuals.</p>
      </div>

      <div className="flex p-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))
            }
        </div>
      </div>

      <Footer />
    </div>
  );
}

