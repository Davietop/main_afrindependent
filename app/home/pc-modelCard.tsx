"use client"
import { Button } from "@/components/ui/button"
import ModelRotate from "./model-rotate";
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaCoins, FaHandshake, FaGlobeAfrica } from "react-icons/fa";
import { IBM_Plex_Sans } from 'next/font/google';
import Link from "next/link";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const PcModelCard = () =>{
    return <div className="">

     
      <div  className="bg-white pt-10 pb-6 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
     The Nilar
     </h3>
          </div>
     
  

  
<section className="  px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero */}
        <h1 className="text-2xl font-extrabold text-[#002813]  leading-[50px] mb-2">
          Africa’s Gold-Based Path to Monetary Justice
        </h1>
        <p className="text-gray-700 text-base md:text-xl mb-10 max-w-3xl mx-auto">
        The Nilar is a transformative gold-based monetary system grounded in Africonomics and designed to restore African sovereignty and dignity.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
        {[
          {
            icon: <FaCoins className="text-[#ffd700] w-8 h-8" />,
            title: "Sound Monetary System",
            desc: "The Nilar provides African nations with a gold-based, sovereign currency to replace unjust fiat currency systems that have destabilized and impoverished the continent for decades.",
          },
          {
            icon: <FaHandshake className="text-[#ffd700] w-8 h-8" />,
            title: "Free Enterprise",
            desc: "We advocate for free enterprise systems based on property rights and voluntary exchange—not statist models of central planning and coercion.",
          },
          {
            icon: <FaGlobeAfrica className="text-[#ffd700] w-8 h-8" />,
            title: "Free Trade",
            desc: "Africonomics calls for dismantling many regulatory and bureaucratic barriers to intra-African trade, reviving our historical legacy of voluntary, exchange and ethical commerce.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#ffd700] hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">{item.icon}<h3 className="text-lg md:text-xl font-bold text-[#002813]">{item.title}</h3></div>
            <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          href="/nilar"
          className="flex w-fit mx-auto items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          Learn More About the Nilar
        </Link>
      </div>
    </section>




     
    </div>
}

export default PcModelCard