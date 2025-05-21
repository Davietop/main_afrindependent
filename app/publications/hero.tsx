"use client";

import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

export default function PublicationsHero() {
  return (
<section className="relative border border-t h-screen  dark:bg-[#0f1c16] flex flex-col mx-auto ">
  <div className="text-center px-6 max-w-4xl ">
    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-4"
    >
      <FaBookOpen className="text-yellow-500 text-7xl" />
    </motion.div>

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-4xl md:text-5xl xl:text-7xl font-bold text-[#002813] dark:text-[#ffd700] mb-4"
    >
      Publications
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
    >
      Explore the Afrindependent Institute’s original research, essays, and
      frameworks advancing African intellectual and economic sovereignty.
    </motion.p>
  </div>
</section>


  );
}
