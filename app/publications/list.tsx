"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Filters from "./filters";
import PublicationSection, { usePublications } from "./publication-section";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { CategoriesDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

interface PropType {
  isComponent?: boolean;
  authorSlug?: string;
  categories: CategoriesDto[];
  showViewMore?: boolean;
}

const List = ({
  authorSlug,
  isComponent = false,
  categories,
  showViewMore = true,
}: PropType) => {
  const typeParams = useSearchParams();

  const type = typeParams.get("type");

  const [activeFilter, setActiveFilter] = useState("latest");
  const { data: publications, isLoading } = usePublications({
    ...(activeFilter && { category: activeFilter }),
    authorSlug,
  });

  useEffect(() => {
    if (type) {
      setActiveFilter(type);
    }
  }, [type]);

  const keywords = ["statism", "human-civilization", "nilar"];
  const seen = new Set<string>();
  const matchedItems = publications?.filter((item) => {
    const slug = item.slug;
    if (!slug) return false;

    const matchesKeyword = keywords.some((keyword) => slug.includes(keyword));
    const isUnique = !seen.has(slug);

    if (matchesKeyword && isUnique) {
      seen.add(slug);
      return true;
    }

    return false;
  });


  return (
    <section
      className={`${isComponent ? "" : ""} mb-[70px] ${ibmPlexSans.className}`}
    >
       {categories.length ? (
        <Filters
          categories={categories}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
      ) : null}


   
      {isComponent && showViewMore && (
        <Link
          href={paths.publications}
          className="bg-transparent flex items-center justify-center gap-5 border-b-[2px] border-secondary w-fit mx-auto mt-16 hover:bg-transparent px-0"
        >
          <span className="font-medium font-nohemi text-center leading-[19px] lg:leading-[40px] text-secondary text-lg lg:text-3xl">
            View more publications
          </span>
          <Image
            src="/arr-down.svg"
            className="h-[14px] lg:h-5 w-auto mb-1"
            alt="teacher"
            width={2}
            height={29}
          />
        </Link>
      )}
      
    </section>
  );
};

export default List;
