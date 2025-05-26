import { Metadata, ResolvingMetadata } from "next";

import Navbar from "@/components/ui/page-sections/nav-bar";
import Footer from "@/components/ui/page-sections/footer";
import Post from "./post";
import { getSinglePublication } from "@/service/sanity-queries";

import Link from "next/link";
import Head from "next/head";

type Props = {
  params: { publicationId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const publication = await getSinglePublication({
    slug: params.publicationId,
  });

  // const optimizedImage = {
  //   url: publication.image,
  //   width: 1200,
  //   height: 630,
  //   alt: publication.title,
  // };

  return {
    title: publication.title,
    description: publication.intro,
    applicationName: "Afrindenpendent Organisation",
    manifest: `https://www.afrindenpendent.org/publications/${params.publicationId}`,
    robots: { googleBot: { nocache: true } },
    openGraph: {
      title: publication.title,
      description: publication.intro,
      url: `https://www.afrindenpendent.org/publications/${params.publicationId}`,
      type: "article",
      // images: [optimizedImage],
      siteName: "Afrindenpendent Organisation",
    },
    twitter: {
      card: "summary_large_image",
      title: publication.title,
      description: publication.intro,
      site: `https://www.afrindenpendent.org/publications/${params.publicationId}`,
      // images: [optimizedImage],
    },
  };
}

const Publication = async ({
  params,
}: {
  params: { publicationId: string };
}) => {
  const data = await getSinglePublication({ slug: params.publicationId });
  return (
    <main className="bg-[#faf9f6]">
       
      <div className=" ">
        <Navbar />
      </div>

      <div className=" mt-20 xl:mt-0">
        
        <Post post={data} />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Publication;
