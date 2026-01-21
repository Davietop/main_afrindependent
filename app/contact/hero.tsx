"use client"


import { useEffect } from "react";
import { sanityClient } from "@/service/sanity";


const Hero = () => {


  return (
    // <div className="mt-20 xl:mt-0 text-center mb-16 w-full   h-[500px] ">
     
    // </div>
     <main className={` pt-16 xl:pt-0 xl:mt-0`}>
          <div className="bg-white">
            <section className="relative py-16 xl:py-32 min-h-fit bg-deepForest  h-[450px] flex items-center justify-center text-center px-6">
              <div className="absolute inset-0 bg-contactImg bg-center bg-cover  opacity-20 z-0" />
              <div className="absolute inset-0 bg-opacity-80 z-0" />
               <div className="mx-auto">
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
             
            </section>
          </div>
        </main>
  );
};

export default Hero;
