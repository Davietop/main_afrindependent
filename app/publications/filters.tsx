"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoriesDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";
import { use, useEffect, useState } from "react";
import { getCategories, getSinglePublication } from "@/service/sanity-queries";
import { usePublications } from "./publication-section";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import Image from "next/image";

interface Article {
  title: string;
  publishedAt: string;
  slug: string;
  category: string;
  image: string;
  intro?: string;
}

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

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface PropType {
  categories: CategoriesDto[];
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export default function Filters({ categories }: PropType) {
  const [activeFilter, setActiveFilter] = useState("latest_pub");
  const [filteredPublications, setFilteredPublications] = useState<any[]>([]);
  const { data: publications } = usePublications({});

  const [publicationData, setPublicationData] = useState<Publication[]>([]);
  const [updatedPubData, setUpdatedPubData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const titlesInOrder = ["philosophical", "statism", "really"];

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

  const filterByCategory = (data: any[], category: string) => {
    return data
      .filter((item) => item.category === category)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  };

  const FILTER_OPTIONS = [
    { label: "Latest Publications", id: "latest_pub" },
    { label: "Academic Papers", id: "africonomics-papers" },
    { label: "Policy Papers", id: "policy_papers" },
    { label: "Afrindependent Lens", id: "afrindependent-edge" },
    { label: "Afrindependent Post", id: "afrindependent-blog" },
  ];

  useEffect(() => {
    if (!publications) return;

    const updatedPublications = publications.map((pub) =>
      pub.slug ===
      "the-nilar-the-path-to-african-economic-sovereignty-and-prosperity"
        ? { ...pub, category: "policy_papers" }
        : pub
    );

    console.log(updatedPublications);
    setUpdatedPubData(updatedPublications);

    handleFilterClick("latest_pub", updatedPublications);
  }, [publications]);

  const handleFilterClick = (id: string, customData?: any[]) => {
    setActiveFilter(id);
    setFilteredPublications([]);
    setPublicationData([]);
    setLoading(true);

    const dataToUse = updatedPubData;

    console.log(dataToUse, customData);
    if (!dataToUse) return;

    let result =
      id === "latest_pub"
        ? getRecentPublications(dataToUse, 120)
        : filterByCategory(dataToUse, id);
    console.log(result, updatedPubData);
    const uniqueResults = result.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.slug === item.slug)
    );

    setFilteredPublications(uniqueResults);
  };

  useEffect(() => {
    if (updatedPubData.length === 0) return;

    handleFilterClick("latest_pub", updatedPubData);
  }, [updatedPubData]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const results = await Promise.all(
        filteredPublications.map(
          async ({ slug, title, image, publishedAt, category }) => {
            const data = await getSinglePublication({ slug });
            return { ...data, slug, title, image, publishedAt, category };
          }
        )
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

  console.log(currentItems);

  return (
    <>
      {/* Featured Section */}
      <section className=" py-10 px-5 lg:px-10">
        <div className="mb-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
            Featured Publications
          </h3>
        </div>
        <div className="lg:px-10">
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

      {/* Filter Section */}
      <section id="filter" className="text-black px-5 mt-10 lg:px-10">
  <div>
    <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
      Filter by type or topic to begin exploring in-depth, principled research.
    </h3>

    <section className="bg-white mt-10 lg:px-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {FILTER_OPTIONS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleFilterClick(item.id)}
            className={`flex items-center justify-center gap-3 border-2 text-[#ffd700] font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 ${
              activeFilter === item.id
                ? "bg-white text-deepForest border-[#00210d]"
                : "bg-deepForest border-[#00210d] hover:bg-white hover:text-deepForest"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Active Filter Display */}
      {activeFilter && (
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-xl font-semibold text-deepForest">
            Showing results for:{" "}
            <span className="text-[#FFD700] underline">
              {FILTER_OPTIONS.find((option) => option.id === activeFilter)?.label.toUpperCase()}
            </span>
          </h4>
       
        </div>
      )}

      {/* Publications Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#ffd700]"></div>
        </div>
      ) : currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map(
              ({
                slug,
                title,
                image,
                publishedAt,
                author,
                abstract,
                intro,
              }) => (
                <Link
                  key={slug}
                  href={`${paths.publications}/${slug}?type=${activeFilter}`}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full">
                    <div
                      className="h-52 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${image}')` }}
                    />

                    <div className="p-5 flex flex-col gap-y-4 flex-grow">
                      <h3 className="text-xl font-semibold text-deepForest mb-2">
                        {title}
                      </h3>

                      {intro && (
                        <p className="text-gray-700 text-base line-clamp-3">
                          {intro}
                        </p>
                      )}

                      <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                        <p>{author?.name}</p> |
                        <p className="text-sm text-gray-700">
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
          <div className="flex justify-center mt-10">
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
              previousClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${
                currentPage === 0
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
              nextClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${
                currentPage === pageCount - 1
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
              disabledClassName="opacity-50 cursor-not-allowed pointer-events-none"
            />
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">
          No publications found for this filter.
        </p>
      )}
    </section>
  </div>
</section>

    </>
  );
}
