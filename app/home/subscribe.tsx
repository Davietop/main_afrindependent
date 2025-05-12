import Image from "next/image";
import { IBM_Plex_Sans } from 'next/font/google';
import SubscribeForm from "@/components/subscribe";
import { useState } from "react";
import { subscribe } from "diagnostics_channel";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});
const Subscribe = ({ onHomePage = true }: { onHomePage?: boolean }) => {
  


  return (

 
  
  
      <div>
          <div  className="bg-white pb-6 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
       Newsletter Sign-Up
     </h3>
          </div>

     
    <section 
      className={` py-20  bg-pattern_subscribe bg-center  bg-cover   bg-no-repeat ${ibmPlexSans.className}`}
      id="subscribe"
    >
    
 
      <div className=" backdrop-blur-xs   w-11/12 mx-auto  lg:w-full lg:px-0 flex flex-col justify-center items-center h-[400px] gap-y-10  text-center">

      <h2 className="text-4xl lg:text-5xl  lg:leading-[40px]  text-[#182D09]">
      Join our intellectual movement
       </h2>
    
      <SubscribeForm />

      <p className={`${ibmPlexSans.className } font-medium italics text-base sm:text-lg`}>	We respect your privacy. No spam — just thoughtful updates. You can unsubscribe anytime.
      </p>
      </div>
  
  
    </section>
      </div>
   
  
   
  );
};


export default Subscribe