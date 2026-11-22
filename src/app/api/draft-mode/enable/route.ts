import { createClient } from "next-sanity";
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { isSanityConfigured, sanityConfig } from "@/lib/sanity/client";

// Called by Sanity Studio's Presentation tool. It validates a one-time secret
// stored in the dataset using a server-side read token (never sent to the browser).
export async function GET(request: Request) {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!isSanityConfigured || !token) return new Response("Preview is not configured", { status: 404 });
  const { GET: enable } = defineEnableDraftMode({ client: createClient({ ...sanityConfig, useCdn: false, token }) });
  return enable(request);
}
