"use client";
import React from "react";
import {
  FaBook,
  FaBalanceScale,
  FaGlobeAfrica,
  FaCoins,
  FaCompass,
  FaRegLightbulb,
} from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
import { motion } from "framer-motion"; // Import Framer Motion

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <header className={`${ibmPlexSans.className} pt-20 xl:pt-0 xl:mt-0`}>
      <section className="relative bg-deepForest py-16 xl:py-32 min-h-fit flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-cover bg-key_concepts bg-center opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start gap-y-12 text-center xl:text-left">
            {/* Heading and Subheading */}
            <div className="flex flex-col gap-y-6 max-w-2xl">
              <motion.h1
                className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl text-white font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Key Concepts
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="font-medium text-[#ffd700]">
                  Explore the foundations
                </span>{" "}
                of a distinctly human and principled approach to economics,
                jurisprudence, and the broader social sciences.
              </motion.p>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
              {[
                { Icon: FaBook, label: "Truth" },
                { Icon: FaBalanceScale, label: "Justice" },
                { Icon: FaRegLightbulb, label: "Philosophy" },
                { Icon: FaCompass, label: "Moral Clarity" },
                { Icon: FaCoins, label: "Economy" },
                { Icon: FaGlobeAfrica, label: "Human Dignity" },
              ].map(({ Icon, label }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300">
                    <Icon className="text-white text-4xl md:text-5xl" />
                  </div>
                  <p className="mt-3 text-sm md:text-base text-gray-200 font-medium">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
