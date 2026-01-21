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
    <div className={`${ibmPlexSans.className} md:px-5 lg:px-10`}>
        <div  className="bg-white   ">
        
              <div>
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
            How the Nilar Aligns with Africonomics
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
             How the Nilar Aligns with Africonomics
            </h3>
          </div>
        </div>

        <p className=" text-lg mt-2 text-[#835C3B] font-normal ml-4 mb-4 ">
          More than a sound currency. It’s a civilizational affirmation.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed ml-4">
        The Nilar is not a technocratic experiment or Western-style reform. It is a direct, practical application of <span className="font-bold">Africonomics</span>—an African school of philosophical and economic thought grounded in truth, justice, liberty, and nonaggression.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-2 ml-4">
        Designed within the natural-moral law framework of Africonomics, the Nilar affirms the dignity and rights of every individual to save, trade, invest, and prosper free from institutionalized monetary deception and coercion. Unlike fiat money, which serves governments and elites, the Nilar serves people, empowers nations, and fosters structural justice
        </p>
          </div>
    <section
      className={`relative py-6  px-2  overflow-hidden ${ibmPlexSans.className}`}
    >
 

      {/* Pillars Grid */}
      <div
       
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-6 mb-6 px-3"
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
          <div
            key={idx}
           
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
          </div>
        ))}
      </div>

      {/* Quote Callout */}
      <div className="text-center mb-8">
        <Separator className="mb-8 bg-[#ffd700]" />
        <blockquote className="text-xl lg:text-2xl font-semibold text-deepForest italic leading-relaxed">
          Africonomics calls for systems grounded in truth and justice.
          <br />
          The Nilar is the monetary foundation that makes that vision real.
        </blockquote>
        <Separator className="mt-8 bg-[#ffd700]" />
      </div>

      {/* Comparison Table */}
      <div className="mb-8 overflow-x-auto">
        <h3 className="text-2xl font-bold text-deepForest mb-4 text-center">
          The Nilar vs. Fiat Currencies
        </h3>
        <p className="text-center text-lg text-gray-600 mb-6">
          A principled alternative to inflation, instability, and monetary
          injustice.
        </p>
        <table className="min-w-full text-sm border-collapse border border-gray-200">
          <thead className="bg-deepForest text-white">
            <tr>
              <th className="p-4 font-semibold text-left text-base lg:text-lg">Feature</th>
              <th className="p-4 text-base lg:text-lg font-semibold text-left">The Nilar</th>
              <th className="p-4 text-base lg:text-lg font-semibold text-left">Fiat Currencies</th>
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
                <td className="border border-gray-200 p-4 font-bold text-gray-700 text-base">
                  {feature}
                </td>
                <td className="border border-gray-200 p-4 text-gray-700 font-semibold text-base">
                  {nilar}
                </td>
                <td className="border border-gray-200 p-4 text-base text-gray-700 font-semibold">
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
        <h4 className="text-base lg:text-xl font-bold text-deepForest mb-4">
          Fiat systems benefit the few at the top.
      
         <p className="mt-2 text-base lg:text-xl"> The Nilar protects the property and purchasing power of all Africans—farmers, merchants, workers, families—everyone.</p>
        </h4>
        <p className="text-base lg:text-xl font-bold text-deepForest mb-6">It is the monetary foundation for a free, prosperous, and structurally just Africa.</p>
        <Button
          variant="outline"
          className="flex items-center mx-auto justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300 text-base  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
        >
          Learn How the Nilar Works
        </Button>
      </motion.div>
    </section>
    </div>
  );
}

export default HowNilarAligns;
