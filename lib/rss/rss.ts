import RSS from "rss";

import { PublicationsDto } from "../types";

export const generateRssFeed = ({
  publications,
}: {
  publications: PublicationsDto[];
}) => {
  const feed = new RSS({
    title: "Afrindependent RSS Feed",
    description: "Latest articles from Afrindependent",
    site_url: "https://afrindependent.org/",
    feed_url: "https://afrindependent.org/rss.xml",
    image_url: "https://afrindependent.org/header-web-bg.jpg",
    language: "en",
    managingEditor: "Manuel Tacanho",
    copyright: "2024 Afrindependent Institute. All Rights Reserved",
  });

  publications.forEach((publication) => {
    feed.item({
      title: publication.title,
      description: publication.intro,
      url: `https://afrindependent.org/publications/${publication.slug}`,
      date: publication.publishedAt,
      author: publication.author,
    });
  });

  return feed.xml({ indent: true });
};
