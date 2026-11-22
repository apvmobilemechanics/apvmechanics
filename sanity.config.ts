import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./studio/schemaTypes";

// The Studio is deployed separately from the website (`pnpm studio:deploy`).
// Only SANITY_STUDIO_* variables are exposed to the Studio bundle.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "http://localhost:3000";

export default defineConfig({
  name: "apv-blog",
  title: "APV Mobile Mechanics — Blog",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: { origin: previewOrigin, previewMode: { enable: "/api/draft-mode/enable" } },
    }),
  ],
});
