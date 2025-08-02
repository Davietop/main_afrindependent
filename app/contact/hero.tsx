"use client"


import { useEffect } from "react";
import { sanityClient } from "@/service/sanity";


const Hero = () => {


  return (
    <div className="mt-20 xl:mt-0 text-center mb-16 w-full  bg-deepForest h-[400px] ">
      <div className="mx-auto pt-[100px]">
        <h2 className="text-4xl text-[#ffd700] sm:text-5xl font-bold mb-4 tracking-tight ">
          Contact Us
        </h2>
        <p className="text-xl text-white">
          We welcome inquiry, media engagement, and meaningful collaboration.
        </p>
        <p className="mt-4 text-white text-lg leading-relaxed">
          Have a question, request, or proposal? Reach out—we’d be glad to hear
          from you.
        </p>
      </div>
    </div>
  );
};

export default Hero;
