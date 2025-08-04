"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiOutlineScale } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});
import { ShieldCheck, Scale, Globe2 } from "lucide-react"; // Example using lucide-react icons



const Hero = () => {
  const ref = useRef(null);

  // Scroll-tied motion (parallax effect)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  return (
    <main className={`${ibmPlexSans.className} pt-16 xl:pt-0   xl:mt-0`}>
      <div className=" bg-white  ">
        <section className="relative py-16  xl:py-32 min-h-fit bg-deepForest flex items-center justify-center text-center px-6  ">
          <div className="absolute inset-0  bg-nilar_coin bg-cover bg-center opacity-30 z-0" />

          <div className="absolute inset-0  bg-opacity-80 z-0" />

          <div className="relative w-full z-10 lg:max-w-5xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl leading-snug font-extrabold lg:leading-tight mb-6 lg:mb-6">
              The Nilar: <br className="block md:hidden" />
            A Gold-Based Currency 
         
              for African Economic Sovereignty
            </h1>

            <p className="text-lg md:text-xl mb-6 text-[#ffd700] lg:mb-6">
            Rooted in Africonomics. Grounded in justice. Built for Prosperity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button className="flex items-center justify-center gap-3 border-2 bg-deepForest border-deepForest dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-3xl shadow-md transition duration-300">
                Read the Framework
              </button>
              <button className="flex items-center justify-center gap-3 border-2 bg-deepForest border-deepForest dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-3xl shadow-md transition duration-300">
                Explore the Vision
              </button>
            </div>
          </div>
        </section>
      </div>
     


 

    
    </main>
  );
};

export default Hero;
