import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Hero = () => {
   
  return (
    

       <main className={`${ibmPlexSans.className} pt-16 xl:pt-0 xl:mt-0`}>
          <div className="bg-white">
            <section className="relative py-16 xl:py-32 min-h-fit bg-deepForest flex items-center justify-center text-center px-6">
              <div className="absolute inset-0 bg-ambassador bg-cover bg-center opacity-20  z-0" />
              <div className="absolute inset-0 bg-opacity-80 z-0" />
              <div className="relative w-full z-10 lg:max-w-5xl mx-auto text-white">
                <h1 className="text-3xl md:text-4xl leading-snug font-extrabold lg:leading-tight mb-6 lg:mb-6">
                   Become a Voice of Africonomics on Your Campus
                </h1>
                
    
                <p className="text-lg md:text-2xl w-10/12 mx-auto mb-6 text-[#ffd700] lg:mb-6">
                 Join a movement restoring African intellectual and economic sovereignty through truth, liberty, and sound ideas.
                </p>
    
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                 
                     <Link
            href="/apply"
            className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            {/* <HeartHandshake className="w-5 h-5" /> */}
            Apply Now
          </Link>
          <Link
            href="/download-program-guide"
            className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            {/* <HeartHandshake className="w-5 h-5" /> */}
            Download Program Guide
          </Link>
               
                 
    
              
                </div>
                
       
      
              </div>
            </section>
          </div>
        </main>
  );
};

export default Hero;
