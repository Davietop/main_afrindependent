import { Globe2, Scale, ShieldCheck } from "lucide-react"
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const WhatIsNilar = ()=>{
    return    <div className={`${ibmPlexSans.className}`}>
         <div className="mb-3 mt-10  px-5 lg:px-10">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4">
             What Is the Nilar?
            </h3>
          
          <p className=" text-xl text-yellow-600 font-semibold italic ml-4">
          A gold-based currency for African monetary sovereignty, economic stability, and prosperity.
          </p>
           <div className="mt-8 w-10/12  text-gray-700 text-base ml-4">
          <p>
          The Nilar is a principled monetary framework and gold-based currency system developed to empower African nations to reclaim monetary independence, restore honest money and economic stability, and build structurally just, thriving economies. It is not merely an alternative currency—it is a transformative economic model proposed by Africonomics.
          </p>
          <p className="mt-4">
          Unlike fiat currencies imposed by former colonial powers or managed through inflationary central banks, the Nilar is based on <span className="font-bold">natural-moral law</span> principles and designed to protect people’s purchasing power, property rights, and economic sovereignty. It provides a stable, decentralized, and ethical foundation for trade, savings, investment, and development across the continent.
          </p>
        </div>  
    </div>
   
     <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
       

       

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          
          {/* Key Point 1 */}
          <div className="p-6 bg-gray-50 border border-[#ffd700] rounded-2xl shadow flex flex-col items-center text-center">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              A gold-based currency for African nations,
            </h3>
            <p className="mt-3 text-sm text-gray-600">
            The Nilar is backed 100% by gold and offers stability, trust, and value retention over time.
            </p>
          </div>

          {/* Key Point 2 */}
          <div className="p-6 bg-gray-50  border border-[#ffd700] rounded-2xl shadow flex flex-col items-center text-center">
            <Scale className="h-10 w-10 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Grounded in Africonomics and natural-moral law,
            </h3>
            <p className="mt-3 text-sm text-gray-600">
            The Nilar reflects a moral and civilizational commitment to truth, sound money, voluntary exchange, and human dignity—rejecting fiat money manipulation and coercion.
            </p>
          </div>

          {/* Key Point 3 */}
          <div className="p-6 bg-gray-50  border border-[#ffd700] rounded-2xl shadow flex flex-col items-center text-center">
            <Globe2 className="h-10 w-10 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Designed to restore sound money, monetary sovereignty, and economic stability,
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              It empowers African economies to decouple from colonial-era currencies and inflation-prone fiat systems, laying the foundation for long-term prosperity and self-determination.
            </p>
          </div>

        </div>

      </div>
    </section>
     </div>
}

export default WhatIsNilar