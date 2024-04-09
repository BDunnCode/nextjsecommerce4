import { createClient, groq} from "next-sanity";

const client = createClient({
  projectId: "os6mngvt",
  dataset: "production",
  title:  "artshop",
  apiVersion: "2024-04-08",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      createdAt,
      name,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current
    }`
  )
};

export async function getUsersByEmail(email) {
  return client.fetch(groq`*[_type == "user" && email == $email]{
    _id,
    name,
    email,
    createdAt,
  }`,
  {email}
  );
};

export async function createUser(userData) {
  console.log("creating user", userData);
  const {name, email} = userData;

  const existingUser = await getUsersByEmail(email);

  if (existingUser.length > 0) {
    throw new Error("User with this email already exists");
  }

  const newUser = await client.create({
    _type:"user",
    name,
    email,
    createdAt:new Date().toISOString(),
  })
  return newUser;
};
