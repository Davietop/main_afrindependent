"use client";

import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import GetResponseForm from "@/components/subscribe";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Subscribe = ({ onHomePage = true }: { onHomePage?: boolean }) => {
  return (
    <section
      id="subscribe"
      className={`${ibmPlexSans.className} bg-white `}
    >
      {/* Section Header */}
      <div className=" mx-auto px-6 lg:px-10 mb-6">
        <h3 className="text-2xl lg:text-3xl font-bold border-l-4 border-[#ffd700] pl-4 text-deepForest">
          Newsletter Sign-Up
        </h3>
      </div>

      {/* Content Container */}
      <div className=" mx-auto px-6 flex flex-col items-center gap-6 text-center  bg-pattern_subscribe bg-center bg-cover bg-no-repeat">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-deepForest">
          Stay Informed. Stay Empowered.
        </h2>

        <p className="text-[#182D09] text-base md:text-lg">
          Join <span className="font-bold">Sovereign Signals</span>, the official newsletter of the Afrindependent Institute.
        </p>

        <p className="text-[#182D09] text-base md:text-lg">
          Get principled insights, new publications, video releases, and key updates — delivered straight to your inbox.
        </p>

        <p className="text-[#182D09] text-base md:text-lg">
          Be part of the movement advancing African intellectual and economic sovereignty through truth, justice, and sound ideas.
        </p>

        <p className="text-[#182D09] text-base md:text-lg font-bold">
          Subscribe now and never miss a signal.
        </p>

        {/* Newsletter Form */}
        <div className="w-full mt-2">
          <GetResponseForm />
        </div>

        <p className="text-gray-500 italic text-sm mt-2">
          You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
