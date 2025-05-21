import { NextResponse } from "next/server";

import { generateRssFeed } from "@/lib/rss/rss";
import { getPublications } from "@/service/sanity-queries";

export async function GET() {
  const publications = await getPublications({});

  const feed = generateRssFeed({ publications });

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
