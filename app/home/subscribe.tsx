import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import SubscribeForm from "@/components/subscribe";
import { useState } from "react";
import { subscribe } from "diagnostics_channel";
import GetResponseForm from "@/components/subscribe";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});
const Subscribe = ({ onHomePage = true }: { onHomePage?: boolean }) => {
  return (
    <div className={`${ibmPlexSans.className}`}>
       <div className=" pb-6 px-5 bg-white lg:px-10">
        <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
         Newsletter Sign-Up
        </h3>
       
      </div>

      <section
        className={` py-20  bg-pattern_subscribe bg-center  bg-cover   bg-no-repeat ${ibmPlexSans.className}`}
        id="subscribe"
      >

       
        <div className=" backdrop-blur-xs   w-11/12 mx-auto  lg:w-full lg:px-0 flex flex-col justify-center items-center h-[350px] gap-y-6  text-center relative ">
           <p className="pl-4 mt-4 text-base lg:text-lg font-medium text-[#182D09]">
          Join Sovereign Signals, the official newsletter of the Afrindependent
          Institute. Get principled insights, new publications, video releases,
          and key updates—delivered straight to your inbox.
        </p> 
        <p className="pl-4 text-base lg:text-lg font-medium text-[#182D09]">
          Be part of the movement advancing African intellectual and economic
          sovereignty through truth, justice, and sound ideas.
        </p>
          <h2 className="text-base lg:text-lg font-medium    text-[#182D09]">
            Subscribe now and never miss a signal.
          </h2>

          <GetResponseForm />

          <p
            className={`${ibmPlexSans.className} font-medium italic text-base`}
          >
            {" "}
            We respect your privacy. No spam — just thoughtful updates. <br />{" "}
            You can unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
