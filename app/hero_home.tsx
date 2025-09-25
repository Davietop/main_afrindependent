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
      className={`${ibmPlexSans.className} relative bg-black mt-[75px] xl:my-4 md:rounded-3xl h-[400px] mx-auto w-full md:w-11/12 md:min-h-[600px] overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 bottom-0 bg-cover left-[-150px] sm:left-[-50px] right-0 md:top-0 md:bottom-0 md:left-[30px] lg:left-[260px] xl:left-[400px] 2xl:left-[550px] [@media(min-width:1800px)]:left-[700px] md:right-0 z-0 bg-bg_home bg-no-repeat opacity-70 " />
      {/* Overlay Content */}
      <div className="relative flex flex-col justify-center items-start min-h-[600px] z-10 px-2 sm:px-6 md:px-10 2xl:px-20 space-y-8">
        {/* text Content */}
        <h1 className="text-white text-xl sm:text-5xl hidden md:block  md:text-5xl lg:text-6xl 2xl:text-7xl font-bold  lg:leading-[70px] w-full sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-8/12">
          Restoring African Intellectual and Economic Sovereignty
        </h1>
        <h1 className="text-white text-3xl sm:text-5xl relative bottom-6 sm:bottom-14 md:text-5xl md:hidden lg:text-6xl 2xl:text-7xl font-bold  lg:leading-[70px] w-full  md:w-8/12 lg:w-9/12 xl:w-8/12">
          Restoring African Intellectual and Economic Sovereignty
        </h1>

        {/* glass Content */}
        <div className="w-full sm:w-[500px] md:w-[600px] h-fit hidden md:block box2 flex flex-col text-base tracking-[1px] rounded-3xl p-6 space-y-6 bg-white/10 backdrop-blur-lg border border-white/20">
          <p className="text-base md:text-lg text-[#D0DDCD]">
            Grounded in Africonomics. <br/>Committed to Truth, Justice, and Liberty.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/concepts"
              className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Explore
            </Link>

            <a
              href="#subscribe"
              className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
            >
              <MailCheck className="w-5 h-5" />
              Subscribe
            </a>

            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 border-2 bg-[#d9e6da]  border-[#d9e6da] text-[#0a3622] text-sm md:text-base hover:text-[#ffd700] hover:bg-deepForest hover:border-deepForest font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
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
