import { BadgeDollarSign, Banknote, Scale, ShieldCheck } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
  });
export default function NilarNote() {
  return (

    <div>
        <div  className="bg-white mb-4 pt-10 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
         Zimbabwe’s “Gold-Backed” Currency Attempts
     </h3>
   

       
          </div>
 
    <section className={`${ibmPlexSans.className} px-6 sm:px-10 lg:px-16   bg-white dark:bg-[#0f1c16] text-[#00210d] dark:text-gray-100`}>
         
      <div className="w-full mx-auto">
       
   

        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Zimbabwe’s recent attempts to introduce a so-called “gold-backed currency” have understandably raised public skepticism. But it’s important to clarify: <strong>These were not genuine gold currencies.</strong>
        </p>

        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          They were <span className="text-yellow-500 font-medium">monetary illusions</span>—veiled efforts by the state to maintain control over a fiat system that had already collapsed. The central bank continued to issue money without full gold convertibility, applied technocratic exchange rate controls, and attempted to peg the currency to the U.S. dollar—all classic signs of fiat manipulation in disguise.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed font-semibold text-yellow-400 mt-8 mb-4">
          A genuine gold-based currency—like the <span className="text-white bg-yellow-500 px-1 rounded">Nilar</span>—requires none of these artificial mechanisms:
        </p>

        <ul className="space-y-4 text-base sm:text-lg pl-6 list-none">
          <li className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-yellow-400 mt-1" />
            <span><strong>Fully backed by physical gold</strong>, not promises.</span>
          </li>
          <li className="flex items-start gap-3">
            <Scale className="w-6 h-6 text-yellow-400 mt-1" />
            <span><strong>Freely exchangeable</strong>, not subject to central bank whims.</span>
          </li>
          <li className="flex items-start gap-3">
            <Banknote className="w-6 h-6 text-yellow-400 mt-1" />
            <span><strong>Not pegged</strong> to fiat currencies; derives its value from gold itself.</span>
          </li>
          <li className="flex items-start gap-3">
            <BadgeDollarSign className="w-6 h-6 text-yellow-400 mt-1" />
            <span>No inflation targeting, price controls, or “stabilization” boards.</span>
          </li>
        </ul>

        <p className="text-lg sm:text-xl leading-relaxed mt-8">
          The failure of Zimbabwe’s gold-linked fiat is <strong>not a failure of gold or sound money</strong>—it is a failure of <span className="italic text-yellow-400">monetary dishonesty</span> and state manipulation.
        </p>

        <div className="bg-[#fef9e6] dark:bg-[#173524] mx-auto text-center p-6 mt-10 rounded-xl shadow-sm border border-yellow-400">
          <h3 className="text-2xl  font-bold mb-2 text-[#00210d] dark:text-yellow-300">
            The Nilar corrects this.
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            It is a principled monetary system built on <strong>transparency</strong>, <strong>convertibility</strong>, and <strong>value-based issuance</strong>—aligned with <em>Africonomics</em>, and designed to serve <span className="text-yellow-500 font-semibold">people, not power</span>.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
