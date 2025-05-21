import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/404"],
      },
    ],
    sitemap: "https://afrindependent.org/sitemap.xml", // Ensure the TLD is correct
  };
}
