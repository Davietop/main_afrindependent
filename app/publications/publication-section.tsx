"use client"
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";

import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { Skeleton } from "@/components/ui/skeleton";
import { getPublications } from "@/service/sanity-queries";
import { IBM_Plex_Sans } from 'next/font/google';
import { getSinglePublication } from "@/service/sanity-queries";
interface Author {
  desc: string;
  about: string;
  name: string;
  slug: string;
  image: string;
}

interface Publication {
  slug: string;
  title: string;
  image: string;
  publishedAt: string;
  category: string;
  intro: string;
  categoryName: string;
  author: Author;
  file: string;
  abstract: string;
}

interface AbstractBlock {
  children: { text: string }[];
}


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});


export const usePublications = ({
  category,
  authorSlug,
}: {
  category?: string;
  authorSlug?: string;
}) => {
  const key = authorSlug
    ? null
    : category
    ? `publications-${category}`
    : 'publications-all';

  const fetcher = () =>
    getPublications({
      category: category && category !== 'latest' ? category : '',
    });

  const { data, isLoading, error, mutate } = useSWR(key, fetcher);

  return { data, isLoading, error, mutate, key };
};


interface PropType {
  filter?: string;
  authorSlug?: string;
}



function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[320px] w-full rounded-none bg-secondary/10" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-secondary/10" />
        <Skeleton className="h-4 w-[200px] bg-secondary/10" />
      </div>
    </div>
  );
}

const PublicationSection =  ({ filter, authorSlug }: PropType) => {
 const [publicationData, setPublicationData] = useState<Publication[]>([]);
 
  const { data: publications, isLoading } = usePublications({
    ...(filter && { category: filter }),
    authorSlug,
  });




  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  }

  const publicationsToRender = useMemo(() => {
    return filter !== "latest"
      ? publications || []
      : (publications || []).slice(0, 4);
  }, [publications, filter]);

  useEffect(() => {
    const getData = async () => {
      const results = await Promise.all(
        publicationsToRender.map(async ({ slug, title, image, publishedAt, category }) => {
          const data = await getSinglePublication({ slug });
          return {
            ...data,
            slug,
            title,
            image,
            publishedAt,
            category
          };
        })
      );

      setPublicationData(results); // set the complete array of results
    };

    getData();
  }, [publicationsToRender]);





  return isLoading ? (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
      {Array(4)
        .fill(0)
        .map((_, index) => {
          return <SkeletonCard key={index} />;
        })}
    </section>
  ) : (
    <section className={`${ibmPlexSans.className} grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[60px]`}>
      {publicationData.map(({ slug, title, image, publishedAt, category, author, abstract, categoryName }, index) => {
        // const combinedText =  abstract[0]?.children .map(({item}:any) => item.text).join('');
      let abstractText = "";
      try {
  const parsed = JSON.parse(abstract) as unknown;

  if (
    Array.isArray(parsed) &&
    typeof parsed[0] === "object" &&
    "children" in parsed[0]
  ) {
    abstractText = (parsed[0] as AbstractBlock).children
      .map((child) => child.text)
      .join("");
  }
} catch (e) {
  abstractText = "";
}
        const cleanedText = abstractText.replace(/^\[|\]$/g, ''); // remove [ at start or ] at end
        const readableDate = new Date(publishedAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          timeZone: "UTC", // Optional, remove if you want local time
        });
        return (
          <div
         key={index}
          >
            <div className="group relative block p-10 h-[337px] lg:h-[437px] after:absolute after:inset-0 after:w-full after:h-full after:bg-[#0E102A] after:bg-opacity-70 hover:after:bg-opacity-50 after:z-10 transition-all duration-1000 overflow-hidden rounded-3xl ">
             
              <Image
                className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover z-0 transition duration-500 rounded-3xl"
                src={image}
                alt="title"
                width={751}
                height={655}
              />
            </div>
            <div className="mt-7 flex flex-col gap-y-2 ">
          
            <p className="inline-block px-4 py-1 bg-yellow-400 text-[#00210d] font-semibold rounded-full text-sm tracking-wider uppercase w-fit">{categoryName}</p>
              <div className="text-start flex flex-col gap-y-2">
                <h3 className="font-medium text-xl leading-9 ">
                  {title}
                </h3>

              
                <p>{   truncateText(cleanedText, 60) }</p>
                 <div className="flex gap-x-2">
                 <span>By {author?.name}</span> |
               
              
               <span>{readableDate}</span>
                 </div>
                <div className="flex gap-x-4">
                <Link    href={`${paths.publications}/${slug}?type=${filter}`}
            key={index} className="border px-8 py-2 bg-deepForest text-white w-fit rounded-xl mt-4 italic ">Read More</Link>
              
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PublicationSection;
