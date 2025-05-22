import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import PublicationSection, { usePublications } from "../publication-section";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { isoStringToDate } from "@/lib/utils";
import Share from "./share";
import TextComponent from "./text-comp";
import Reaction from "./reaction";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from 'next/font/google';
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SubscribeForm from "@/components/subscribe";
import { useSearchParams } from "next/navigation";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});
type Props = {
  params: {
    slug: string;
  };
};

const Paper = ({ post }: { post: PublicationDto }, {params}: Props) => {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
 
   const { data: publications } = usePublications({});
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

  const updatedPublications = publications
  ?.map(pub =>
    pub.slug === "the-nilar-the-path-to-african-economic-sovereignty-and-prosperity"
      ? { ...pub, category: "policy_papers" }
      : pub
  )
  .filter(pub =>
    pub.title !== post.title
  );

  const getDisplayCategoryName = (categoryName: string, type: string) => {
    if (categoryName === "Scholarly Papers") {
      return type === "policy_papers" ? "Policy Papers" : "Academic Papers";
    }
  
    const categoryMap: Record<string, string> = {
      "Afrindependent Blog": "Afrindependent Post",
      "Afrindependent Edge": "Afrindependent Lens",
    };
  
    return categoryMap[categoryName] || categoryName;
  };
  
    const filterByCategory = (data:any, category:any) => {
      const uniqueData = Array.from(new Map(data.map((item:any) => [item.slug, item])).values());
      return uniqueData
        .filter((item:any) => item.category === category)
        .sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    };

  
    const filteredData = filterByCategory(updatedPublications || [], type);

    filteredData.find((datFind:any)=>{
    console.log(datFind.title === post.title)
    })

    

    console.log(filteredData)
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  
    const handlePageClick = ({ selected }:any) => {
      setCurrentPage(selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);

    console.log(type)

  
  return (
    <section className={`${ibmPlexSans.className} px-5 lg:px-14`}>
      
      
      <div className="mt-6 lg:hidden w-full">
        <Link
          href={post.file}
          download={post.title}
          target="_blank"
          className="inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px] py-3 lg:py-4 px-6 lg:px-10 mb-4 lg:mb-14 hover:bg-deepForest max-w-[316px]"
        >
          Access PDF
          <AiFillFilePdf className="ml-4 text-white h-5 w-auto" />
        </Link>
        <p className=" text-lg lg:text-xl leading-[25px] lg:leading-[45px] mb-1 lg:mb-0">
          Share Publication
        </p>
        <Share title={post.title} />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-x-20 max-lg:gap-y-10">
        
        <article className="col-span-4  overflow-x-hidden">
            <div className="lg:flex font-medium mb-6 hidden items-center gap-x-3 mt-4">
          <div className="h-[50px] w-[50px] bg-founder bg-cover  rounded-full"></div>
          {/* <p>{post?.author.name}</p> */}
          <Link
            href={`${paths.authors}/${post?.author?.slug}`}
            className="text-base"
          >
            {post?.author?.name}
          </Link>|

               <p className="text-base">{isoStringToDate(post.publishedAt)}</p>|
          <p className="text-base">  {getDisplayCategoryName(post?.categoryName , type ?? "")}</p>
     
        </div>
     <div className="flex flex-wrap items-center gap-3 lg:hidden mb-4 font-medium">
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
      <div className="mb-6  overflow-hidden flex items-center justify-center">
        <Image
          src={post.image}
          alt={post.title}
          width={1732}
          height={862}
          className="w-full h-auto object-cover rounded-2xl object-center"
        />
      </div>
          <h3 className="font-semibold text-xl lg:text-2xl leading-[20px] lg:leading-[40px] mb-6 ">
            {type === "policy_papers" ? "Executive Summary:" : "Abstract:"}
            
          </h3>
          <div className="min-w-full leading-6 lg:text-lg  mb-[52px] text-black prose prose-blockquote:bg-[#DEDEDE] prose-blockquote:rounded-lg lg:prose-blockquote:text-base prose-blockquote:font-normal prose-blockquote:px-6 prose-blockquote:py-8  prose-blockquote:after:bg-quote prose-blockquote:after:bg-[length:20px_auto] lg:prose-blockquote:after:bg-[length:25px_auto] prose-blockquote:after:absolute prose-blockquote:after:inset-0 prose-blockquote:after:-top-[6px] prose-blockquote:after:left-6 prose-blockquote:after:w-full prose-blockquote:after:h-full prose-blockquote:after:z-30 prose-blockquote:relative  prose-blockquote:after:bg-no-repeat prose-blockquote:not-italic prose-blockquote:border-none prose-a:deepForest prose-strong:font-bold prose-a:text-deepForest">
        
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
                <p className="text-black  font-semibold">
                  {post.author.name}
                </p>
                <p className="text-[#828282] text-sm lg:text-base leading-[20px] lg:leading-8 ">
                  {post.author.about}
                </p>
                <Link
                  href={`${paths.authors}/${post?.author?.slug}`}
                  className="underline leading-[44px] font-medium text-black"
                >
                  See author&apos;s profile
                </Link>
              </div>
            </div>
          </div>
        </article>
        <aside className=" col-span-4 flex  lg:flex lg:flex-col   items-end lg:col-span-2">
          <div className="w-full sticky top-0 lg:pt-24">
            <Link
              href={post.file}
              download={post.title}
              target="_blank"
              className="hidden lg:inline-flex items-center justify-center bg-deepForest text-white max-lg:text-base border-none rounded-[8px] py-4 px-10  mb-8 hover:bg-  max-w-[316px]"
            >
              Access PDF
              <AiFillFilePdf className="ml-4 text-white h-5 w-auto" />
            </Link>
            
            <div className="relative w-full lg:w-[300px] hidden h-fit py-6 bg-world bg-contain border border-gray-300 bg-no-repeat bg-center rounded-xl overflow-hidden lg:flex items-center text-center flex-col justify-center px-2 gap-y-2">
              {/* White Overlay */}

              <div className="absolute inset-0 bg-white/80 z-0 rounded-lg" />
              {/* Content on top of overlay */}
              <div className="relative z-10 px-2 flex items-center flex-col text-black">
                <h1 className="font-bold text-lg">Share this Publication</h1>
                <p className=" text-base mt-6 mb-4">
                  {/* Hello, We’re content writer who is fascinated by content
                  fashion, celebrity and lifestyle. We help clients bring the
                  right content to the right people. */}
                </p>
                <Share title={post.title} />
              </div>
            </div>
            <div className="relative   w-full lg:w-[300px] h-fit py-6  border border-gray-300 bg-no-repeat bg-center rounded-xl overflow-hidden flex items-center text-center flex-col justify-center px-2 gap-y-2 mt-6">
              {/* White Overlay */}

              <div className="absolute inset-0 bg-white/70 z-0 rounded-lg" />
              {/* Content on top of overlay */}
              <div className="relative z-10 px-2 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">NewsLetter</h1>
                <p className="text-base">Join our intellectual movement</p>
                <SubscribeForm />
                <p className="text-base">
                  We respect your privacy. No spam — just thoughtful updates.
                  You can unsubscribe anytime.
                </p>
              </div>
            </div>
            
            <div className="relative  w-full lg:w-[300px] h-fit py-6  border border-gray-300 bg-no-repeat bg-center rounded-xl overflow-hidden flex items-center text-center flex-col justify-center px-2 gap-y-2 mt-6">
              {/* White Overlay */}

              <div className="absolute inset-0 bg-white/70 z-0 rounded-lg" />
              {/* Content on top of overlay */}
              <div className="relative z-10 px-2 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">Donate</h1>
                <p className="text-base">
                  Partner with us in our mission to unlock Africa prosperity.
                  Your donation aligns you with our vision and empowers
                  groundbreaking scholarly work towards this goal.
                </p>
                <Link href={paths.donate}>
                  <Button
                    type="submit"
                    className="flex items-center gap-2 bg-deepForest text-sm border-2  border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700]  font-medium px-10 py-1 rounded-full transition duration-200"
                  >
                    Donate
                  </Button>
                </Link>{" "}
              </div>
            </div>
            <div className="relative  w-full lg:w-[300px] h-fit py-6 border border-gray-300 bg-no-repeat bg-center rounded-xl overflow-hidden flex items-center text-center flex-col justify-center px-2 gap-y-2 mt-6">
              {/* White Overlay */}

              <div className="absolute inset-0 bg-white/70 z-0 rounded-lg" />
              {/* Content on top of overlay */}
              <div className="relative z-10 px-2 gap-y-4 flex items-center flex-col text-black">
                <h1 className="font-bold text-base">Article Submissions
                </h1>
                <p className="text-base">Share your voice. Shape the future.</p>

                <p className="text-base">
                At the Afrindependent Institute, we believe in the power of principled ideas to change societies. If you’re an aspiring or established writer, scholar, or thinker with bold insights grounded in truth, liberty, sound money, and structural justice—we welcome your contribution.
We accept submissions for two distinct publication platforms:

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
    {
      currentItems.length>=1 &&   
    <section className="mt-6">
  <h2 className="mb-2 text-black font-medium text-3xl leading-[70px]">
    More Publications
  </h2>

  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {currentItems?.slice(0, itemsPerPage)?.map(({ slug, title, image, publishedAt, category, categoryName }: any) => (
        <Link key={slug} href={`${paths.publications}/${slug}?type=${category}`}>
          <div className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition min-h-[480px]">
            <div
              className="h-52 w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="flex flex-col justify-between flex-grow p-5 gap-y-4">
              <p className="inline-block font-semibold rounded-full text-sm tracking-wider text-[#ffd700] uppercase w-fit">
                {categoryName === "Scholarly Papers" ? "Academic Papers" :
                 categoryName === "Afrindependent Blog" ? "Afrindependent Post" :
                 categoryName === "Afrindependent Edge" ? "Afrindependent Lens" :
                 categoryName}
              </p>
              <h3 className="text-xl font-semibold text-deepForest mb-2">
                {title}
              </h3>
             
              <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                <p>  {post?.author?.name}</p> |
                <p className="text-sm text-gray-700">
                  {new Date(publishedAt).toLocaleDateString("en-GB")}
                </p>
              </div>
              
              
            </div>
          </div>
        </Link>
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
  </div>
</section>

    }

    </section>
  );
};

export default Paper;
