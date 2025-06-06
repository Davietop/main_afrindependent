"use client";
import Image from "next/image";
import { FaStar, FaEye, FaBullseye } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdContactMail, MdEmail } from "react-icons/md";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const Hero = () => {
  return (
    <header className={`${ibmPlexSans.className} `}>
      <section className="relative bg-deepForest min-h-[600px] xl:min-h-screen mt-20 xl:mt-0  flex items-center justify-center px-6 py-20  overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('/employee2.png')] bg-cover bg-center opacity-40" />

        {/* Overlay Content */}
        <div className="relative  z-10 w-full text-center ">
          <h1 className="text-5xl w-full md:text-6xl font-extrabold text-white   mb-6">
            Discover our Vision and Mission <br className="hidden lg:block" />
            in Pioneering Africonomics
          </h1>

          <p className="text-lg md:text-xl text-[#ffd700] mb-10">
            Advancing African monetary sovereignty, economic
            stability, and prosperity
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 border-2 border-white dark:border-yellow-400 text-white dark:text-yellow-300 hover:bg-[#00210d] hover:border-[#00210d] dark:hover:bg-yellow-400 hover:text-[#ffd700] dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
            >
              <MdEmail className="w-5 h-5" />
              Donate
            </Link>

            <Link
              href="/concepts"
              className="flex items-center justify-center gap-3 border-2 border-white dark:border-yellow-400 text-white dark:text-yellow-300 hover:bg-[#00210d] hover:border-[#00210d] dark:hover:bg-yellow-400 hover:text-[#ffd700] dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
            >
              <MdContactMail className="w-5 h-5" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;

