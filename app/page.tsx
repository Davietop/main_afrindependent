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
import HomeHero from "./hero_home";



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
    <main className="overflow-x-hidden bg-white">
      <div className="h-fit   overflow-hidden flex justify-center flex-col bg-center  relative">
        <div className="relative  bg-white h-full">
          <Navbar />
        </div>

       
      </div>

       {/* hero section on the home route */}
      <HomeHero />
      {/* the section that completes the hero section on the home route */}
      <div className="w-full relative bottom-10 bg-[#181818]  h-fit block  md:hidden  flex flex-col text-base tracking-[1px]  py-6 px-4 space-y-6  ">
        <p className="text-base md:text-lg text-[#d0d5cd]">
          Grounded in Africonomics. Committed to Truth, Justice, and Liberty.
        </p>

        <div className="grid grid-cols-3 gap-4 ">
          <Link
            href="/concepts"
            className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
          >
            <BookOpen className="w-5 h-5 hidden sm:block" />
            Explore
          </Link>

          <a
            href="#subscribe"
            className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
          >
            <MailCheck className="w-5 sm:block hidden h-5" />
            Subscribe
          </a>

          <Link
            href="/donate"
            className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
          >
            <HeartHandshake className="hidden w-5 h-5 sm:block" />
            Donate
          </Link>
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
