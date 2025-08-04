import { BadgeDollarSign, Banknote, Scale, ShieldCheck } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
  });
export default function NilarNote() {
  return (

    <div className={`${ibmPlexSans.className} md:px-5 lg:px-10`}>
        <div  className="bg-white mb-4 pt-10 ">
         
      <div>
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
           
         Zimbabwe’s “Gold-Backed” Currency Attempts
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
           
         Zimbabwe’s “Gold-Backed” Currency Attempts
            </h3>
          </div>
        </div>
   

       
          </div>
 
    <section className={`${ibmPlexSans.className} mx-4    bg-white dark:bg-[#0f1c16] text-[#00210d] dark:text-gray-100`}>
         
      <div className="w-full mx-auto">
       
   

        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Zimbabwe’s recent attempts to introduce a so-called “gold-backed currency” have understandably raised public skepticism. But it’s important to clarify: <strong>These were not genuine gold currencies.</strong>
        </p>

        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          They were monetary illusions—veiled efforts by the state to maintain control over a fiat system that had already collapsed. The central bank continued to issue money without full gold convertibility, applied technocratic exchange rate controls, and attempted to peg the currency to the U.S. dollar—all classic signs of fiat manipulation in disguise.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed font-semibold  mt-6 mb-4">
          A genuine gold-based currency—like the Nilar—requires none of these artificial mechanisms:
        </p>

        <ul className="space-y-4 text-base sm:text-lg px-3 list-none">
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-400 mt-1" />
            <span>Fully backed by physical gold, not promises.</span>
          </li>
          <li className="flex items-start gap-3">
            <Scale className="w-6 h-6 text-yellow-400 mt-1" />
            <span>Freely exchangeable, not subject to central bank whims.</span>
          </li>
          <li className="flex items-start gap-3">
            <Banknote className="w-6 h-6 text-yellow-400 mt-1" />
            <span>Not pegged to fiat currencies; derives its value from gold itself.</span>
          </li>
          <li className="flex items-start gap-3">
            <BadgeDollarSign className="w-6 h-6 text-yellow-400 mt-1" />
            <span>No inflation targeting, price controls, or “stabilization” boards.</span>
          </li>
        </ul>

        <p className="text-lg sm:text-xl leading-relaxed mt-6">
          The failure of Zimbabwe’s gold-linked fiat is not a failure of gold or sound money is a  <span className="font-bold"> failure of monetary dishonesty</span> and state manipulation.
        </p>

        <div className="bg-[#fef9e6] dark:bg-[#173524] mx-auto text-center p-6 mt-6 rounded-xl shadow-sm border border-yellow-400">
          <h3 className="text-2xl  font-bold mb-2 text-[#00210d] dark:text-yellow-300">
            The Nilar corrects this.
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            It is a principled monetary system built on transparency, convertibility, and value-based-issuance—aligned with <em>Africonomics</em>, and designed to serve <span className="text-yellow-500 font-semibold">people, not power</span>.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
