import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const sanityConfig = defineConfig({
  projectId: 'os6mngvt',
  dataset: 'production',
  apiVersion: '2024-4-8',
  basePath: "/admin",
  useCdn: true,
  plugins: [
    structureTool()
  ]
})

export default sanityConfig 