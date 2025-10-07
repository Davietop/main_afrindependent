import { sanityClient } from "@/service/sanity";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buildDate = new Date("2025-10-01");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://www.afrindependent.org/",
      lastModified: buildDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.afrindependent.org/about",
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/publications",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.afrindependent.org/donate",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.afrindependent.org/contact",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.afrindependent.org/concepts",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/nilar",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/video",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.afrindependent.org/involved",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const publications = await sanityClient.fetch(`
    *[_type == "publications"]{
      "slug": slug.current,
       "category": category->slug.current,
      publishedAt
    }
  `);


const validPublications = publications.filter(
  (pub: { slug?: string; category?: string }) => pub.slug && pub.category
);


 const dynamicPublicationRoutes: MetadataRoute.Sitemap = validPublications.map(
  (pub: { slug: string; category: string; publishedAt?: string }) => ({
    url: `https://www.afrindependent.org/publications/${pub.slug}?type=${pub.category}`,
    lastModified: pub.publishedAt ? new Date(pub.publishedAt) : buildDate,
    changeFrequency: "monthly",
    priority: 0.6,
  })
);


  return [...staticRoutes, ...dynamicPublicationRoutes];
}
