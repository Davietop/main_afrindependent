"use client";

import { motion } from "framer-motion";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function PrinciplesOfNilar() {
  return (
    <section
      className={`relative py-24 px-5 lg:px-10 overflow-hidden ${ibmPlexSans.className}`}
    >
          <div className="mb-3">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4">
            Principles of the Nilar Framework
            </h3>
            <p className="italic ml-4 text-lg text-gray-600 mb-4">
            A currency established on ethics, stability, and economic sovereignty.
        </p>
          </div>
      
      <div className=" mb-14">
      
        <p className="text-gray-700 text-lg leading-relaxed ml-4">
        The Nilar Framework is not just a technical solution to monetary instability—it is a moral and civilizational economic model. Based on Africonomics and natural-moral law, the Nilar offers a principled foundation for integrated, stable, and prosperous African economies. Each core principle reflects a commitment to truth, justice, liberty, sound money, and human dignity.
        </p>
      </div>

      {/* Principles List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-16 max-w-5xl mx-auto"
      >
        {[
          {
            title: "Gold-Backing and Sound Money",
            description: "The Nilar is 100% based on physical gold. One nilar is 1 gram of fine (999.9) gold. This ensures monetary reliability, long-term economic stability, and protection against debasement—making it a trustworthy currency and store of value. It restores honesty to money.",
          },
          {
            title: "Decentralization and Monetary Sovereignty",
            description: "The Nilar rejects centralized fiat monetary manipulation. It champions decentralized issuance and governance models that prevent political abuse, empower communities, and reestablish true monetary independence for African nations.",
          },
          {
            title: "Justice in Exchange and Purchasing Power Preservation",
            description: "The Nilar enables just transactions by preserving purchasing power and ensuring value is not lost through inflation or currency manipulation. It supports wealth-creating enterprise, intergenerational savings, long-term investment, and stable, predictable prices.",
          },
          {
            title: "Elimination of Monetary Inflation as a Hidden Confiscatory Tool",
            description: "Under fiat systems, monetary inflation (credit and currency creation) silently steals from people by reducing the purchasing power of their money. The Nilar abolishes this structural injustice, removing inflation as a tool of state confiscation and restoring honesty in economic life.",
          },
          {
            title: "Secured Property Rights and Voluntary Exchange",
            description: "True economic freedom depends on the right to own, save, and trade without coercion or repression. The Nilar affirms property rights and supports a peaceful, voluntary economic order where exchange is honest, value-based, and free from state aggression.",
            conclusion: "The Nilar enables free enterprise and free trade across African nations, laying the foundation for a unified African free-market economy characterized by secured property rights, voluntary exchange, structural injustice, economic integration, and continental prosperity."
          },
        ].map((principle, idx) => (
          <motion.div
            key={idx}
            variants={item}
            style={{ willChange: "opacity, transform" }}
            className="border-l-4 border-[#ffd700] pl-6"
          >
            <h3 className="text-2xl font-semibold text-deepForest mb-4">{principle.title}</h3>
            <p className="text-gray-700 leading-relaxed">{principle.description}</p>
            <p className="text-gray-700 leading-relaxed">{principle?.conclusion}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PrinciplesOfNilar;
