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
import { IBM_Plex_Sans } from 'next/font/google';
import { useEffect, useState } from "react";
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
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const titlesInOrder = [
    "statism",
    "civilization",
    "nilar",
  ];
  
  const levelOrder = ["gold", "silver", "bronze"];
  
  // Step 1: Match publications by keywords in order
  const orderedFeaturedPublications = titlesInOrder
    .map((keyword, index) => {
      const match = publications?.find(
        pub =>
          pub.title?.toLowerCase().includes(keyword) ||
          pub.slug?.toLowerCase().includes(keyword)
      );
      if (match) {
        return { ...match, level: levelOrder[index] };
      }
      return null;
    })
    .filter(Boolean); // Remove any nulls if no match found
  
  // Step 2: Remove duplicates by slug
  const uniqueFeatured = Array.from(
    new Map(orderedFeaturedPublications.map(item => [item?.slug, item])).values()
  );
  
  
  

  const getRecentPublications = (data: any[], maxAgeInDays = 180) => {
    const now = new Date();
    const cutoff = new Date(now.setDate(now.getDate() - maxAgeInDays));
    return data
      .filter(item => new Date(item.publishedAt) >= cutoff)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  };

  const filterByCategory = (data: any[], category: string) => {
    return data
      .filter(item => item.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  };

  const FILTER_OPTIONS = [
    { label: "Latest Publications", id: "latest_pub" },
    { label: "Academic Papers", id: "africonomics-papers" },
    { label: "Policy Papers", id: "policy_papers" },
    { label: "Afrindependent Edge", id: "afrindependent-edge" },
    { label: "Afrindependent Blog", id: "afrindependent-blog" },
  ];

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
    setFilteredPublications([]);
    setPublicationData([]);
    setLoading(true);
    setCurrentPage(0);

    if (!publications) return;

    let result =
      id === "latest_pub"
        ? getRecentPublications(publications, 120)
        : filterByCategory(publications, id);

    // Remove duplicates by slug
    const uniqueResults = result.filter((item, index, self) =>
      index === self.findIndex(t => t.slug === item.slug)
    );

    setFilteredPublications(uniqueResults);
  };


    useEffect(() => {
    handleFilterClick("latest_pub");
  }, [publications]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const results = await Promise.all(
        filteredPublications.map(async ({ slug, title, image, publishedAt, category }) => {
          const data = await getSinglePublication({ slug });
          return { ...data, slug, title, image, publishedAt, category };
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

  return (
    <>
    
      {/* Featured Section */}
      <section className=" py-10 px-5 lg:px-10">
      <div className="mb-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
              Featured Section
            </h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 lg:px-10">
          {uniqueFeatured.map(({ title, level, slug }:any) => (
            <Link

            href={`${paths.publications}/${slug}`}
              key={title}
              className={`border-l-4 p-5 shadow-md bg-white rounded-md ${
                level === "gold"
                  ? "border-[#FFD700]"
                  : level === "silver"
                  ? "border-[#C0C0C0]"
                  : "border-[#CD7F32]"
              }`}
            >
              <span
                className={`uppercase text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 ${
                  level === "gold"
                    ? "bg-[#FFD700]/20 text-[#FFD700]"
                    : level === "silver"
                    ? "bg-[#C0C0C0]/20 text-[#C0C0C0]"
                    : "bg-[#CD7F32]/20 text-[#CD7F32]"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)} Feature
              </span>
              <h3 className="text-lg font-semibold text-deepForest">{title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="text-black px-5 mt-10 lg:px-10">
        <div className="">
          <div className="">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] pl-4">
              Filter by type or topic to begin exploring in-depth, principled research.
            </h3>
          </div>

          <section className="bg-white mt-10  lg:px-10">
            <div className="">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                {FILTER_OPTIONS.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleFilterClick(item.id)}
                    className={`flex items-center justify-center gap-3 border-2 text-[#ffd700] dark:text-yellow-300 font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 ${
                      activeFilter === item.id
                        ? "bg-white text-deepForest border-[#00210d] dark:border-yellow-400 dark:hover:bg-yellow-400 hover:bg-white hover:text-deepForest"
                        : "bg-deepForest border-[#00210d] dark:border-yellow-400 hover:bg-white hover:text-deepForest dark:hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Publications Grid */}
              {loading ? (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#ffd700]"></div>
                </div>
              ) : currentItems.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map(({ slug, title, image, publishedAt, category, author, abstract, categoryName, intro }) => (
                      <div key={slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <Image height={100} width={100} src={image} alt={title} className="w-full h-52 object-cover" />
                        
                        <div className="p-5 flex flex-col gap-y-4">
                        <p className="inline-block  font-semibold rounded-full text-sm tracking-wider text-[#ffd700] uppercase w-fit">{categoryName}</p>
                          <h3 className="text-xl font-semibold text-deepForest mb-2">{title}</h3>
                          <p className="text-gray-700 text-base line-clamp-3">{intro ?? "No summary available."}</p>

                          <div className="flex items-center text-gray-700 gap-x-2">
                          <p>By {author?.name}</p> |
                         
                         <p className="text-sm text-gray-700 ">{new Date(publishedAt).toLocaleDateString()}</p>
                          </div>


                          <Link
                href={`${paths.publications}/${slug}?type=${activeFilter}`}
                className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
              >
                
                Read More
              </Link>
                        
                          
                        </div>
                      </div>
                    ))}
                  </div>

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
                      previousClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${currentPage === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                      nextClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${currentPage === pageCount - 1 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                      disabledClassName="opacity-50 cursor-not-allowed pointer-events-none"
                    />
                  </div>
                </>
              ) : (
                <p className="text-gray-500 text-center">No publications found for this filter.</p>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
