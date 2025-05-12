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

  const isPaper = post.category === "africonomics-papers";

  return (
    <div className={` ${ibmPlexSans.className}`}>
      <div className="mx-5 lg:mx-14 border-b border-[#323232] pb-4 mb-8">
        <Link
          href={`${paths.publications}?type=${type}`}
          className="font-bold text-[#0E102A] lg:text-lg "
        >
          {post.categoryName}
        </Link>
      </div>
      <h1
        className={`px-5 lg:px-14 font-medium text-deepForest max-w-[860px] text-3xl lg:text-5xl leading-[34px] lg:leading-[60px]`}
      >
        {post.title}
      </h1>
      {isPaper ? <Paper post={post} /> : <Article post={post} />}
    </div>
  );
};

export default Post;
