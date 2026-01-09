"use client";
import { Button } from "@/components/ui/button";
import { FaFileAlt, FaBookOpen, FaVideo } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
import List from "../home/publications/list";
import { usePublications } from "../publications/publication-section";
import { useEffect, useState } from "react";
import { PublicationDto } from "@/lib/types";
import { getSinglePublication } from "@/service/sanity-queries";
import { Link } from "lucide-react";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

function PublicationsResearch() {
  const { data: publications } = usePublications({});
  const [publicationData, setPublicationData] = useState<PublicationDto[]>([]);
  const [publicationRelData, setPublicationRelData] = useState<
    PublicationDto[]
  >([]);

  const titlesInOrder = ["nilar"];

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

  const titlesInOrderFeat = ["fiat", "ruinous", "demystified", "cycle"];

  // Step 1: Match publications by keywords in order
  const orderedFeaturedPublicationsFeat = titlesInOrderFeat
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
  const uniqueFeaturedFeat = Array.from(
    new Map(
      orderedFeaturedPublicationsFeat.map((item) => [item?.slug, item])
    ).values()
  );

  const slugNilar = publications?.find(pub =>{
    return pub?.slug.includes('the-nilar-a-gold-based-framework-for-african-ec')
  })
  

useEffect(() => {
  if (!publications) return;

  const fetchPub = async () => {
    const test = publications.find(pub =>
      pub?.title?.trim().toLowerCase() ===
      'the nilar: a gold-based framework for african economic sovereignty and prosperity'.toLowerCase()
    );

    const slug = test?.slug;
    if (!slug) {
      console.log("Slug not found", test);
      return;
    }

    const results = await getSinglePublication({ slug });
    setPublicationData([results]);
  };

  fetchPub();
}, [publications]);

  

  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "");
  };

  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  }

  return (
    <div className={`${ibmPlexSans.className}  my-10`}>
      <div className="bg-white   md:px-5 lg:px-10">
        {/* <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
          Publications & Research
        </h3> */}
        <div>
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
            Publications & Research
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
              Publications & Research
            </h3>
          </div>
        </div>

        <p className=" text-lg mt-2 text-[#835C3B] font-normal ml-4 ">
          The intellectual foundation of the Nilar framework.
        </p>

        <div>
          <p className="mt-4   text-gray-700 text-lg ml-4">
            {" "}
            The Nilar is the product of moral clarity, sound economic reasoning,
            and a factual understanding of Africa’s postcolonial economic woes.
            Grounded in Africonomics, our publications offer the philosophical,
            historical, and practical insights that shape the vision and
            viability of the Nilar.
          </p>
        </div>
      </div>

      <section
        className={`bg-white text-gray-800 mt-6 px-5  ${ibmPlexSans.className}`}
      >
        <div className="max-w-full lg:w-11/12  mx-auto">
          {/* Featured Publication */}
          {publicationData && publicationData?.map(
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
              const slugData = uniqueFeatured[index];
              const datacheckNilar = publications?.find((pub) => {
                return pub.title === title;
              });

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
                <div key={index}>
                  <div className="text-black flex flex-col md:flex-row gap-x-10   w-full  ">
                    <div
                      className="h-[300px] w-full md:w-4/12 bg-cover bg-center rounded-xl "
                      style={{
                        backgroundImage: `url('${image}')`,
                      }}
                    ></div>

                    <div className="flex flex-col  w-full  md:w-8/12 gap-y-2 md:gap-y-6">
                      <div className="flex items-center mt-2 md:mt-0 gap-x-2">
                        <p>{author?.name}</p>|<p>{readableDate}</p>
                      </div>

                      <div className="flex flex-col gap-y-4">
                        <h1 className="text-xl lg:text-3xl font-bold">
                          {title}
                        </h1>
                        <p>{truncateText(cleanedText, 200)}</p>

                        <a
                          className="flex items-center justify-center gap-3 border-2 bg-deepForest text-base border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
                          href={`${paths.publications}/${datacheckNilar?.slug}?type=${category}`}
                        >
                          Read the Paper
                        </a>
                      </div>
                    </div>
                  </div>

                  {!isLast && <hr className="h-0.5 bg-[#ffd700] mt-6" />}
                </div>
              );
            }
          )}

          {/* Related Research & Commentary */}
          <div className=" mt-6 ">
            <h4 className="text-xl font-semibold mb-6 text-deepForest">
              Related Research & Commentary
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6  ">
              {uniqueFeaturedFeat.map(
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
                    intro,
                  }: any,
                  index: number
                ) => {
                  return (
                    <a
                      key={slug}
                      href={`${paths.publications}/${slug}?type=${category}`}
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
                            <p>Manuel Tacanho</p> |
                            <p className="text-sm text-gray-700">
                              {new Date(publishedAt).toLocaleDateString(
                                "en-GB"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PublicationsResearch;
