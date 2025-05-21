import MobileModel from "./mobile-model";
import PcModelCard from "./pc-modelCard"; 
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const model = () => {
  return (
    <section className={`${ibmPlexSans.className}  bg-white  `}>
    
     
      <PcModelCard/>
    </section>
  );
};

export default model;
