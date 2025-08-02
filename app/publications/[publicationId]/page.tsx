import { Metadata, ResolvingMetadata } from "next";

import Navbar from "@/components/ui/page-sections/nav-bar";
import Footer from "@/components/ui/page-sections/footer";
import Post from "./post";
import { getSinglePublication } from "@/service/sanity-queries";

import { optimizeImage } from "next/dist/server/image-optimizer";
type Props = {
  params: { publicationId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const publication = await getSinglePublication({
    slug: params.publicationId,
  });

  const canonicalUrl = `https://www.afrindependent.org/publications/${params.publicationId}`;

  return {
    title: publication.title,
    description: publication.intro,
    applicationName: "Afrindependent Organisation",
    manifest: canonicalUrl,
    robots: { googleBot: { nocache: true } },
    openGraph: {
      title: publication.title,
      description: publication.intro,
      url: canonicalUrl,
      type: "article",
      images: [publication.image],
      siteName: "Afrindependent Organisation",
    },
    twitter: {
      card: "summary_large_image",
      title: publication.title,
      description: publication.intro,
      site: canonicalUrl,
      images: [publication.image],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      "African economic commentary",
      "postcolonial critique",
      "liberty and justice Africa",
      "African political economy",
      "African economies",
      "African politics",
      "African liberation",
      "geopolitics",
      "principled insights"
    ],
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

      <div className="  xl:mt-0">
        
        <Post post={data} />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Publication;
