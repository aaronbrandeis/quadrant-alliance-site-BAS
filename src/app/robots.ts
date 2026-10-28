import type { MetadataRoute } from "next";
import { SITE_URL, INDEXABLE } from "@/lib/site";

/**
 * Search engine instructions.
 *
 * While INDEXABLE is false this blocks every crawler, so the temporary
 * *.vercel.app address never gets indexed. Indexing it now would mean
 * fighting to remove it later once the real domain is live.
 *
 * To go findable: set NEXT_PUBLIC_INDEXABLE=true in Vercel and redeploy.
 */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
