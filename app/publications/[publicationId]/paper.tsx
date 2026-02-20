import * as React from "react";

import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import PublicationSection, { usePublications } from "../publication-section";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { isoStringToDate } from "@/lib/utils";
import Share from "./share";
import TextComponent from "./text-comp";
import Reaction from "./reaction";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SubscribeForm from "@/components/subscribe";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { sanityClient } from "@/service/sanity";
import { getSinglePublication } from "@/service/sanity-queries";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});
type Props = {
  params: {
    slug: string;
  };
};

const Paper = ({ post }: { post: PublicationDto }) => {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const { data: publications, isLoading, mutate, key } = usePublications({});
  const [updatedPublication, setUpdatedPub] = useState<PublicationDto | null>(
    null,
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [url, setUrl] = useState("");
  const itemsPerPage = 6;

  const updatedPublications = publications?.filter(
    (pub) => pub.title !== post.title,
  );

  const filterByCategory = (data: any, category: any) => {
    const uniqueData = Array.from(
      new Map(data.map((item: any) => [item.slug, item])).values(),
    );
    return uniqueData
      .filter((item: any) => item.category === category)
      .sort(
        (a: any, b: any) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  };

  const filteredData = filterByCategory(
    updatedPublications || [],
    type === "latest_pub" ? post.category : type,
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    const subscription = sanityClient
      .listen('*[_type == "publications"]')
      .subscribe((update) => {
        if (update.result?._type === "publications") {
          const slug = update.result?.slug?.current;

          setTimeout(() => {
            getSinglePublication({ slug }).then((data) => {
              setUpdatedPub(data);
            });
          }, 120000);
        }
      });

    return () => subscription.unsubscribe(); // Clean up on unmount
  }, [key, mutate]);

  return (
    <section className={`pt-20 xl:pt-0 ${ibmPlexSans.className} px-5 lg:px-14`}>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.intro} />
        <meta property="og:image" content={post?.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="mt-4 lg:hidden w-full">
        <h1 className="col-span-full mb-6  font-bold text-black w-full max-w-full text-2xl lg:text-4xl leading-tight lg:leading-[50px]">
          {post.title}
        </h1>
        <Link
          href={post.file}
          download={post.title}
          target="_blank"
          className="inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px]     mb-4 p-3 hover:bg-deepForest max-w-fit"
        >
          <p className="text-sm">Access PDF</p>
          <AiFillFilePdf className="ml-2 text-white h-4 w-auto" />
        </Link>
        <p className=" text-base font-semibold lg:text-xl leading-[25px] lg:leading-[45px] mb-4 lg:mb-0">
          Share this Publication
        </p>
        <Share title={post.title} />
      </div>
      <div className="w-full lg:w-8/12">
        <h1 className="col-span-full hidden lg:block font-bold text-black w-full max-w-full text-2xl lg:text-4xl leading-tight lg:leading-[50px]">
          {post.title}
        </h1>
        <div className="lg:flex font-medium mb-3 hidden items-center gap-x-3 mt-4">
          <div className="h-[50px] w-[50px] bg-founder bg-cover  rounded-full"></div>
          <Link
            href={`${paths.authors}/${post?.author?.slug}`}
            className="text-sm lg:text-base"
          >
            {post?.author?.name}
          </Link>{" "}
          <p className="font-bold">|</p>
          <p className="text-sm lg:text-base">
            {isoStringToDate(post.publishedAt)}
          </p>{" "}
          <p className="font-bold">|</p>
          <a
            href={
              post?.categoryName === "Afrindependent Lens"
                ? "/publications?filter=afrindependent-lens#filter"
                : post?.categoryName === "Afrindependent Post"
                  ? "/publications?filter=afrindependent-post#filter"
                  : post?.categoryName === "Policy Papers"
                    ? "/publications?filter=policy-papers"
                    : "/publications?filter=academic-papers#filter"
            }
            className="flex underline  w-fit items-center gap-2 text-[#0E102A] text-sm lg:text-base font-bold hover:underline"
          >
            <img src="/arrow.png" height={20} width={20} alt="back icon" />
            <p className="text-sm lg:text-base"> {post?.categoryName}</p>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 lg:hidden mb-4 font-medium">
          <Link
            href={`${paths.authors}/${post?.author?.slug}`}
            className="capitalize text-sm lg:text-base leading-[12px] underline"
          >
            {post?.author?.name}
          </Link>{" "}
          <p className="font-bold">|</p>
          <div>
            <span className="text-sm lg:text-base">
              {isoStringToDate(post.publishedAt)}
            </span>
          </div>{" "}
          <p className="font-bold">|</p>
          <a
            href={
              post?.categoryName === "Afrindependent Lens"
                ? "/publications?filter=afrindependent-lens#filter"
                : post?.categoryName === "Afrindependent Post"
                  ? "/publications?filter=afrindependent-post#filter"
                  : post?.categoryName === "Policy Papers"
                    ? "/publications?filter=policy-papers"
                    : "/publications?filter=academic-papers#filter"
            }
            className="flex underline w-fit items-center gap-2 text-[#0E102A] text-sm lg:text-base font-bold hover:underline"
          >
            <p className="text-sm lg:text-base underline">
              {" "}
              {post?.categoryName}
            </p>
          </a>
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-x-20 max-lg:gap-y-8">
        <article className="col-span-4  overflow-x-hidden">
          <div className="mt-5 mb-5">
            {/* Category Name Heading */}

            {/* Back Link */}
          </div>
          <div className="mb-6  overflow-hidden flex items-center justify-center">
        
            <Image
               src={`${post.image}?w=800&h=500&q=80`}
              alt={post.title}
              width={1732}
              height={862}
              className="w-full h-auto object-cover rounded-2xl object-center"
            />
          </div>
          <h3 className="font-semibold text-xl lg:text-2xl leading-[20px] lg:leading-[40px] mb-6 ">
            {type === "policy_papers" || post.category === "policy-papers"
              ? "Executive Summary:"
              : "Abstract:"}
          </h3>
          <div className="min-w-full leading-6 lg:text-lg  mb-[52px] text-black prose prose-blockquote:bg-[#DEDEDE] prose-blockquote:rounded-lg lg:prose-blockquote:text-base prose-blockquote:font-normal prose-blockquote:px-6 prose-blockquote:py-8  prose-blockquote:after:bg-quote prose-blockquote:after:bg-[length:20px_auto] lg:prose-blockquote:after:bg-[length:25px_auto] prose-blockquote:after:absolute prose-blockquote:after:inset-0 prose-blockquote:after:-top-[6px] prose-blockquote:after:left-6 prose-blockquote:after:w-full prose-blockquote:after:h-full prose-blockquote:after:z-30 prose-blockquote:relative  prose-blockquote:after:bg-no-repeat prose-blockquote:not-italic prose-blockquote:border-none prose-a:deepForest prose-strong:font-bold prose-a:text-deepForest">
            <TextComponent
              value={
                updatedPublication === null
                  ? post.abstract
                  : updatedPublication?.abstract
              }
            />
          </div>
          <div className="mt-5 mb-2">
            <Image
              src="/by-nc.svg"
              alt=""
              width={117}
              height={22}
              className="h-5 w-auto"
            />
          </div>
          <p className=" text-sm  leading-6 text-[#878787]">
            This work is licensed under a{" "}
            <Link
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nohemi underline"
            >
              Creative Commons Attribution-NonCommercial 4.0 International
              License.
            </Link>
          </p>
          <Reaction />
          <div className=" p-5 rounded-[19px] bg-[#D9D9D9] mt-10">
            <p className=" font-medium text-lg text-black mb-5">
              About the author
            </p>
            <div className="flex gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={100}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-black  font-semibold">{post.author.name}</p>
                <p className="text-black text-sm lg:text-base leading-[20px] lg:leading-8 ">
                  {post.author.about}
                </p>
                <Link
                  href={`${paths.authors}/${post?.author?.slug}`}
                  className="underline leading-[44px] font-medium text-deepForest "
                >
                  See author&apos;s profile
                </Link>
              </div>
            </div>
          </div>
        </article>
        <aside className=" col-span-4 flex  lg:flex lg:flex-col  mt-5 items-end lg:col-span-2">
          <div className="mx-auto  sticky flex flex-wrap lg:flex-col gap-x-6 gap-y-6 top-0">
            <div className="w-full ">
              <Link
                href={post.file}
                download={post.title}
                target="_blank"
                className="hidden lg:inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px] py-3 px-5     w-fit"
              >
                Access PDF
                <AiFillFilePdf className="ml-4 text-white h-5 w-auto" />
              </Link>
            </div>
            <div className="hidden lg:flex w-full lg:w-[300px] flex-col items-center text-center rounded-xl overflow-hidden border border-gray-200 bg-white text-black shadow-md">
              {/* green Accent Bar */}
              <div className="w-full h-[20px] bg-deepForest" />

              {/* Content */}
              <div className="px-4 py-6 flex flex-col items-center space-y-4 ">
                <h1 className="font-bold text-base">Share this Publication</h1>

                <p className="text-sm text-black">
                  Advance economic truth and justice. Share this publication
                  with your community.
                </p>

                <Share title={post.title} />
              </div>
            </div>
            <div className=" w-full lg:w-[300px] flex-col items-center text-center rounded-xl overflow-hidden border border-gray-200 bg-white text-black shadow-md">
              {/* green Accent Bar */}
              <div className="w-full h-[20px] bg-deepForest" />

              {/* Content */}
              <div className="relative z-10 py-6 px-4 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">Newsletter</h1>
                <p className="text-sm">
                  Join the movement for African sovereignty and global
                  civilizational renewal
                </p>
                <SubscribeForm post={"post"} />
                <p className="text-sm">
                  No spam—just truthful content and reliable insights. You can
                  unsubscribe anytime.
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-[300px] flex-col items-center text-center rounded-xl overflow-hidden border border-gray-200 bg-white text-black shadow-md">
              {/* green Accent Bar */}
              <div className="w-full h-[20px] bg-deepForest" />

              {/* Content */}
              <div className="relative z-10 px-4 py-6 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">Donate</h1>
                <p className="text-sm">
                  Partner with us in our mission to advance African intellectual
                  independence and economic prosperity. Your donation aligns you
                  with our transformative vision and empowers groundbreaking
                  work.
                </p>
                <Link href={paths.donate}>
                  <Button
                    type="submit"
                    className="flex items-center gap-2 bg-deepForest text-sm border-2  border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700]  font-medium px-10 py-1 rounded-full transition duration-200"
                  >
                    Donate
                  </Button>
                </Link>{" "}
                <p className="text-sm text-black">
                  Help restore truth in economics and dignity in society.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[300px] flex-col items-center text-center rounded-xl overflow-hidden border border-gray-200 bg-white text-black shadow-md">
              {/* green Accent Bar */}
              <div className="w-full h-[20px] bg-deepForest" />

              {/* Content */}
              <div className="relative z-10 py-6 px-4 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">Article Submissions</h1>
                <p className="text-sm font-medium">
                  Share your voice. Shape the future.
                </p>
                <p className="text-sm">
                  At the Afrindependent Institute, we believe in the power of
                  principled ideas to change societies. If you’re an aspiring or
                  established writer, scholar, or thinker with bold insights
                  grounded in truth, liberty, sound money, and structural
                  justice—we welcome your contribution.
                </p>
                <Link href={`${paths.getInvolved}/#submit`}>
                  <Button
                    type="submit"
                    className="flex items-center gap-2 bg-deepForest text-sm border-2  border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700]  font-medium px-10 py-1 rounded-full transition duration-200"
                  >
                    Submit an article
                  </Button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </aside>
      </section>
      {currentItems.length >= 1 && (
        <section className="mt-6">
          <h2 className="mb-2 text-black font-medium text-3xl leading-[70px]">
            More Publications
          </h2>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems
                ?.slice(0, itemsPerPage)
                ?.map(
                  ({
                    slug,
                    title,
                    image,
                    publishedAt,
                    category,
                    categoryName,
                  }: any) => (
                    <Link
                      key={slug}
                      href={`${paths.publications}/${slug}?type=${category}`}
                    >
                      <div className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition min-h-[480px]">
                        <div
                          className="h-52 w-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                        <div className="flex flex-col justify-between flex-grow p-5 gap-y-4">
                          <p className="inline-block font-semibold rounded-full text-sm tracking-wider text-[#ffd700] uppercase w-fit">
                            {categoryName === "Scholarly Papers"
                              ? "Academic Papers"
                              : categoryName === "Afrindependent Blog"
                                ? "Afrindependent Post"
                                : categoryName === "Afrindependent Edge"
                                  ? "Afrindependent Lens"
                                  : categoryName}
                          </p>
                          <h3 className="text-xl font-semibold text-deepForest mb-2">
                            {title}
                          </h3>

                          <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                            <p> {post?.author?.name}</p> |
                            <p className="text-sm text-gray-700">
                              {new Date(publishedAt).toLocaleDateString(
                                "en-GB",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ),
                )}
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
                previousClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${currentPage === 0 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                nextClassName={`px-4 py-2 rounded border border-gray-300 text-sm ${currentPage === pageCount - 1 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                disabledClassName="opacity-50 cursor-not-allowed pointer-events-none"
              />
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Paper;
