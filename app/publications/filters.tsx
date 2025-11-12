"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import ReactPaginate from "react-paginate";

import { CategoriesDto, PublicationDto } from "@/lib/types";
import { getSinglePublication } from "@/service/sanity-queries";
import { usePublications } from "./publication-section";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";

interface Publication {
  slug: string;
  title: string;
  image: string;
  publishedAt: string;
  category: string;
  intro: string;
  categoryName: string;
  author: {
    name: string;
  };
  file: string;
  abstract: string;
}

interface PropType {
  categories: CategoriesDto[];
}

const FILTER_OPTIONS = [
  { label: "Latest Publications", id: "latest_pub" },
  { label: "Academic Papers", id: "academic-papers" },
  { label: "Policy Papers", id: "policy-papers" },
  { label: "Afrindependent Lens", id: "afrindependent-lens" }, // keep id as "afrindependent-edge"
  { label: "Afrindependent Post", id: "afrindependent-post" }, // keep id as "afrindependent-blog"
];

// Map filter ids to URL params — change edge/blog to lens/post only for URL
const urlFilterMap: Record<string, string> = {
  "afrindependent-lens": "afrindependent-lens",
  "afrindependent-post": "afrindependent-post",
  latest_pub: "latest_pub",
  "africonomics-papers": "africonomics-papers",
  policy_papers: "policy_papers",
};

export default function Filters({ categories }: PropType) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterSectionRef = useRef<HTMLElement>(null);
  const initialFilter = searchParams.get("filter") || "latest_pub";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const [filteredPublications, setFilteredPublications] = useState<
    Publication[]
  >([]);
  const [publicationData, setPublicationData] = useState<Publication[]>([]);
  const [updatedPubData, setUpdatedPubData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const { data: publications } = usePublications({});

  useEffect(() => {
    if (window.location.hash === "#filter" && filterSectionRef.current) {
      filterSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const titlesInOrder = ["philosophical", "purpose", "really"];

  // Step 1: Match publications by keywords in order
  const orderedFeaturedPublications = titlesInOrder
    .map((keyword, index) => {
      const match = publications?.find(
        (pub) =>
          pub.title?.toLowerCase().includes(keyword) ||
          pub.slug?.toLowerCase().includes(keyword)
      );
      if (match) {
        return { ...match };
      }
      return null;
    })
    .filter(Boolean); // Remove any nulls if no match found

  // Step 2: Remove duplicates by slug
  const uniqueFeatured = Array.from(
    new Map(
      orderedFeaturedPublications.map((item) => [item?.slug, item])
    ).values()
  );

  const getRecentPublications = (data: Publication[], maxAgeInDays = 180) => {
    const now = new Date();
    const cutoff = new Date(now.setDate(now.getDate() - maxAgeInDays));
    return data
      .filter((item) => new Date(item.publishedAt) >= cutoff)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  };

  const filterByCategory = (data: Publication[], category: string) => {
    return data
      .filter((item) => item.category === category)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  };

  const handleFilterClick = (id: string, customData?: Publication[]) => {
    setCurrentPage(0)
    setActiveFilter(id);

    const params = new URLSearchParams(window.location.search);
    params.set("filter", id);
    router.push(`?${params.toString()}`, { scroll: false });

    setFilteredPublications([]);
    setPublicationData([]);
    setLoading(true);

    const dataToUse = customData || updatedPubData;
    if (!dataToUse) return;

    

    const result =
      id === "latest_pub"
        ? getRecentPublications(dataToUse, 120)
        : filterByCategory(dataToUse, id);
        

    const uniqueResults = result.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.slug === item.slug)
    );

    setFilteredPublications(uniqueResults);
  };

  useEffect(() => {
    if (!publications) return;

    setUpdatedPubData(publications);
  }, [publications]);

  useEffect(() => {
    if (updatedPubData?.length === 0) return;
    handleFilterClick(activeFilter, updatedPubData);
  }, [updatedPubData]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const results = await Promise.all(
        filteredPublications.map(async ({ slug, ...rest }) => {
          const data = await getSinglePublication({ slug });
          return { ...data, slug, ...rest };
        })
      );
      setPublicationData(results);
      setLoading(false);
    };

    if (filteredPublications.length > 0) {
      getData();
    } else {
      setLoading(false);
    }
  }, [filteredPublications]);

  const offset = currentPage * itemsPerPage;
  const currentItems = publicationData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(publicationData.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);

  };



  const truncateText = (text: string, limit: number) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "");
  };



  return (
    <>
      <section className=" pb-6 px-5 lg:px-10">
        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
            Featured Publications
          </h3>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {uniqueFeatured.map(
              (
                {
                  title,
                  level,
                  slug,
                  image,
                  author,
                  publishedAt,
                  abstract,
                  category,
                }: any,
                index: number
              ) => (
                <Link
                  key={slug}
                  href={`${paths.publications}/${slug}?type=${category}`}
                  className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 z-30">
                    <div className="ribbon-wrapper">
                      <span className="ribbon">FEATURED</span>
                    </div>
                  </div>

                  {/* Image Thumbnail */}
                  <div
                    className="h-[150px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${image}')` }}
                  />

                  {/* Content */}
                  <div className="flex flex-col p-4 gap-y-3">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-deepForest line-clamp-2">
                      {title}
                    </h3>

                    {/* Abstract */}
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {truncateText(stripHtml(abstract), 200)}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section
        ref={filterSectionRef}
        className="text-black px-5 mt-2 lg:px-10"
      >
        <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
          Filter by type or topic to begin exploring in-depth, principled
          research.
        </h3>

        {/* Filter Buttons */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 my-5">
          {FILTER_OPTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleFilterClick(item.id)}
              className={`py-2 px-4 rounded-xl font-semibold shadow-md border-2 transition duration-300 text-left text-sm lg:text-base ${
                activeFilter === item.id
                  ? "bg-white text-deepForest border-[#00210d]"
                  : "bg-deepForest text-[#ffd700] border-[#00210d] hover:bg-white hover:text-deepForest"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Active Filter Header */}
        <h4 className="text-xl font-semibold text-deepForest mb-6">
          Showing results for:{" "}
          <span className="text-[#FFD700]  underline">
         
{FILTER_OPTIONS.find(
              (f) => f.id === activeFilter
            )?.label.toUpperCase().includes("AFRIN") ?`THE  ${FILTER_OPTIONS.find(
              (f) => f.id === activeFilter
            )?.label.toUpperCase()}`: FILTER_OPTIONS.find(
              (f) => f.id === activeFilter
            )?.label.toUpperCase()}
           
          </span>
        </h4>

        {/* Publications Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#ffd700]"></div>
          </div>
        ) : currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map(
                ({ slug, title, image, publishedAt, author, intro, category }) => (
                  <Link
                    key={slug}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `${paths.publications}/${slug}?type=${category}`; // ⬅️ forces full reload
                    }}
                    href={`${paths.publications}/${slug}?type=${category}`}
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
                      <div
                        className="h-52 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                      <div className="p-5 flex flex-col gap-y-4 flex-grow">
                        <h3 className="text-xl font-semibold text-deepForest">
                          {title}
                        </h3>
                        {intro && (
                          <p className="text-gray-700 text-base line-clamp-3">
                            {intro}
                          </p>
                        )}
                        <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                          <p>{author?.name}</p> |
                          <p className="text-sm">
                            {new Date(publishedAt).toLocaleDateString("en-GB")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center my-10">
              <ReactPaginate
                previousLabel="← Previous"
                nextLabel="Next →"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={handlePageClick}
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
        ) : (
          <p className="text-gray-500 text-center">
            No publications found for this filter.
          </p>
        )}
      </section>
    </>
  );
}
