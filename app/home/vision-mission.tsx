import Image from "next/image";

import ParallaxText from "@/components/parallex-text";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { IBM_Plex_Sans } from "next/font/google";
import Video from "next-video";
import mission_img from "../../public/AfridependentLogo.svg";
import Link from "next/link";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const VissionMission = () => {
  return (
    <section
      className={`${ibmPlexSans.className} bottom-10 md:bottom-0 bg-white relative    text-white`}
    >
      <div className="bg-white  pt-10 px-5 lg:px-10">
        <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
          Our Mission
        </h3>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-x-10 mt-6 px-6">
        {/* Left: Image Card */}
        <div className="relative w-full md:w-9/12 lg:h-[500px] h-[300px] xl:w-4/12   bg-missionHome bg-center bg-cover text-white rounded-xl overflow-hidden"></div>

        {/* Right: Text Section */}
        <div className="w-full md:w-10/12 md:text-center xl:text-left flex flex-col xl:w-7/12 mt-2 lg:mt-0">
          <p className="text-[#323232] text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[40px]">
            As the Home of Africonomics, our mission at the Afrindependent
            Institute is to advance African intellectual and economic
            sovereignty through principled research, transformative frameworks,
            and bold alternatives to failed Western models. We are committed to
            building a new African reality rooted in truth, liberty, sound
            money, and structural justice—for a free, prosperous, and dignified
            Africa.
            <br />
            <span className="mt-2 inline-block">
              <Link
                href="/about"
                className="text-yellow-500 font-medium hover:text-yellow-400 transition-colors"
              >
                Learn more about us →
              </Link>
            </span>
          </p>

          {/* Emphasized Quote */}
          <div className="mt-8 border-l-4 border-yellow-500 pl-4  text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
            “African intellectual independence is the precursor to African
            material independence in the form of integrated, stable, and
            thriving African economies.”
          </div>

          <p className="text-[#323232] text-base sm:text-base lg:text-lg leading-relaxed text-right self-end mt-4 font-semibold italic">
            — Manuel Tacanho <br />
            <span className="text-sm font-medium not-italic text-[#666]">
              Founder of the Afrindependent Institute
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
