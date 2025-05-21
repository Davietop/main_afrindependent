"use client"
import React from "react";
import { FaBook, FaBalanceScale, FaGlobeAfrica, FaCoins, FaCompass, FaRegLightbulb } from "react-icons/fa";
import { IBM_Plex_Sans } from 'next/font/google';
import { motion } from "framer-motion"; // Import Framer Motion

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function HeroSection() {
  return (
    <header className={`${ibmPlexSans.className} `} >

 
<section className="relative bg-deepForest min-h-[600px] xl:min-h-screen mt-20 xl:mt-0 flex items-center justify-center px-6 py-20 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 z-0 bg-teacher bg-cover bg-center opacity-30" />

  {/* Overlay Content */}
  <div className="relative z-10 w-full text-center">
    <div className="max-w-5xl mx-auto flex flex-col gap-y-10 text-white">

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Key Concepts
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl md:text-3xl font-semibold text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        The Intellectual Architecture of Africonomics
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
       Explore the foundations of a distinctly human and principled approach to economics, jurisprudence, and other social sciences.
      </motion.p>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
        {[FaBook, FaBalanceScale, FaRegLightbulb, FaCompass, FaCoins, FaGlobeAfrica].map((Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Icon className="text-white text-3xl sm:text-4xl md:text-5xl" />
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>


     
    </header>
  );
}
