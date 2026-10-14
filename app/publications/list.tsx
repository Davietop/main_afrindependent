"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Filters from "./filters";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { CategoriesDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface PropType {
  isComponent?: boolean;
  authorSlug?: string;
  categories?: CategoriesDto[];
  showViewMore?: boolean;
  // SEO FIX: Add publications array to your props
  publications: any[]; 
}

const List = ({
  authorSlug,
  isComponent = false,
  categories,
  showViewMore = true,
  publications, // SEO FIX: Receive pre-fetched data from the server
}: PropType) => {
  const typeParams = useSearchParams();
  const type = typeParams.get("type");
  const [activeFilter, setActiveFilter] = useState("latest");

  // SEO FIX: We completely removed `usePublications()`. 
  // All filtering will now happen synchronously using the `publications` prop.

  useEffect(() => {
    if (type) {
      setActiveFilter(type);
    }
  }, [type]);

  // Keep your existing keywords logic, but run it against the pre-fetched prop
  const keywords = ["statism", "human-civilization", "nilar"];
  
  const matchedItems = useMemo(() => {
    if (!publications) return [];
    const seen = new Set<string>();
    
    return publications.filter((item) => {
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
  }, [publications]);

  return (
    <section className={`${isComponent ? "" : ""}  ${ibmPlexSans.className}`}>
       {categories?.length ? (
        <Filters
        
          // SEO FIX: Pass the server-fetched publications directly into Filters
          publications={publications} 
        />
      ) : null}
    </section>
  );
};

export default List;