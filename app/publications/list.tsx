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
      {activeFilter === "afrindependent-edge" ? (
        <div className=" mt-24 lg:mt-[104px] max-w-5xl mx-auto bg-primary rounded-[17px] lg:rounded-[29px] py-[55px] px-7 lg:px-36 text-center relative">
          <div className="absolute -top-[44px] lg:-top-[72px] left-[30px] w-20 lg:w-36 h-20 lg:h-36 rounded-full bg-secondary flex items-center justify-center font-bold text-[47px] lg:text-[67px] text-white font-ojuju">
            i
          </div>
          <h3 className="font-bold font-inter_tight text-xl lg:text-4xl mb-8 text-secondary leading-[50px]">
            What is Afrindependent Edge?
          </h3>
          <p className="font-medium font-inter_tight text-lg lg:text-2xl text-[#323232] leading-[28px] lg:leading-[40px]">
            <span className="font-semibold italic">Afrindependent Edge</span> is
            a publication that provides insightful commentary articles and
            concise analyses on economic, social, and geopolitical matters
            impacting Africa and the global landscape through an Africonomics
            lens.
          </p>
          <p className="font-medium font-inter_tight text-lg lg:text-2xl text-[#323232] mt-10 leading-[28px] lg:leading-[40px]">
            To submit an article to Afrindependent Edge, please email{" "}
            <Link
              href={`mailto:editor@afrindependent.org`}
              className="underline"
            >
              editor@afrindependent.org
            </Link>
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default List;
