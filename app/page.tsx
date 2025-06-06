import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/page-sections/nav-bar";
import HomeSection from "./home/home";
import Library from "./home/library";
import VissionMission from "./home/vision-mission";
import Publications from "./home/publications";
import Subscribe from "./home/subscribe";
import Footer from "@/components/ui/page-sections/footer";
import Model from "./home/model";
import { IBM_Plex_Sans } from "next/font/google";
import FeaturedConcept from "./home/featuredConcept";
import Support from "./home/support";
import SupportSection from "./home/support";
import { BookOpen, MailCheck, HeartHandshake } from "lucide-react";



const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

export const metadata: Metadata = {
  title: "Afrindependent Institute",
  description: "Restoring African Intellectual and Economic Sovereignty",
  applicationName: "Afrindenpendent Institute",
  manifest: "https://www.afrindependent.org/",
  openGraph: {
    title: "Afrindependent Institute—Restoring African Intellectual and Economic Sovereignty",
    description:
      "Home of Africonomics. Advancing African monetary sovereignty, economic stability, and prosperity. ",
    type: "website",
    url: "https://www.afrindependent.org/",
    images: [
      {
        url: "https://www.afrindependent.org/hero_landing.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute—Restoring African Intellectual and Economic Sovereignty",
      },
    ],
    siteName: "Afrindependent Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrindependent Institute—Restoring African Intellectual and Economic Sovereignty",
    description:
      "Home of Africonomics. Advancing African monetary sovereignty, economic stability, and prosperity. ",
    site: "https://www.afrindependent.org/",
    images: [
      {
        url: "https://www.afrindependent.org/hero_landing.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute—Restoring African Intellectual and Economic Sovereignty",
      },
    ],
    creator: "@AfrindependentI",
  },
 keywords: [
  "Afrindependent Institute",
  "Africonomics",
  "African economic sovereignty",
  "African intellectual sovereignty",
  "sound money Africa",
  "postcolonial Africa",
  "economics",
  "African free enterprise",
  "natural-moral law",
  "structural justice",
  "decolonizing economics",
  "African philosophy",
  "free trade Africa",
  "African worldview",
  "truth and justice",
  "gold currency Africa",
  "the Nilar",
  "economic justice",
  "liberty Africa",
  "Manuel Tacanho",
  "African think tank",
  "Africa economic thought",
  "alternative to Western economics",
  "fiat money Africa",
  "anti-statism Africa",
  "African policy reform",
  "African economic truth",
  "African economic development",
  "monetary justice",
  "monetary policy Africa",
  "economics redefined",
  "civilization redefined",
  "African economics",
  "economic liberation",
  "the economy Africa",
  "human civilization",
  "human development",
  "intellectual leadership"
],

};

export default function Home() {

  
  return (
    <main className="overflow-x-hidden">
      <div className="h-[800px]  bg-pattern_bg  bg-cover overflow-hidden flex justify-center flex-col bg-center  relative">
        <div className="relative  h-full">
          <Navbar />
        </div>

        <div className="absolute inset-0   min-h-fit  lg:pl-10 lg:pr-16   xl:px-18 2xl:px-24 lg:pt-8 px-4 h-full flex items-center flex-col lg:flex-row justify-between overflow-hidden">
          <div
            className={`${ibmPlexSans.className} w-full md:w-6/12 xl:w-6/12 h-full  flex flex-col   justify-center gap-y-8 2xl:gap-y-10`}
          >
            <h1 className="text-black text-center  lg:text-left text-5xl leading-[50px]  font-bold lg:text-5xl  lg:leading-[60px] 2xl:leading-[70px] ">
              Restoring African Intellectual and Economic Sovereignty
            </h1>

            <p className=" text-black text-center  lg:text-left text-xl ">
              {" "}
              Grounded in Africonomics. Committed to Truth,{" "}
              <br className="hidden lg:block" /> Justice, and Liberty.
            </p>
         

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md mx-auto cursor-pointer relative z-10 lg:mx-0">
              {/* Explore */}
              <Link
                href="/concepts"
                className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Explore
              </Link>

              {/* Subscribe */}
              <a
                href="#subscribe"
                className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
              >
                <MailCheck className="w-5 h-5" />
                Subscribe
              </a>

              {/* Donate */}
              <Link
                href="/donate"
                className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
              >
                <HeartHandshake className="w-5 h-5" />
                Donate
              </Link>
            </div>
          </div>

          <div className="hidden lg:h-[480px] lg:w-[480px] xl:h-[500px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[550px] rounded-3xl relative bg-bg_home bg-center bg-cover  lg:flex">
        
          </div>
        </div>
      </div>

      <VissionMission />
      <FeaturedConcept />
      <Model />
      <Publications />
  
    <Subscribe  />
   
 
      <SupportSection />
      <Footer />
    </main>
  );
}
