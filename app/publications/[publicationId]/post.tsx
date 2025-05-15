"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import Paper from "./paper";
import Article from "./article";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Post = ({ post }: { post: PublicationDto }) => {
  const typeParams = useSearchParams();

  const type = typeParams.get("type");

  const isPaper = post?.category === "africonomics-papers";

  return (
    <div className={` ${ibmPlexSans.className} w-full lg:w-10/12 lg:mx-auto `}>
      <div className="mx-5 lg:mx-14  pb-4 ">
        <Link
          href={`${paths.publications}?type=${type}`}
          className="font-bold text-[#0E102A] text-base lg:text-lg "
        >
          
          {post.categoryName === "Scholarly Papers" ? "Academic Papers" : post.categoryName === "Afrindependent Blog" ? "Afrindependent Post" : post.categoryName === "Afrindependent Edge"? "Afrindependent Lens" : post.categoryName}
        </Link>
      </div>
      <h1
        className={`px-5 lg:px-14 font-bold text-black max-w-11/12 w-full lg:w-9/12 text-3xl lg:text-4xl leading-[34px] lg:leading-[50px]`}
      >
        {post.title}
      </h1>
      {isPaper ? <Paper post={post} /> : <Article post={post} />}
    </div>
  );
};

export default Post;
