import { FaEye, FaBullseye } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const VissionMission = () => {
  return (
    <section className={`w-full     ${ibmPlexSans.className}`}>
   

<div className=" mt-10 md:px-5   lg:px-10">
  
       <div>
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
           Vision & Mission
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
               Vision & Mission
            </h3>
          </div>
        </div>
</div>
  <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
  <div className="grid md:grid-cols-2 gap-10">

    {/* Vision Card */}
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffd700]/20 mb-6">
        <FaEye className="text-[#c19a00] text-3xl" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Our Vision
      </h2>
      <p className="text-gray-600 leading-relaxed text-lg">
      To see a free, prosperous, and structurally just Africa anchored in truth, liberty, sound money, and respect for natural individual rights.
      </p>
    </div>

    {/* Mission Card */}
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffd700]/20 mb-6">
        <FaBullseye className="text-[#c19a00] text-3xl" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Our Mission
      </h2>
      <p className="text-gray-600 leading-relaxed text-lg">
      The Afrindependent Institute exists to advance African intellectual and economic sovereignty through original research, principled policy frameworks, and public education grounded in Africonomics. We challenge prevailing models, expose systemic injustice, and promote sound ideas to empower African nations and humanize global systems.
      </p>
    </div>

  </div>
</div>

    </section>
  );
};

export default VissionMission;
