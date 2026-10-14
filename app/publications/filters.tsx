"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Image from "next/image";

import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { urlFor } from "@/service/sanity"; // Make sure this is properly exported from your Sanity config

interface Publication {
  slug: string;
  title: string;
  image: any; 
  publishedAt: string;
  category: string;
  intro: string;
  categoryName?: string;
  author?: {
    name: string;
  };
  file?: string;
  abstract: string;
}

interface PropType {
  // CRITICAL SEO FIX: You must pass the FULL, pre-fetched publications array 
  // from your Server Component to this Client Component as a prop.
  publications: Publication[];
}

const FILTER_OPTIONS = [
  { label: "Latest Publications", id: "latest_pub" },
  { label: "Academic Papers", id: "academic-papers" },
  { label: "Policy Papers", id: "policy-papers" },
  { label: "Afrindependent Lens", id: "afrindependent-lens" }, 
  { label: "Afrindependent Post", id: "afrindependent-post" }, 
];

export default function Filters({ publications }: PropType) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterSectionRef = useRef<HTMLElement>(null);

  // SEO FIX: Initialize state directly from URL params so Googlebot 
  // sees the correct view immediately upon landing on a filtered URL.
  const activeFilter = searchParams.get("filter") || "latest_pub";
  const urlPage = parseInt(searchParams.get("page") || "1", 10) - 1;
  const [currentPage, setCurrentPage] = useState(urlPage > 0 ? urlPage : 0);

  const itemsPerPage = 6;

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#filter" && filterSectionRef.current) {
      filterSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Sync state if user uses browser back/forward buttons
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10) - 1;
    setCurrentPage(pageFromUrl > 0 ? pageFromUrl : 0);
  }, [searchParams]);

  // PERFORMANCE FIX: useMemo prevents the N+1 find/filter loops on every single render
  const uniqueFeatured = useMemo(() => {
    if (!publications || publications.length === 0) return [];
    
    const titlesInOrder = ["principled paradigm", "purpose", "really"];
    
    const ordered = titlesInOrder
      .map((keyword) => {
        return publications.find(
          (pub) =>
            pub.title?.toLowerCase().includes(keyword) ||
            pub.slug?.toLowerCase().includes(keyword)
        );
      })
      .filter((pub): pub is Publication => Boolean(pub));

    return Array.from(new Map(ordered.map((item) => [item.slug, item])).values());
  }, [publications]);

  // SEO & PERFORMANCE FIX: Filters data synchronously. No loading states required.
  const filteredPublications = useMemo(() => {
    if (!publications || publications.length === 0) return [];

    let result: Publication[] = [];
    if (activeFilter === "latest_pub") {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 120);

      result = publications
        .filter((item) => new Date(item.publishedAt) >= cutoff)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      result = publications
        .filter((item) => item.category === activeFilter)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return result.filter((item, index, self) => index === self.findIndex((t) => t.slug === item.slug));
  }, [publications, activeFilter]);

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredPublications.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredPublications.length / itemsPerPage);

  const truncateText = (text: string, limit: number) =>
    text?.length > limit ? text.slice(0, limit) + "..." : text || "";

  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "");
  };

  const getImageUrl = (image: any) => {
    try {
      return typeof image === 'string' ? `${image}?w=800&h=500&q=80` : urlFor(image).width(800).height(500).quality(80).url();
    } catch {
      return typeof image === 'string' ? image : ''; 
    }
  };

  return (
    <>
      <section className="pb-6 px-5 lg:px-10">
        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
            Featured Publications
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatured.length === 0 ? (
              <p className="text-gray-500 py-10">No featured publications found.</p>
            ) : (
              uniqueFeatured.map((pub) => (
                <Link
                  key={pub.slug}
                  href={`${paths.publications}/${pub.slug}?type=${pub.category}`}
                  className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 z-30">
                    <div className="ribbon-wrapper">
                      <span className="ribbon">FEATURED</span>
                    </div>
                  </div>
                  <div className="relative h-[150px] w-full">
                    <Image
                      src={getImageUrl(pub.image)}
                      alt={pub.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-4 gap-y-3">
                    <h3 className="text-lg font-semibold text-deepForest">{pub.title}</h3>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {truncateText(stripHtml(pub.abstract), 200)}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <section ref={filterSectionRef} className="text-black px-5 mt-2 lg:px-10" id="filter">
        <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
          Filter by type or topic to begin exploring in-depth, principled research.
        </h3>

        {/* SEO FIX: Converted buttons to Next.js Links with URL parameters */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 my-5">
          {FILTER_OPTIONS.map((item) => (
            <Link
              key={item.id}
              href={`?filter=${item.id}#filter`}
              scroll={false}
              onClick={() => setCurrentPage(0)} // Reset pagination on filter change
              className={`py-2 px-4 rounded-xl font-semibold shadow-md border-2 transition duration-300 text-left text-sm lg:text-base ${
                activeFilter === item.id
                  ? "bg-white text-deepForest border-[#00210d]"
                  : "bg-deepForest text-[#ffd700] border-[#00210d] hover:bg-white hover:text-deepForest"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-deepForest mb-6">
          Showing results for:{" "}
          <span className="text-[#FFD700] underline">
            {FILTER_OPTIONS.find((f) => f.id === activeFilter)?.label.toUpperCase().includes("AFRIN")
              ? `THE ${FILTER_OPTIONS.find((f) => f.id === activeFilter)?.label.toUpperCase()}`
              : FILTER_OPTIONS.find((f) => f.id === activeFilter)?.label.toUpperCase()}
          </span>
        </h4>

        {/* SEO FIX: Removed client-side loading spinners. Content renders instantly for Googlebot */}
        {currentItems.length === 0 ? (
          <p className="text-gray-500 text-center py-20">
            No publications found for this filter.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((pub) => (
                <Link
                  key={pub.slug}
                  scroll={true}
                  href={`${paths.publications}/${pub.slug}?type=${pub.category}`}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
                    <div className="relative h-52 w-full">
                      <Image
                        src={getImageUrl(pub.image)}
                        alt={pub.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-y-4 flex-grow">
                      <h3 className="text-xl font-semibold text-deepForest">{pub.title}</h3>
                      {pub.intro && (
                        <p className="text-gray-700 text-base line-clamp-3">{pub.intro}</p>
                      )}
                      <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                        <p>{pub.author?.name}</p>
                        <span>|</span>
                        <p className="text-sm">
                          {pub.publishedAt ? new Date(pub.publishedAt).toLocaleDateString("en-GB") : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center my-10">
              <ReactPaginate
                previousLabel="← Previous"
                nextLabel="Next →"
                breakLabel="..."
                pageCount={pageCount}
                // SEO FIX: Added hrefBuilder so Googlebot sees pagination as real <a href> links
                hrefBuilder={(page) => `?filter=${activeFilter}&page=${page}#filter`}
                hrefAllControls={true}
                onPageChange={(event) => {
                  setCurrentPage(event.selected);
                  router.push(`?filter=${activeFilter}&page=${event.selected + 1}#filter`, { scroll: false });
                }}
                forcePage={currentPage}
                containerClassName="flex gap-2"
                pageClassName="px-4 py-2 rounded border border-gray-300 text-sm"
                pageLinkClassName="text-gray-700"
                activeClassName="bg-[#ffd700] text-deepForest font-bold"
                previousClassName="px-4 py-2 rounded border border-gray-300 text-sm"
                nextClassName="px-4 py-2 rounded border border-gray-300 text-sm"
                disabledClassName="opacity-50 cursor-not-allowed"
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}
