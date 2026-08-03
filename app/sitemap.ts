import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autoparts-source.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-08-04"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
