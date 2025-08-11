import { IBM_Plex_Sans } from "next/font/google";
import {
  FaBalanceScale,
  FaMoneyBillAlt,
  FaExchangeAlt,
  FaFeatherAlt,
} from "react-icons/fa";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const AfriDifferent = () => {
  return (
    <div className={`flex flex-col   ${ibmPlexSans.className}`}>
      
       <div className=" md:px-5   lg:px-10">
  
       <div>
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
            What Makes Afrindependent Different?
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
                What Makes Afrindependent Different?
            </h3>
          </div>
        </div>
</div>
      <h3 className=" mt-4 w-full   text-[#323232] px-4  lg:px-20  text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
        The Afrindependent Institute is a pioneering think tank advancing
        Africonomics, an African school of philosophical, economic, and
        civilizational thought.{" "}
      </h3>

      <p className="  w-full   text-[#323232] px-4   lg:px-20  text-lg leading-[28px] lg:text-xl lg:leading-normal">
        While most African institutions mirror Western thought and frameworks,
        the Afrindependent Institute is unapologetically
        independent—philosophically, economically, and morally. We do not seek
        to adapt Africa to Western models that have proven arbitrary,
        repressive, and ruinous. We advance principled Africonomics frameworks
        grounded in:
      </p>

      <section className="w-full px-6 py-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-md border-l-4 border-[#ffd700] rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4 mb-2">
              <FaBalanceScale className="text-[#ffd700] w-8 h-8 mt-1" />
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-deepForest">
                  Natural-moral law
                </h2>
                <p className="text-deepForest italic text-base">
                  instead of legal positivism
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-md border-l-4 border-[#ffd700] text-[#ffd700] rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4 mb-2">
              <FaMoneyBillAlt className="text-[#ffd700] w-8 h-8 mt-1" />
              <div>
                <h2 className="text-lg md:text-xl text-deepForest  font-semibold ">
                  Sound money
                </h2>
                <p className=" italic text-deepForest  text-base">
                  instead of fiat deception
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-md border-l-4 border-[#ffd700] text-[#ffd700] rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4 mb-2">
              <FaExchangeAlt className=" w-8 h-8 mt-1" />
              <div>
                <h2 className="text-lg md:text-xl text-deepForest  font-semibold ">
                  Voluntary exchange
                </h2>
                <p className="italic text-deepForest  text-base">
                  instead of coercive redistribution
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 backdrop-blur-md border-l-4 border-[#ffd700] text-[#ffd700] rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4 mb-2">
              <FaFeatherAlt className="text-[#ffd700] w-8 h-8 mt-1" />
              <div>
                <h2 className="text-lg md:text-xl text-deepForest  font-semibold ">
                  Liberty and justice
                </h2>
                <p className="text-deepForest  italic text-base">
                  instead of democracy as an end in itself
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h3 className="px-6 sm:px-10 lg:px-20   w-full  text-[#323232] text-lg leading-[28px] lg:text-xl lg:leading-normal">
        As the Home of Africonomics, Afrindependent is a beacon of economic
        truth and moral clarity, building the intellectual infrastructure for a
        postcolonial Africa that is structurally just, sovereign, and
        prosperous.
      </h3>
    </div>
  );
};

export default AfriDifferent;
