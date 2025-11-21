import { IBM_Plex_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import {
  FaGlobeAfrica,
  FaUserTie,
  FaBookOpen,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import { AmbassadorForm } from "@/components/form-dialog";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const EligibilitySection = () => {
  return (
    <section
      className={`bg-gradient-to-b from-white via-amber-50/20 to-white py-10 px-5   lg:px-10 ${ibmPlexSans.className}`}
    >
      <div className="">
        {/* Heading */}

        <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide ">
          Eligibility & Ideal Candidate
        </h3>
        <div className=" sm:hidden">
          <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
            Eligibility & Ideal Candidate
          </h3>
        </div>

        {/* Highlight Box */}
        <div className=" rounded-r-xl pl-4 md:pl-8 pt-4 pb-10 space-y-4">
          <ul className="space-y-3 list-disc list-inside text-lg text-gray-800 leading-relaxed">
            <li>
              Current undergraduate or graduate student at an African university
              (or African student abroad)
            </li>
            <li>Passionate about ideas, economics, and justice</li>
            <li>
              Reliable, self-motivated, and aligned with the Africonomics vision
            </li>
            <li>
              No prior experience required only a genuine commitment to truth
              and liberty
            </li>
          </ul>
        </div>
      </div>
{/* BENEFIT OF THE PROGRAM */}
      <section className=" ">
        <div className="">
          {/* Heading */}

          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide ">
            Benefits of the Program
          </h3>
          <div className=" sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
              Benefits of the Program
            </h3>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-start bg-white border border-[#d0d5cd] rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d0d5cd] text-[#002813] rounded-full mb-4">
                <FaGlobeAfrica className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#002813] mb-2">
                Global Network
              </h3>
              <p className="text-[#333333] leading-relaxed text-base">
                Join an international network of Africonomics scholars and
                thinkers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start bg-white border border-[#d0d5cd] rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d0d5cd] text-[#002813] rounded-full mb-4">
                <FaUserTie className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#002813] mb-2">
                Mentorship
              </h3>
              <p className="text-[#333333] leading-relaxed text-base">
                Receive mentorship and intellectual development opportunities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start bg-white border border-[#d0d5cd] rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d0d5cd] text-[#002813] rounded-full mb-4">
                <FaBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#002813] mb-2">
                Exclusive Resources
              </h3>
              <p className="text-[#333333] leading-relaxed text-base">
                Access exclusive learning materials and research discussions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start bg-white border border-[#d0d5cd] rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d0d5cd] text-[#002813] rounded-full mb-4">
                <FaUsers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#002813] mb-2">
                Event Access
              </h3>
              <p className="text-[#333333] leading-relaxed text-base">
                Priority participation in Afrindependent events, forums, and
                conferences.
              </p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-start bg-white border border-[#d0d5cd] rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-[#d0d5cd] text-[#002813] rounded-full mb-4">
                <FaCertificate className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#002813] mb-2">
                Certificate of Recognition
              </h3>
              <p className="text-[#333333] leading-relaxed text-base">
                Certificate of recognition upon successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#002813] text-[#F4F1E6] mt-10 py-10 px-6 md:px-16 rounded-3xl">
      <div className=" mx-auto flex flex-col gap-y-6">
        {/* Heading */}
        <h2 className="text-xl lg:text-2xl font-semibold  text-[#FFD700]">
          Ready to join the movement?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-base text-[#F4F1E6]/90 leading-relaxed max-w-3xl ">
          Apply below to become an <span className="font-semibold ">Africonomics Campus Ambassador</span>     and help shape Africa’s intellectual and economic renaissance.
        </p>

        {/* CTA Button */}
       <AmbassadorForm/>
      </div>
    </section>
    </section>
  );
};

export default EligibilitySection;
