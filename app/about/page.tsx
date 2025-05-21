import Image from "next/image";

import Navbar from "@/components/ui/page-sections/nav-bar";
import Hero from "./hero";
import ParallaxText from "@/components/parallex-text";
import Whatabout from "./whatabout";
import Ignite from "./ignite";
import Yard from "./yard";
import Founder from "./founder";
import Team from "./team";
import Footer from "@/components/ui/page-sections/footer";
import Faculty from "./faculty";
import { getFacultyMembers, getTeam } from "@/service/sanity-queries";
import { Metadata } from "next";
import VissionMission from "./visionMission";
import HistoryFounder from "./historyFounder";
import AfriDifferent from "./afriDifferent";
import Principle from "./principle";

export const metadata: Metadata = {
  title: "About Afrindependent",
  description: "An African school of philosophical and economic thought",
  applicationName: "Afrindenpendent Organisation",
  manifest: "https://afrindependent.org/about",
  openGraph: {
    title: "About Afrindependent",
    description: "An African school of philosophical and economic thought",
    images: [
      {
        url: "https://afrindependent.org/header-web-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    url: "https://afrindependent.org/about",
  },
  twitter: {
    title: "About Afrindependent",
    description: "An African school of philosophical and economic thought",
    images: [
      {
        url: "https://afrindependent.org/header-web-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    site: "https://afrindependent.org/about",
  },
  keywords: [
    "Pioneering Africonomics",
    "Advancing Africonomics",
    "Africonomics",
    "African Prosperity",
    "Home of Africonomics",
    "Africa’s Economic Heritage",
    "African Economies",
    "Free Trade",
    "Free Enterprise",
    "Sound Monetary System",
    "School of African Philosophical and Economic Thought",
    "Integrated African Economies",
    "Educational Think Tank in Africa",
    "Scholarly Think Tank in Africa",
    "Africa Nations",
    "Free Market",
    "Free Market Systems",
    "AfCFTA",
    "Africa Renaissance",
    "Economic Stability",
    "Economic Prosperity",
    "Independence",
  ],
};

const About = async () => {
  const team = await getTeam();
  const facultyMembers = await getFacultyMembers();

  return (
    <main className=" bg-white ">
      <div className="bg-white">
        <div className=" h-fit">
        <div className="">
        <Navbar />
      </div>
  


    
      <Hero />
        </div>
    
      </div>
     
     <VissionMission/>
     <HistoryFounder/>
     <AfriDifferent/>
     <Principle/>
    
      <Footer />
    </main>
  );
};

export default About;
