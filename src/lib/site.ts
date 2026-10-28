/**
 * Site-wide constants that need to change when the real domain goes live.
 *
 * Both are environment variables so switching domain or turning on search
 * indexing is a Vercel setting change, not a code edit.
 */

/** Canonical origin, no trailing slash. Set NEXT_PUBLIC_SITE_URL in Vercel. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://quadrant-site.vercel.app";

/**
 * Whether search engines may index the site. Deliberately false by default
 * so the temporary *.vercel.app address is never indexed. Flip to true only
 * once the real domain is serving.
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE_NAME = "Quadrant Alliance";

export const PAGES = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/areas-of-interest", priority: 0.8 },
  { path: "/business-owners", priority: 0.9 },
  { path: "/advisors-connectors", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
] as const;
