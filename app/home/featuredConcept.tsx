"use client";

import { IBM_Plex_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const concepts = [
  {
    number: "01",
    title: "Africonomics",
    desc: "Africa’s path to economic independence through sovereign monetary systems and principled market structures.",
    link: "/concepts",
  },
  {
    number: "02",
    title: "Sound Money",
    desc: "Stable currency, disciplined governance, and monetary integrity as foundations for long-term prosperity.",
    link: "/concepts",
  },
  {
    number: "03",
    title: "Structural Justice",
    desc: "Building fair institutional systems that ensure liberty, access, and economic dignity for all.",
    link: "/concepts",
  },
];

const FeaturedConcept = () => {
  return (
    <section
      className={`relative  py-6 lg:py-10 ${ibmPlexSans.className}`}
    >
      {/* Section Header */}
      <div className=" mx-auto px-6 lg:px-10 mb-6 lg:mb-10">
        <h3 className="text-2xl lg:text-3xl border-l-4 border-[#ffd700] pl-4 font-bold text-deepForest">
          Featured Concepts
        </h3>
       
      </div>

      {/* Concepts Grid */}
      <div className="w-11/12 mx-auto   grid gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#ffd700]/30"
          >
            {/* Large Background Number */}
            <span className="absolute top-6 right-6 text-6xl font-bold text-[#ffd700]/10 select-none">
              {item.number}
            </span>

            {/* Title */}
            <h4 className="relative text-xl lg:text-2xl font-bold text-[#00210d] mb-4">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* CTA */}
            <Link
              href={item.link}
              className="inline-block text-yellow-600 font-medium tracking-wide hover:text-yellow-500 transition-colors"
            >
              Explore Framework →
            </Link>

            {/* Subtle Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ffd700] transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedConcept;

