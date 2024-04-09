import { createClient, groq} from "next-sanity";

const client = createClient({
  projectId: "os6mngvt",
  dataset: "production",
  title:  "artshop",
  apiVersion: "2024-04-08",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

export async function getUsersByEmail(email) {
  return client.fetch(groq`*[_type == "user" && email == $email]{
    _id,
    name,
    email,
    createdAt,
  }`,
  {email}
  );
}

export async function createUser(userData) {
  const {name, email} = userData;

  const newUser = await client.create({
    _type:"user",
    name,
    email,
    createdAt:new Date().toISOString(),
  })
  return newUser;
}
