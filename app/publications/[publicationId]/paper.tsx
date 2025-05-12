import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import PublicationSection from "../publication-section";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { isoStringToDate } from "@/lib/utils";
import Share from "./share";
import TextComponent from "./text-comp";
import Reaction from "./reaction";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Paper = ({ post }: { post: PublicationDto }) => {
  return (
    <section className={`${ibmPlexSans.className} px-5 lg:px-14`}>
      <div className="flex flex-wrap items-center gap-2 lg:gap-4  font-medium lg:text-lg leading-[28px] lg:leading-[35px] mt-4">
        <Link
          href={`${paths.authors}/${post?.author?.slug}`}
          className="capitalize leading-[12px] underline"
        >
          {post?.author?.name}
        </Link>
        <div className="h-5 w-[2px] bg-black"></div>
        <div>
          <span>{isoStringToDate(post.publishedAt)}</span>
        </div>
      </div>
      <div className="mt-6 lg:mt-14 lg:h-[614px] overflow-hidden flex items-center justify-center">
        <Image
          src={post.image}
          alt={post.title}
          width={1732}
          height={862}
          className="w-full h-auto object-cover object-center"
        />
      </div>
      <div className="mt-14 lg:hidden w-full">
        <Link
          href={post.file}
          download={post.title}
          target="_blank"
          className="inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px] py-3 lg:py-4 px-6 lg:px-10 mb-7 lg:mb-14 hover:bg-deepForest max-w-[316px]"
        >
          Access PDF
          <AiFillFilePdf className="ml-4 text-white h-5 w-auto" />
        </Link>
        <p className=" text-lg lg:text-xl leading-[25px] lg:leading-[45px] mb-1 lg:mb-0">
          Share Publication
        </p>
        <Share title={post.title} />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-5 max-lg:gap-y-10">
        <article className="col-span-3 pt-14 lg:pt-28 overflow-x-hidden">
          <h3 className="font-medium text-xl lg:text-[40px] leading-[20px] lg:leading-[40px] mb-6 ">
            Abstract:
          </h3>
          <div className="min-w-full leading-6 lg:text-lg  mb-[52px] text-deepForest prose prose-blockquote:bg-[#DEDEDE] prose-blockquote:rounded-lg lg:prose-blockquote:text-base prose-blockquote:font-normal prose-blockquote:px-6 prose-blockquote:py-8  prose-blockquote:after:bg-quote prose-blockquote:after:bg-[length:20px_auto] lg:prose-blockquote:after:bg-[length:40px_auto] prose-blockquote:after:absolute prose-blockquote:after:inset-0 prose-blockquote:after:-top-[6px] prose-blockquote:after:left-6 prose-blockquote:after:w-full prose-blockquote:after:h-full prose-blockquote:after:z-30 prose-blockquote:relative  prose-blockquote:after:bg-no-repeat prose-blockquote:not-italic prose-blockquote:border-none prose-a:deepForest prose-strong:font-bold prose-a:text-[#ffd700]">
        
            <TextComponent value={post.abstract} />
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
          <div className="p-5 rounded-[19px] bg-[#D9D9D9] mt-14">
            <p className=" font-medium text-lg text-[#717171] mb-5">
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
                <p className="text-deepForest  font-semibold">
                  {post.author.name}
                </p>
                <p className="text-[#828282] text-sm lg:text-base leading-[20px] lg:leading-8 ">
                  {post.author.about}
                </p>
                <Link
                  href={`${paths.authors}/${post?.author?.slug}`}
                  className="underline leading-[44px] font-medium text-deepForest"
                >
                  See author&apos;s profile
                </Link>
              </div>
            </div>
          </div>
        </article>
        <aside className="hidden lg:flex flex-col items-end col-span-2">
          <div className="w-full lg:max-w-[278px] sticky top-0 lg:pt-28">
            <Link
              href={post.file}
              download={post.title}
              target="_blank"
              className="inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px] py-3 lg:py-4 px-6 lg:px-10 mb-7 lg:mb-14 hover:bg-deepForest max-w-[316px]"
            >
              Access PDF
              <AiFillFilePdf className="ml-4 text-white h-5 w-auto" />
            </Link>
            <p className="">Published on</p>
            <p className=" text-lg leading-[25px] lg:leading-[50px] mb-7 lg:mb-4">
              {isoStringToDate(post.publishedAt)}
            </p>
            <p className=" text-lg leading-[25px] lg:leading-[45px] mb-1 lg:mb-0">
              Share Publication
            </p>
            <Share title={post.title} />
          </div>
        </aside>
      </section>
      <section className="mt-24 lg:mt-52">
        <h2 className="mb-2 lg:mb-20 text-deepForest font-medium text-[40px] lg:text-[77px] leading-[70px] ">
          More Publications
        </h2>
        <PublicationSection filter={"africonomics-papers"} />
      </section>
      <div className="flex justify-center">
        <Link
          href={paths.publications}
          className="bg-transparent flex items-center justify-center gap-5 border-b-[2px] border-[#ffd700] w-fit mt-16 hover:bg-transparent px-0"
        >
          <span className="font-medium  text-center leading-[19px] lg:leading-[40px] text-deepForest text-lg lg:text-3xl">
            View more publications
          </span>
          <FaArrowDown className="text-[#ffd700] "/>
     
        </Link>
      </div>
    </section>
  );
};

export default Paper;
