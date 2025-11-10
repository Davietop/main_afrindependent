import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Intro = () => {
  return (
<section className={`${ibmPlexSans.className} bg-gradient-to-br from-amber-50/40 to-white py-10 px-6 md:px-16`}>
  <div className=" grid grid-cols-12  gap-12 items-center">
     <div className="relative flex col-span-4 justify-center">
      <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-md">
        <Image
          src="/africonomics-ambassador_2.jpg"
          alt="Students discussing Africonomics"
          className="object-cover w-full h-[400px] md:h-[460px]"
          width={400} height={460}
        />
      </div>

      {/* Optional accent element */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-700/10 rounded-full blur-xl"></div>
    </div>
    {/* LEFT COLUMN — TEXT */}
    <div className="space-y-6 col-span-8">
      <span className="text-deepForest font-semibold uppercase tracking-widest">
        Introduction
      </span>

      <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 leading-tight">
        The Africonomics Campus Ambassador Program
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        The <span className="font-bold"> Africonomics Campus Ambassador Program</span> empowers university students 
        to represent the Afrindependent Institute and promote Africonomics 
        a principled framework for African intellectual and economic sovereignty.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        As an ambassador, you’ll organize discussions, host events, and build a 
        network of students committed to truth, justice, and sound economics 
        across African campuses and beyond.
      </p>
    </div>

    {/* RIGHT COLUMN — VISUAL */}
   
  </div>
</section>

  );
};
export default Intro;
