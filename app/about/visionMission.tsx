import { FaEye, FaBullseye } from "react-icons/fa";
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const VissionMission = () => {
  return (
    <section className={`w-full py-10    ${ibmPlexSans.className}`}>
         <h2 className="text-2xl px-6 sm:px-10 lg:px-20 pt-10  sm:text-3xl font-bold text-[#00210d] dark:text-yellow-300 mb-12 sm:mb-16">
        <span className="border-l-4 border-yellow-400 pl-4">  Vision & Mission</span>
      </h2>
      <div className="max-w-full w-full md:w-10/12 mx-auto px-6  lg:px-6">
      <div className="grid xl:grid-cols-2 gap-y-10 gap-x-16 items-stretch">
          {/* Vision Block - Left */}
          <div className="bg-[#002813] text-white rounded-2xl  p-6 lg:p-10 border border-[#ffd700] flex flex-col  h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ffd700] mb-6 flex items-center gap-3">
              <FaEye className="text-[#ffd700]" /> Our Vision
            </h2>
            <p className="tracking-wide text-base md:text-lg leading-relaxed ">
              To see a free, prosperous, and structurally just Africa—anchored in truth, liberty, sound money, and respect for natural individual rights.
            </p>
          </div>

          {/* Mission Block - Right */}
          <div className="bg-[#002813] text-white rounded-2xl  p-6 lg:p-10 border border-[#ffd700] flex flex-col justify-between h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ffd700] mb-6 flex items-center gap-3">
              <FaBullseye className="text-[#ffd700]" /> Our Mission
            </h2>
            <p className="tracking-wide text-base md:text-lg leading-relaxed">
              The Afrindependent Institute exists to advance African intellectual and economic sovereignty through original research, principled policy frameworks, and public education grounded in Africonomics. We challenge prevailing models, expose systemic injustice, and promote sound ideas to empower African nations and humanize global systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
