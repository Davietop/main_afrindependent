"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { usePublications } from "@/app/publications/publication-section";
import { useDimensions } from "@/lib/hooks/useDimension";
import useMousePosition from "@/lib/hooks/useMousePosition";
import {
  getCategories,
  getPublications,
  getPublicationsByAuthor,
  getSinglePublication,
} from "@/service/sanity-queries";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";

interface Article {
  title: string;
  publishedAt: string;
  slug: string;
  category: string;
  image: string;
  intro?: string;
}

interface PropType {
  authorSlug?: string;
}
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const List = ({ authorSlug }: PropType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: publications } = usePublications({});
  const [publicationData, setPublicationData] = useState<PublicationDto[]>([]);

  const position = useMousePosition();
  const { width } = useDimensions(containerRef)! || {};
  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  }

  const shouldShowArrow =
    width >= 1024 ? publications!?.length > 3 : publications!?.length > 1;
  const topThree = (publications ?? [])
    .sort(
      (a: Article, b: Article) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    

    const getRecentPublications = (data: any[], maxAgeInDays = 180) => {
      const now = new Date();
      const cutoff = new Date(now.setDate(now.getDate() - maxAgeInDays));
      return data
        .filter((item) => new Date(item.publishedAt) >= cutoff)
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    };

    const latest = getRecentPublications(topThree ?? []).slice(0,4)


  useEffect(() => {
    if (!topThree || topThree.length === 0) return;

    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          latest.map(({ slug }) => getSinglePublication({ slug }))
        );

        console.log(results)
        setPublicationData(results);
      } catch (error) {
        console.error("Failed to fetch publications:", error);
      }
    };

    fetchAll();
  }, [topThree.length]);

  return (
    <div
      className={`group/parent lg:px-16  block max-w-screen h-fit overflow-hidden relative ${ibmPlexSans.className}`}
      ref={containerRef}
    >
      {topThree?.length < 1 ? (
        <p className="text-black"></p>
      ) : (
        <div className="flex flex-col  lg:mt-4 gap-y-6 mx-2  ">
          {publicationData.map(
            (
              {
                title,
                image,
                publishedAt,
                category,
                author,
                abstract,
                categoryName,
              },
              index
            ) => {
              const slugData = topThree[index];

              const combinedText = abstract[0]?.children
                .map((item: any) => item.text)
                .join("");
              const cleanedText = combinedText.replace(/^\[|\]$/g, ""); // remove [ at start or ] at end
              const readableDate = new Date(publishedAt).toLocaleString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  timeZone: "UTC", // Optional, remove if you want local time
                }
              );
              const isLast = index === publicationData.length - 1;

              return (
                <Link
                  key={index}
                  href={`${paths.publications}/${slugData.slug}?type=${category}`}
                >
                  <div className="text-black flex flex-col md:flex-row gap-x-10   w-full  ">
                    <div
                      className="h-[300px] w-full md:w-4/12 bg-cover bg-center rounded-xl "
                      style={{
                        backgroundImage: `url('${image}')`,
                      }}
                    ></div>

                    <div className="flex flex-col  w-full  md:w-8/12 gap-y-4 md:gap-y-6">
                      <div className="flex items-center mt-2 md:mt-0 gap-x-2">
                        <p>{author?.name}</p>|

                        <p>{readableDate}</p>
                      </div>

                      <div className="flex flex-col gap-y-4">
                        <h1 className="text-2xl lg:text-3xl font-bold">
                          {title}
                        </h1>
                        <p>{truncateText(cleanedText, 200)}</p>
                      </div>
                    </div>
                  </div>

                  {!isLast && <hr className="border-t border-[#ffd700] mt-6" />}
                </Link>
              );
            }
          )}
        </div>
      )}

      <div className="text-center mt-6">
        <Link
          href="/publications"
          className="flex items-center justify-center gap-3 border-2 w-fit mx-auto bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          Read More Publications
        </Link>
      </div>
    </div>
  );
};

export default List;
