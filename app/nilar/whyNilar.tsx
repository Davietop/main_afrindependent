"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }},
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }},
};

function WhyAfricaNeedsNilar() {
  const sections = [
    {
      id: "fiat-inflation",
      title: "The Dangers of Fiat Currency and Inflation",
      content: `Fiat currencies, created by decree and not backed by real value, are inherently unstable and fraudulent—as the Africonomics Theory of Monetary Justice has decisively demonstrated. They are subject to manipulation, devaluation, and confiscation through inflation, silently eroding the wealth and savings of the majority.\n\nFiat monetary systems are a central and confiscatory structural injustice in contemporary statist socioeconomic systems.\n\nAfrican countries that rely on fiat systems remain at the mercy of foreign central banks, external shocks, and artificial boom-bust cycles.
`,
    },
    {
      id: "colonial-legacy",
      title: "The Colonial and Neocolonial Legacy of Monetary Dependence",
      content: `African monetary systems were shaped by colonial powers—and in many cases, those powers still exert control. From direct monetary governance to indirect dependence on foreign-denominated reserves and international financial institutions, African nations remain economically subjugated.\n\nThe Nilar is an effective and liberating alternative.
`,
    },
    {
      id: "colonial-currencies",
      title: "Why Existing “African Currencies” Remain Colonial Extensions",
      content: `The CFA Franc, still used by 14 countries in West and Central Africa, is a stark example of lingering colonial control. Pegged to the euro and guaranteed by the French Treasury, it denies member states true monetary sovereignty.\n\nEven non-CFA countries remain heavily reliant on central banking models imported from the West—models that prioritize inflation targets, external debt servicing, and currency dilution over economic justice and internal development.`,
    },
    {
      id: "nilar-corrective",
      title: "The Nilar as a Corrective and Liberating Force",
      author:"— Manuel Tacanho, social philosopher and economist",
      stages:["based on gold, an honest and timeless form of money","free from foreign manipulation and arbitrary devaluation","designed for long-term monetary reliability and economic stability","aligned with truth, justice, liberty, and economic sovereignty"],
      content: `The Nilar breaks this cycle. Rooted in Africonomics, it is not a Western imitation but an African innovation—based on real value, honest exchange, and ethical monetary policy.\n\nIt allows African nations to build currency systems:
      `,
      conclusion: "“The Nilar is more than a sound currency. It is a declaration of independence and a restoration of African sovereignty and dignity.”"
    },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionElement = refs.current[index];
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const sectionBottom = sectionTop + rect.height;

          // Check if the section's top is close to the top of the viewport
          if (scrollPosition >= sectionTop - 50 && scrollPosition <= sectionBottom - 50) {
            setActiveId(section.id);
          }
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section className={`relative py-24 px-5 lg:px-10 ${ibmPlexSans.className}`}>

      
       <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4">
 Why Africa Needs the <span >Nilar</span>
            </h3>
            <p className="italic ml-4 mt-2 text-lg text-[#ffd700] mb-4">
        Ending monetary dependency. Rooting out Economic instability. Restoring African sovereignty.
        </p>
          </div>
      
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeRight}
        className="text-left ml-4 mb-14"
      >
        
       
        <p className="text-gray-700 text-lg leading-relaxed ">Africa remains trapped in a cycle of monetary dependence and fiat-induced economic injustice, instability, and impoverishment. While the continent has made strides in development, its monetary systems remain colonial in structure and statist in design, leaving nations vulnerable and trapped in debilitating inflation, arbitrary currency devaluation, and external control.</p>
        <p className="text-gray-700 text-lg leading-relaxed mt-2">
        The Nilar offers a principled and transformative way forward. It corrects this inherited dysfunction and is a liberating force for African nations seeking true economic independence, structural justice, and monetary stability.
        </p>
      </motion.div>

      {/* Main two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        
        {/* Left side (titles sticky) */}
        <div className="hidden md:flex flex-col gap-6 sticky top-32 h-max">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`transition-all border-l-4 pl-4 ${
                activeId === sec.id
                  ? "border-deepForest text-deepForest font-semibold"
                  : "border-transparent text-gray-500 hover:text-deepForest"
              }`}
            >
              {sec.title}
            </a>
          ))}
        </div>

        {/* Right side (content) */}
        <div className="md:col-span-3 space-y-24">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              data-id={sec.id}
              ref={(el) => {
  refs.current[idx] = el;
}}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="bg-white border-deepForest border rounded-2xl flex flex-col p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-deepForest mb-4 md:hidden block">
                {sec.title}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
             <div className="flex flex-col gap-y-2 font-semibold mt-2">
             {sec?.stages?.map((stage, index)=> <p key={index} className="text-gray-700 leading-relaxed whitespace-pre-line"> 	•	{stage}</p> )}
             </div>

             <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-2">{sec?.conclusion}</p>

             <p className="text-gray-700 leading-relaxed font-bold self-end mt-2 whitespace-pre-line">{sec?.author}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAfricaNeedsNilar;
