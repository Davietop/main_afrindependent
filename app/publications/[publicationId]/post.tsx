"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import Paper from "./paper";
import Article from "./article";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from 'next/font/google';
import Image from "next/image";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Post = ({ post }: { post: PublicationDto }) => {
  const typeParams = useSearchParams();

  const type = typeParams.get("type");


  const isPaper = post?.category === "africonomics-papers";
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
  
  return (
    <div className={`${ibmPlexSans.className} w-full mt-10 lg:w-10/12 lg:mx-auto`}>
  {/* Category Name & Back Link */}

 

  {/* Title */}
  <h1 className="px-5 lg:px-14 font-bold text-black w-full max-w-full text-2xl lg:text-4xl leading-tight lg:leading-[50px]">
    {post.title}
  </h1>



  {/* Content */}
  {isPaper ? <Paper post={post} /> : <Article post={post} />}
</div>

  );
};

export default Post;
