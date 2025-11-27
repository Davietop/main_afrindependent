import { FaBookOpen, FaUsers, FaBullhorn, FaPenFancy } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const WhatAmbassadorDo = ()=>{
    return <section
  className={`${ibmPlexSans.className} bg-gradient-to-b from-white via-amber-50/30 to-white  px-5   lg:px-10 `}
>
  <div className="">
  

      <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide ">
              What Ambassadors Do
          </h3>
         <div className=" sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
                What Ambassadors Do
            </h3>
          </div>
    <p className="text-lg text-gray-700  mb-8 mt-4">
      Each ambassador contributes uniquely to advancing Africonomics through
      learning, dialogue, advocacy, and reflection.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
          <FaBookOpen className="w-8 h-8 text-deepForest" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Host Africonomics Discussions
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
         Lead reading sessions using the Introduction & Discussion Guide; and other Africonomics resources. 

        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
          <FaUsers className="w-8 h-8 text-deepForest" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Organize Campus Forums
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
        Collaborate with economics, political science, and other student associations related with social sciences.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
          <FaBullhorn className="w-8 h-8 text-deepForest" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Promote the Vision
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
        Share Afrindependent publications and initiatives online and offline.
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
          <FaPenFancy className="w-8 h-8 text-deepForest" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Report Insights
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          Contribute monthly reflections from campus dialogues.
        </p>
      </div>
    </div>
  </div>
</section>
}

export default WhatAmbassadorDo;