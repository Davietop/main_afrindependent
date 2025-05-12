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
    <main className={`${ibmPlexSans.className} mt-20 xl:mt-0`}>
      <div className=" bg-white ">
        <section className="relative min-h-screen bg-deepForest flex items-center justify-center text-center px-6  ">
          <div className="absolute inset-0  bg-nilar_coin bg-cover bg-center opacity-40 z-0" />

          <div className="absolute inset-0  bg-opacity-80 z-0" />

          <div className="relative z-10 lg:max-w-5xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold lg:leading-tight mb-6">
              The Nilar: <br className="block md:hidden" />
              <span className="text-yellow-400">A Gold-Based Currency </span>
              <br className="hidden lg:block" />
              for African Economic Sovereignty
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10">
            Rooted in Africonomics. Grounded in justice. Built for freedom.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-green-950 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all">
                Read the Framework
              </button>
              <button className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-green-950 transition-all">
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
