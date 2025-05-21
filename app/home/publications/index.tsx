"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import List from "./list";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { IBM_Plex_Sans } from 'next/font/google';
import Videos from "../embedVideo";
import { PlayCircle, Youtube, BellRing } from "lucide-react";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Publications = () => {
  return (
    <div className="bg-white pt-10">
         <div  className="bg-white pb-6 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
      Latest Publications
     </h3>
          </div>


        <section className={`${ibmPlexSans.className}      bg-white  text-white   relative overflow-hidden`}>
      
    
  
      

  
     
     <div className="px-5">
     <List />
     </div>

      <section className="dark:bg-[#0f1c16] mt-6 mb-10 ">
      <div className="mb-12">
      <div  className="bg-white pb-6 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
     Most Recent Videos
     </h3>
          </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-full text-center lg:px-10 px-5">
          Explore insights and commentary from the Afrindependent Institute. Our first video series is launching soon.
        </p>
      </div>

      <div className="flex flex-col w-10/12 mx-auto items-center justify-center bg-white dark:bg-[#1a2c23] border border-dashed border-yellow-400 rounded-xl shadow-md py-16 px-6 sm:px-12"> 
        <Youtube className="text-yellow-400 w-16 h-16 mb-4" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          First Video Series Coming Soon
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md text-center text-base md:text-lg">
          Stay tuned as we bring Africonomics to life through thought-provoking video content.
        </p>
       <a  href="#subscribe">
       <button className="flex items-center gap-2 bg-deepForest border-2 border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700] font-medium px-6 py-2 rounded-full transition duration-200">
          <BellRing className="w-5 h-5" />
          Subscribe for Updates
        </button>
       </a>
      </div>
    </section>


 
   
    </section>
    </div>
  
  );
};

export default Publications;
