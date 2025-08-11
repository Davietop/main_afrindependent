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
    <header className={`${ibmPlexSans.className}  pt-16 xl:pt-0 xl:mt-0 `}>
      <section className="relative bg-deepForest py-16  xl:py-32   xl:mt-0  flex items-center justify-center px-6   overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[url('/employee2.png')] bg-cover bg-center md:bg-top  opacity-40" />

        {/* Overlay Content */}
        <div className="relative  z-10 w-full text-center ">
          <h1 className="text-white  text-3xl md:text-6xl leading-snug font-extrabold lg:leading-tight mb-4 lg:mb-6">
            Discover our Vision and Mission <br className="hidden lg:block" />
            in Pioneering Africonomics
          </h1>


          <p className="text-lg md:text-xl text-[#FFD54F] mb-6">
            Advancing African monetary sovereignty, economic
            stability, and prosperity
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="flex w-10/12 mx-auto md:w-fit md:mx-0   justify-center gap-3 border-2 border-white dark:border-yellow-400 text-white dark:text-yellow-300 hover:bg-[#00210d] hover:border-[#00210d] dark:hover:bg-yellow-400 hover:text-[#ffd700] dark:hover:text-black font-semibold py-2 px-4 md:py-3  md:px-6  rounded-3xl shadow-md transition duration-300   
              "
            >
              <MdEmail className="w-5 h-5" />
              Donate
            </Link>

            <Link
              href="/concepts"
              className="flex w-10/12 mx-auto md:w-fit md:mx-0   justify-center gap-3 border-2 border-white dark:border-yellow-400 text-white dark:text-yellow-300 hover:bg-[#00210d] hover:border-[#00210d] dark:hover:bg-yellow-400 hover:text-[#ffd700] dark:hover:text-black font-semibold py-2 px-4 md:py-3  md:px-6  rounded-3xl shadow-md transition duration-300 "
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

