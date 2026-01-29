import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const lastModified = new Date();

  const routes = ["/", "/#projects", "/#skills", "/#certifications", "/#contact"];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
