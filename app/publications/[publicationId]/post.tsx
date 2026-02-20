"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import Paper from "./paper";
import Article from "./article";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { PublicationDto } from "@/lib/types";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const Post = ({ post }: { post: PublicationDto }) => {
  const typeParams = useSearchParams();

  const type = typeParams.get("type");

  const isPaper =
    post?.category === "academic-papers" || post?.category === "policy-papers";

  return (
    <div
      className={`${ibmPlexSans.className} w-full  xl:w-10/12 lg:mt-6 lg:mx-auto`}
    >
      {/* Category Name & Back Link */}

      {/* Content */}
      {isPaper ? <Paper post={post} /> : <Article post={post} />}
    </div>
  );
};

export default Post;
