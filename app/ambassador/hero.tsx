import { AmbassadorForm } from "@/components/form-dialog";
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
            <section className="relative py-16 xl:py-32 min-h-fit bg-deepForest flex items-center justify-center text-center px-1 ">
              <div className="absolute inset-0 bg-ambassador bg-cover bg-center opacity-20  z-0" />
              <div className="absolute inset-0 bg-opacity-80 z-0" />
              <div className="relative  z-10 lg:max-w-5xl mx-auto text-white">
                <h1 className="text-4xl md:text-4xl leading-tight font-extrabold lg:leading-tight mb-4 lg:mb-4">
                   Become a Voice of Africonomics on Your Campus
                </h1>
                
    
                <p className="text-lg md:text-2xl  mx-auto mb-6 text-[#ffd700] lg:mb-6">
                 Join a movement restoring African intellectual and economic sovereignty through truth, liberty, and sound ideas.
                </p>
    
                <div className="flex flex-col sm:flex-row  justify-center  gap-4 mb-6">
                 
                  
          <AmbassadorForm/>
            <button className="flex   w-9/12 sm:w-fit px-3 sm:px-6 mx-auto sm:mx-0 items-center justify-center gap-3 border-2 bg-white border-white dark:border-yellow-400 text-deepForest dark:text-yellow-300  dark:hover:bg-yellow-400 text-base hover:border-deepForest hover:text-deepForest hover:bg-white dark:hover:text-white font-semibold sm:py-3 py-1.5 rounded-xl shadow-md transition duration-300">
          Download Program Guide
        </button>
        
               
                 
    
              
                </div>
                
       
      
              </div>
            </section>
          </div>
        </main>
  );
};

export default Hero;
