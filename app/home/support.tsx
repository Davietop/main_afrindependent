import { HeartHandshake, Users } from "lucide-react";
import Link from "next/link";
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],          // Or 'latin-ext' if needed
    weight: ['400', '500', '700'], // Optional: choose weights you use
    display: 'swap',             // Optional: improves text rendering
  });
  

export default function SupportSection() {
  return (
    <div className="bg-white py-10" >
       <h3 className="mx-5 lg:mx-10 text-left mb-4 text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4  ">
       
       Support Our Work
     </h3>

     <section className={`${ibmPlexSans.className}   px-10   `}>
    
   

 
    <div className="max-w-6xl mx-auto text-left lg:text-center">
      {/* Title */}
     
    

      {/* Description */}
      <p className="text-lg sm:text-xl text-[#323232] dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Help us advance African sovereignty and truth through principled research, sound economics, and bold alternatives to failed models.
      </p>

      {/* CTA Buttons with Icons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          href="/donate"
          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          <HeartHandshake className="w-5 h-5" />
          Donate
        </Link>

        <Link
          href="/involved"
          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          <Users className="w-5 h-5" />
          Get Involved
        </Link>
      </div>
    </div>
  </section>
    </div>

  );
}
