// app/publications/page.tsx
import { Metadata } from "next";
import Navbar from "@/components/ui/page-sections/nav-bar";
import List from "./list";
import Footer from "@/components/ui/page-sections/footer";
import { getCategories } from "@/service/sanity-queries";
import { IBM_Plex_Sans } from "next/font/google";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import Filters from "./filters";
import Page from "../dashboard/page";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ Fixed: searchParams is now a Promise in Next.js 15
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}): Promise<Metadata> {
  const params = await searchParams; // must await

  const baseUrl = "https://www.afrindependent.org/publications";
  const canonicalUrl = params?.filter
    ? `${baseUrl}?filter=${params.filter}`
    : baseUrl;

  const description =
    "We produce various publications, including scholarly papers, commentary articles, and blog posts";

  return {
    title: "Afrindependent Publications",
    description,
    applicationName: "Afrindependent Organisation",
    manifest: baseUrl,
    openGraph: {
      title: "Afrindependent Publications",
      description,
      images: ["https://www.afrindependent.org/pub_lica.jpg"],
      url: canonicalUrl,
    },
    twitter: {
      title: "Afrindependent Publications",
      description,
      images: ["https://www.afrindependent.org/pub_lica.jpg"],
      site: canonicalUrl,
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
      "principled insights",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// ✅ Publications component also needs searchParams as Promise
const Publications = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const params = await searchParams; // await here too
  const categories = await getCategories();

  return (
    <main className={`${ibmPlexSans.className} bg-white`}>
      <div>
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center bg-publication h-[500px] bg-cover bg-center xl:mt-0 py-24 px-4 sm:px-6 lg:px-8">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-deepForest opacity-80 z-0"></div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <svg
            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-10 text-gray-300"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern)" />
          </svg>
        </div>

        {/* Main content */}
         <div className="relative  max-w-3xl  mx-auto text-center z-20">
          <div className="absolute  inset-0 -z-10 bg-gradient-to-b from-violet-100/20 via-transparent to-transparent blur-xl"></div>

          <h1 className="text-4xl pt-10 xl:pt-0 sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Publications
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#ffd700] max-w-6xl mx-auto leading-relaxed">
            Explore the Afrindependent Institute’s original research, essays,
            and frameworks advancing African intellectual and economic
            sovereignty.
          </p>

          {/* Clean, minimal input layout */}
          <div className="mt-8 max-w-md mx-auto">
            <Page />
          </div>
        </div>
       
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white px-5 py-6 lg:px-10">
        <div>
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-deepForest border-l-4 border-[#ffd700] pl-4">
              Ideas with Purpose. Research with Principle.
            </h3>
          </div>

          <div className="space-y-4 text-gray-800 text-base lg:text-lg leading-relaxed">
            <p>
              The Afrindependent Institute produces original, paradigm-shifting
              publications grounded in Africonomics—a school of thought
              advancing African intellectual and economic sovereignty through
              the natural-moral law principles of truth, justice, liberty, and
              nonaggression.
            </p>
            <p>
              Explore our wide-ranging works, from policy papers and academic
              essays to in-depth commentary and strategic insights. Every piece
              is guided by a commitment to natural-moral law, African dignity,
              and principled solutions for postcolonial transformation.
            </p>
          </div>
        </div>
      </section>

      <List categories={categories} />
      <Footer />
    </main>
  );
};

export default Publications;
