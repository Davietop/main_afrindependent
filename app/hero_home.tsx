import { BookOpen, HeartHandshake, MailCheck } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const HomeHero = () => {
  return (
    <section
      className={`${ibmPlexSans.className} relative bg-black my-4  rounded-3xl mx-auto  w-11/12 h-[600px]  overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-bg_home bg-[position:200%]  bg-no-repeat  opacity-70" />

      {/* Overlay Content */}
      <div className="relative flex flex-col justify-around gap-y-[70px]  z-10   px-10 ">
        <h1 className="text-[#D0DDCD] mt-14 text-center  lg:text-left text-6xl w-8/12 leading-[70px] font-bold ">
          Restoring African Intellectual and Economic Sovereignty
        </h1>

        <div className="w-[600px] box2 flex flex-col p-10  text-base tracking-[1px]  gap-y-6 rounded-3xl h-fit bg-white">
          <p className="text-lg text-[#D0DDCD]">
            {" "}
            Grounded in Africonomics. Committed to Truth, Justice, and Liberty.
          </p>

          <div className="flex items-left flex-row justify-around items-center">
            <Link
              href="/concepts"
               className="flex items-center justify-center gap-3 border-2 bg-[#D0DDCD]  border-[#D0DDCD] text-deepForest  text-base hover:text-[#ffd700]  hover:bg-deepForest hover:border-deepForest  font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"

            >
              <BookOpen className="w-5 h-5" />
              Explore
            </Link>

            <a
              href="#subscribe"
              className="flex items-center justify-center gap-3 border-2 bg-[#D0DDCD]  border-[#D0DDCD] text-deepForest  text-base hover:text-[#ffd700]  hover:bg-deepForest hover:border-deepForest  font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"

            >
              <MailCheck className="w-5 h-5" />
              Subscribe
            </a>

            <Link
              href="/donate"
                className="flex items-center justify-center gap-3 border-2 bg-[#D0DDCD]  border-[#D0DDCD] text-deepForest  text-base hover:text-[#ffd700]  hover:bg-deepForest hover:border-deepForest  font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"

            >
              <HeartHandshake className="w-5 h-5" />
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
