// app/sitemap.ts
import { sanityClient } from "@/service/sanity";
import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://www.afrindependent.org/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.afrindependent.org/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/publications",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.afrindependent.org/donate",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.afrindependent.org/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.afrindependent.org/concepts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/nilar",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.afrindependent.org/video",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.afrindependent.org/involved",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // Fetch publications: slug and category (to be used as type in URL)
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
      lastModified: pub.publishedAt ? new Date(pub.publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const uniqueTypes = new Set<string>();
  validPublications.forEach((pub:any) => uniqueTypes.add(pub.category));

const typeFilterPages: MetadataRoute.Sitemap = Array.from(uniqueTypes).map(
  (typeSlug) => ({
    url: `https://www.afrindependent.org/publications?filter=${typeSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  })
);

  return [...staticRoutes, ...dynamicPublicationRoutes, ...typeFilterPages];
}
