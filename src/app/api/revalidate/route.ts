import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { sanityTags } from "@/lib/sanity/client";

type WebhookBody = { _type?: string };

/**
 * Sanity webhook target. Configure in sanity.io/manage → API → Webhooks:
 *   URL:        https://apvmechanics.com.au/api/revalidate
 *   Trigger on: create, update, delete
 *   Filter:     _type in ["post","author","category","tag","redirect"]
 *   Projection: {_type}
 *   Secret:     SANITY_REVALIDATE_SECRET
 * The HMAC signature is verified before anything is invalidated.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Webhook secret not configured" }, { status: 500 });

  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(req, secret);
    if (!isValidSignature) return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    if (!body?._type) return NextResponse.json({ message: "Missing _type" }, { status: 400 });

    // Posts embed author / category / tag data, so those changes also refresh posts.
    const tags = new Set<string>();
    if (body._type === "redirect") tags.add(sanityTags.redirect);
    else tags.add(sanityTags.post);

    // expire: 0 = expire immediately (required for external webhooks in Next 16).
    for (const tag of tags) revalidateTag(tag, { expire: 0 });
    return NextResponse.json({ revalidated: [...tags], type: body._type });
  } catch (error) {
    console.error("[sanity-webhook]", error);
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
