import { MetadataRoute } from "next";
import { getPublications } from "@/service/sanity-queries";

export async function generateSitemaps() {
  const publications = await getPublications({});
  return publications.map((item) => ({ id: item.slug }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const products = await getPublications({});
  return products.map((product) => ({
    url: `https://www.afrindependent.org/publications/${product.slug}`,
    lastModified: product.publishedAt,
  }));
}
