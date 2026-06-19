/**
 * Canonical site configuration. Used by metadata, sitemap, robots and manifest.
 * Override the URL at build time with NEXT_PUBLIC_SITE_URL if needed.
 */
export const siteConfig = {
  name: "UTCLA",
  fullName: "United Tribal Countries Land Alliance",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://utcla.org").replace(
    /\/$/,
    ""
  ),
  description:
    "A voluntary alliance of self-governing Tribal Nations across Terra Australis, united under Tjukurpa (Law/Lore).",
  locale: "en_AU",
  // Brand colours (from globals.css @theme)
  themeColor: "#c87a1e", // ochre-500
  backgroundColor: "#faf8f3", // sand-50
} as const;

export const siteUrl = siteConfig.url;
