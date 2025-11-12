"use client";
import { usePublications } from "@/app/publications/publication-section";
import Link from "next/link";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { useState } from "react";
import ReactPaginate from "react-paginate";

type AuthorName = {
  firstName: string;
  lastName: string;
};

const LatestPub: React.FC<AuthorName> = ({ firstName, lastName }) => {
  const { data: publications } = usePublications({});
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const getRecentPublications = (data: any, maxAgeInDays = 180) => {
    const now = new Date();

    const cutoff = new Date(now.setDate(now.getDate() - maxAgeInDays));
    return publications
      ?.filter((item: any) => new Date(item.publishedAt) >= cutoff)
      .sort(
        (a: any, b: any) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  };

  const latest = getRecentPublications(publications, 120)!;
  const offset = currentPage * itemsPerPage;
  const currentItems = latest?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(latest?.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="pb-6 px-5 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems?.map(
          ({
            slug,
            title,
            image,
            publishedAt,
            author,
            intro,
            category,
          }: any) => (
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
                    <p>
                      {firstName} {lastName}
                    </p>{" "}
                    |
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
    </div>
  );
};

export default LatestPub;
