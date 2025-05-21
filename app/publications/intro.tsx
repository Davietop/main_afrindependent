"use client"
import { FaFeatherAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const IntroPub = () =>{
    return  <section className="bg-[#f9f9f6] dark:bg-[#0f1c16] py-20">
    <div className="max-w-5xl mx-auto px-6">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <FaFeatherAlt className="text-yellow-500 text-4xl" />
      </motion.div>
  
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#002813] dark:text-[#ffd700] mb-4"
      >
        Ideas with Purpose. Research with Principle.
      </motion.h2>
  
      {/* Paragraph 1 */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
      >
        The Afrindependent Institute produces original, paradigm-shifting publications grounded in Africonomics—a school of thought advancing African intellectual and economic sovereignty through the natural-moral law principles of truth, justice, liberty, and nonaggression.
      </motion.p>
  
      {/* Paragraph 2 */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-base md:text-lg text-gray-600 dark:text-gray-400"
      >
        Explore our wide-ranging works, from policy papers and academic essays to in-depth commentary and strategic insights. Every piece is guided by a commitment to natural-moral law, African dignity, and principled solutions for postcolonial transformation.
      </motion.p>
    </div>
  </section>
}


export default IntroPub
