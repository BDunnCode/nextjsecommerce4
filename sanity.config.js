import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./app/sanity/schemas";

const sanityConfig = defineConfig({
  projectId: 'os6mngvt',
  dataset: 'production',
  apiVersion: '2024-4-8',
  basePath: "/admin",
  useCdn: true,
  plugins: [
    structureTool()
  ],
  schema:{types:schemas},
})

export default sanityConfig 