// app/sitemap.ts
import { MetadataRoute } from "next";
import { getCategories } from "@/service/sanity-queries";
import { usePublications } from "./publications/publication-section";

export default function sitemap(): MetadataRoute.Sitemap {
  const { data: publications } = usePublications({});

  const dynamicPages = (publications || []).map((pub) => ({
    url: `https://www.afrindependent.org/publications/${pub.slug}`,
    lastModified: new Date(pub.publishedAt || new Date()),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const staticPages = [
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

  return [...staticPages, ...dynamicPages] as MetadataRoute.Sitemap;
}
