"use client";

import { motion } from "framer-motion";
import { IBM_Plex_Sans } from "next/font/google";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // small stagger for a nice flow
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

function HowNilarAligns() {
  return (
    <div className={`${ibmPlexSans.className}`}>
        <div  className="bg-white pt-10 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
          How the Nilar Aligns with <span className="text-[#ffd700]">Africonomics</span>
     </h3>
     <p className="italic ml-4 text-lg text-gray-600 mb-6">
          More than a currency it is a civilizational affirmation.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed ml-4">
        The Nilar is not a technocratic experiment or Western-style reform. It is a direct, practical application of <span className="font-bold">Africonomics</span>—an African school of philosophical and economic thought grounded in truth, justice, liberty, and nonaggression.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-2 ml-4">
        Designed within the natural-moral law framework of Africonomics, the Nilar affirms the dignity and rights of every individual to save, trade, invest, and prosper free from institutionalized monetary deception and coercion. Unlike fiat money, which serves governments and elites, the Nilar serves people, empowers nations, and fosters structural justice
        </p>
          </div>
    <section
      className={`relative py-14  px-6 sm:px-12 lg:px-32 overflow-hidden ${ibmPlexSans.className}`}
    >
 

      {/* Pillars Grid */}
      <motion.div
        variants={container}
        // initial="hidden"
        // whileInView="show"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }} 
        style={{ willChange: "opacity, transform" }}
        className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 mb-20"
      >
        {[
          {
            title: "Tied to Natural Rights, Structural Justice, and Free Trade",
            description:
              "The Nilar protects people’s natural right to property ownership by ensuring that money retains its purchasing power.",
              body:"It fosters structural justice by removing fiat money, a central tool of exploitation, dispossession, and oppression, and aligning money issuance with honest production instead of credit and currency printing.",
              conclusion:"It enables free and ethical trade, built on voluntary exchange—not manipulated currencies or exploitative trade terms."
          },
          {
            title: "An Effective Tool of Postcolonial Liberation",
            description:
              "Fiat currencies and neocolonial banking systems have kept African economies debilitated, dependent, and externally controlled.",
              body:'The Nilar breaks that cycle by offering a sovereign monetary system free from foreign domination and internal corruption—supporting true postcolonial liberation through monetary independence and economic stability.',
          },
          {
            title:
              "Reclaiming Africa’s Legacy of Gold Currency and Free Enterprise",
            description:
              "Long before colonization, Africa had thriving systems of gold-based money, free enterprise, and interconnected free trade routes.",
              conclusion:"The Nilar reclaims that legacy—restoring the spirit of free enterprise, value-based exchange, and civilizational dignity that once defined African commerce."
          },
        ].map((pillar, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-white rounded-2xl   p-6 shadow-sm flex flex-col gap-y-2   border-l-4 border-[#ffd700] hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-deepForest mb-4">
              {pillar.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {pillar.description}
            </p>
            <p className="text-gray-600 leading-relaxed ">
              {pillar?.body}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {pillar?.conclusion}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote Callout */}
      <div className="text-center mb-20">
        <Separator className="mb-8 bg-[#ffd700]" />
        <blockquote className="text-2xl font-semibold text-deepForest italic leading-relaxed">
          Africonomics calls for systems grounded in truth and justice.
          <br />
          The Nilar is the monetary foundation that makes that vision real.
        </blockquote>
        <Separator className="mt-8 bg-[#ffd700]" />
      </div>

      {/* Comparison Table */}
      <div className="mb-20 overflow-x-auto">
        <h3 className="text-3xl font-bold text-deepForest mb-6 text-center">
          The Nilar vs. Fiat Currencies
        </h3>
        <p className="text-center text-lg text-gray-600 mb-10">
          A principled alternative to inflation, instability, and monetary
          injustice.
        </p>
        <table className="min-w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-deepForest text-white">
            <tr>
              <th className="p-4 font-semibold text-left text-lg">Feature</th>
              <th className="p-4 text-lg font-semibold text-left">The Nilar</th>
              <th className="p-4 text-lg font-semibold text-left">Fiat Currencies</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Backing",
                "100% backed by physical gold",
                "Created by decree, backed by state coercion",
              ],
              [
                "Value Stability",
                "Preserved over time, an honest and stable currency that maintains purchasing power",
                "Erodes over time, a fraudulent and destructive currency that is systematically debased",
              ],
              [
                "Issuance",
                "Issued only against gold",
                "Issued at will by central banks",
              ],
              [
                "Inflation Risk",
                "None—by design",
                "High and built-in (inflation is policy)",
              ],
              [
                "Counterparty Risk",
                "Minimal to nonexistent",
                "High—by their inflationary, centralized, and political nature",
              ],
              [
                "Trust Basis",
                "Objective, transparent, reliable, independent of government credibility, and free from political manipulation ",
                "Subjective, dependent on government credibility, inherently political, and arbitrarily manipulated",
              ],
              [
                "Monetary Sovereignty",
                "Decentralized, market-operated, African-governed",
                "Centralized, technocratically managed, tied to foreign institutions and influence",
              ],
              [
                "Ethics & Justice",
                "Entirely just: aligned with natural-moral law, individual rights, and nonaggression",
                "Viciously unjust: based on coercion, confiscation, and institutionalized fraud",
              ],
              [
                "Economic Effect",
                "Protects savings, encourages investment, production, and economic prosperity",
                "Erodes wealth, distorts prices, fuels resource misallocation, destabilizes the economy",
              ],
              [
                "Historical Precedent",
                "Consistent with Africa’s heritage of gold-based money",
                "Colonial import and imposition",
              ],
            ].map(([feature, nilar, fiat], idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="border border-gray-200 p-4 font-medium text-gray-700 text-base">
                  {feature}
                </td>
                <td className="border border-gray-200 p-4 text-[#ffd700] font-semibold text-base">
                  {nilar}
                </td>
                <td className="border border-gray-200 p-4 text-base text-deepForest font-semibold">
                  {fiat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h4 className="text-xl font-bold text-deepForest mb-4">
          Fiat systems benefit the few at the top.
      
         <p className="mt-2"> The Nilar protects the property and purchasing power of all Africans—farmers, merchants, workers, families—everyone.</p>
        </h4>
        <p className="text-xl font-bold text-deepForest mb-6">It is the monetary foundation for a free, prosperous, and structurally just Africa.</p>
        <Button
          variant="outline"
          className="border-gray-300 text-[#ffd700] text-lg bg-deepForest"
        >
          Learn How the Nilar Works
        </Button>
      </motion.div>
    </section>
    </div>
  );
}

export default HowNilarAligns;
