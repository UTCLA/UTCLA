import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getNewsArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about/governance", changeFrequency: "yearly", priority: 0.6 },
    { path: "/about/nations", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about/objectives", changeFrequency: "yearly", priority: 0.6 },
    { path: "/news", changeFrequency: "weekly", priority: 0.8 },
    { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
    { path: "/media", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const newsEntries: MetadataRoute.Sitemap = getNewsArticles().map(
    (article) => ({
      url: `${siteUrl}/news/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  return [...staticEntries, ...newsEntries];
}
