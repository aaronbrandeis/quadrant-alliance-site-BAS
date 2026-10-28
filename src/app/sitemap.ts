import type { MetadataRoute } from "next";
import { SITE_URL, PAGES } from "@/lib/site";

/**
 * The list of pages handed to search engines. Generated from PAGES so a new
 * page cannot be added without appearing here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
