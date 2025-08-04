"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function WhyAfricaNeedsNilar() {
  const sections = [
    {
      id: "fiat-inflation",
      title: "The Dangers of Fiat Currency and Inflation",
      content: "Fiat currencies, created by decree and not backed by real value, are inherently unstable and fraudulent—as the Africonomics Theory of Monetary Justice has decisively demonstrated. They are subject to manipulation, devaluation, and confiscation through inflation, silently eroding the wealth and savings of the majority.\n\nFiat monetary systems are a central and confiscatory structural injustice in contemporary statist socioeconomic systems.\n\nAfrican countries that rely on fiat systems remain at the mercy of foreign central banks, external shocks, and artificial boom-bust cycles"
    },
    {
      id: "colonial-legacy",
      title: "The Colonial and Neocolonial Legacy of Monetary Dependence",
      content: "African monetary systems were shaped by colonial powers—and in many cases, those powers still exert control. From direct monetary governance to indirect dependence on foreign-denominated reserves and international financial institutions, African nations remain economically subjugated.\n\nThe Nilar is an effective and liberating alternative"
    },
    {
      id: "colonial-currencies",
      title: "Why Existing “African Currencies” Remain Colonial Extensions",
      content: "The CFA Franc, still used by 14 countries in West and Central Africa, is a stark example of lingering colonial control. Pegged to the euro and guaranteed by the French Treasury, it denies member states true monetary sovereignty.\n\nEven non-CFA countries remain heavily reliant on central banking models imported from the West—models that prioritize inflation targets, external debt servicing, and currency dilution over economic justice and internal development",
    },
    {
      id: "nilar-corrective",
      title: "The Nilar as a Corrective and Liberating Force",
      author:"— Manuel Tacanho, ",
      subAuthorInfo: "Social philosopher and economist",
      stages:["based on gold, an honest and timeless form of money","free from foreign manipulation and arbitrary devaluation","designed for long-term monetary reliability and economic stability","aligned with truth, justice, liberty, and economic sovereignty"],
      content: "The Nilar breaks this cycle. Rooted in Africonomics, it is not a Western imitation but an African innovation—based on real value, honest exchange, and ethical monetary policy.\n\nIt allows African nations to build currency systems"
      ,
      conclusion: "“The Nilar is more than a sound currency. It is a declaration of independence and a restoration of African sovereignty and dignity.”"
    },
  ];



  const [activeId, setActiveId] = useState<string | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section, index) => {
        const ref = refs.current[index];
        if (ref) {
          const top = ref.offsetTop - 200;
          const bottom = top + ref.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveId(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${ibmPlexSans.className} mt-10  md:px-5   lg:px-10`}>
       <div >
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
            Why Africa Needs the Nilar
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
              Why Africa Needs the Nilar
            </h3>
          </div>
        </div>

        <p className=" text-lg mt-2 text-[#835C3B] font-normal ml-4 ">
         Ending monetary dependency. Rooting out instability. Restoring
          sovereignty.
        </p>
 <section
      className={`relative px-4 sm:px-6 md:px-10 max-w-7xl mx-auto pt-6 ${ibmPlexSans.className}`}
    >
    

      {/* Sections - Alternating Layout */}
      <div className="flex flex-col mt-6 gap-8 md:gap-24">
        {sections.map((sec, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={sec.id}
              id={sec.id}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start"
            >
              {/* Title Side */}
              <div
                className={`${
                  isEven ? "md:order-1" : "md:order-2"
                } flex flex-col justify-start`}
              >
                <h2 className="text-xl font-semibold text-deepForest mb-2">
                  {sec.title}
                </h2>

                <div className="h-1 w-full bg-yellow-500 mb-6" />

                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base md:text-lg">
                  {sec.content}
                </p>

                {sec.stages && (
                  <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 font-semibold">
                    {sec.stages.map((stage, i) => (
                      <li key={i}>{stage}</li>
                    ))}
                  </ul>
                )}

                {sec.conclusion && (
                  <blockquote className="mt-6 pl-4 border-l-4 border-yellow-500 italic text-[#1a1a1a] font-medium">
                    {sec.conclusion}
                  </blockquote>
                )}

                {(sec.author || sec.subAuthorInfo) && (
                  <div className="mt-4 text-right italic text-sm text-[#323232]">
                    <p className="font-semibold">{sec.author}</p>
                    <p>{sec.subAuthorInfo}</p>
                  </div>
                )}
              </div>

              {/* Section Indicator */}
              <div
                className={`${
                  isEven ? "md:order-2" : "md:order-1"
                } flex justify-center md:justify-end md:items-start pt-2`}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`text-sm font-medium rounded-full px-4 py-1 border ${
                      activeId === sec.id
                        ? "bg-deepForest text-white border-deepForest"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    Section {idx + 1}
                  </div>
                  {idx < sections.length - 1 && (
                    <div className="w-1 h-24 bg-gray-300 my-2" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
    </div>
   
  );
}

export default WhyAfricaNeedsNilar;
