import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Subscribe from "@/app/home/subscribe";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import Share from "./share";
import { isoStringToDate } from "@/lib/utils";
import TextComponent from "./text-comp";
import List from "../list";
import Reaction from "./reaction";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Article = ({ post }: { post: PublicationDto }) => {
  return (
    <div className={`${ibmPlexSans.className}`}>
      <div className="px-5 lg:px-14 lg:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <p className="col-span-1 lg:col-span-3 leading-6 text-sm lg:text-base  mt-4 mb-4 lg:mb-0">
            {post?.intro}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:hidden  font-medium">
          <Link
            href={`${paths.authors}/${post?.author?.slug}`}
            className="capitalize leading-[12px] underline"
          >
            {post?.author?.name}
          </Link>
          <div className="h-4 w-[1px] bg-black"></div>
          <div>
            <span>{isoStringToDate(post.publishedAt)}</span>
          </div>
        </div>
        <div className="mt-6 lg:mt-8 lg:h-[614px] overflow-hidden flex items-center justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={1732}
            height={862}
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
      <section className="px-5 lg:px-14 grid grid-cols-1 lg:grid-cols-5">
        <article className="col-span-3 mt-6 lg:mt-10 overflow-x-hidden">
          <div className="min-w-full leading-6 lg:text-lg mb-[52px] text-deepForest prose prose-blockquote:bg-[#DEDEDE] prose-blockquote:rounded-lg lg:prose-blockquote:text-base prose-blockquote:font-normal prose-blockquote:px-6 prose-blockquote:py-8  prose-blockquote:after:bg-quote prose-blockquote:after:bg-[length:20px_auto] lg:prose-blockquote:after:bg-[length:40px_auto] prose-blockquote:after:absolute prose-blockquote:after:inset-0 prose-blockquote:after:-top-[6px] lg:prose-blockquote:after:-top-3 prose-blockquote:after:left-6 prose-blockquote:after:w-[40px] prose-blockquote:after:h-[40px] prose-blockquote:after:z-30 prose-blockquote:relative  prose-blockquote:after:bg-no-repeat prose-blockquote:not-italic prose-blockquote:border-none prose-a:decoration-deepForest prose-strong:font-bold prose-a:text-[#ffd700]"> 
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
              className="underline"
            >
              Creative Commons Attribution-NonCommercial 4.0 International
              License.
            </Link>
          </p>
          <Reaction />
          <div className=" p-5 rounded-[19px] bg-[#D9D9D9] mt-10">
            <p className=" font-medium text-lg text-deepForest mb-5">
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
                <p className="text-deepForest text-sm lg:text-base leading-[20px] lg:leading-8 ">
                  {post.author.about}
                </p>
                <Link
                  href={`${paths.authors}/${post?.author?.slug}`}
                  className="underline leading-[44px] font-medium text-[#ffd700] "
                >
                  See author&apos;s profile
                </Link>
              </div>
            </div>
          </div>
        </article>
        <aside className="hidden lg:flex flex-col items-end col-span-2">
          <div className="max-w-[278px] sticky top-0 pt-[67px] lg:pt-10">
            <p className=" uppercase font-light text-deepForest">
              Article Author
            </p>
            <Link
              href={`${paths.authors}/${post?.author?.slug}`}
              className="block capitalize mb-5 text-lg font-medium text-deepForest"
            >
              {post?.author?.name}
            </Link>
            <p className="">Published on</p>
            <p className=" text-lg leading-[25px] mb-5 font-medium">
              {isoStringToDate(post.publishedAt)}
            </p>
            <p className=" leading-[25px]">Share Publication</p>
            <Share title={post.title} />

            <div className="bg-deepForest text-base text-white font-inter_tight rounded-lg p-4 mt-7 lg:mt-9 text-center">
              <p>
                <Link
                  href={"#subscibe"}
                  className="underline font-semibold block"
                >
                  Subscribe
                </Link>{" "}
                Don&apos;t miss out! Subscribe to our newsletter to stay
                informed on our latest articles, news, and more. Gain valuable
                new insights delivered straight to your inbox.
              </p>
            </div>
            <div className="bg-[#ffd700] text-base text-deepForest  rounded-lg p-4 mt-7 lg:mt-9 text-center font-light">
              <p>
                <Link
                  href={paths.donate}
                  className="underline font-semibold block"
                >
                  Donate
                </Link>{" "}
                Partner with us in our mission to unlock Africa&apos;s
                prosperity. Your donation aligns you with our vision and
                empowers groundbreaking scholarly work towards this goal.
              </p>
            </div>
          </div>
        </aside>
      </section>
      <div className="px-5 lg:px-14 pt-10">
        <h2 className="mt-7 text-deepForest font-medium text-xl lg:text-[40px] leading-[40px] ">
          More by {post.author.name}
        </h2>
        <div className="bg-deepForest h-[2px] mt-2 mb-7 lg:mb-14"></div>
        <List
          authorSlug={post.author.slug}
          isComponent
          categories={[]}
          showViewMore={false}
        />
      </div>
      <div
        id="subscibe"
        className="mx-5 lg:mx-14 rounded-[20px] lg:rounded-[41px] overflow-hidden h-fit mt-16 lg:mt-36"
      >
       
      </div>
    </div>
  );
};

export default Article;
