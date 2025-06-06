


import Navbar from "@/components/ui/page-sections/nav-bar";
import { Metadata } from "next";
import Hero from "./hero";
import Image from "next/image";
import WhyAfricaNeedsNilar from "./whyNilar";
import FAQAccordion from "./faq";
import PublicationsResearch from "./research";
import GetInvolved from "./getInvolved";
import Footer from "@/components/ui/page-sections/footer";
import PrinciplesOfNilar from "./howNilar";
import NilarAndAfriconomicsFlow from './nilarAfriconomics';
import { BadgeDollarSign, Banknote, Scale, ShieldCheck } from "lucide-react";
import NilarNote from "./note";
import WhatIsNilar from "./whatIsNilar";

export const metadata: Metadata = {
  title: 'Nilar Currency Framework',
  description: 'Discover Nilar – a gold-based currency model for African economic sovereignty and structural justice.',
  applicationName: 'Afrindependent Institute',
  manifest: 'https://www.afrindependent.org/nilar',
  openGraph: {
    title: 'Nilar Currency Framework',
    description: 'Nilar is a sound monetary alternative promoting liberty, prosperity, and postcolonial empowerment.',
    url: 'https://www.afrindependent.org/nilar',
    images: [
      {
        url: 'https://www.afrindependent.org/nilar_coin.jpg', // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: 'Nilar Gold-Based Currency Framework',
      },
    ],
  },
  twitter: {
    title: 'Nilar Currency Framework',
    description: 'A gold-based framework to restore economic sovereignty across Africa.',
    images: [
      {
        url: 'https://www.afrindependent.org/nilar_coin.jpg', // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: 'Nilar Gold Currency',
      },
    ],
    site: 'https://www.afrindependent.org/nilar',
  },
keywords: [
  "gold-backed currency",
  "sound money system",
  "African monetary reform",
  "anti-inflation Africa",
  "the Nilar currency",
  "monetary justice",
  "economic sovereignty"
],

};


  const Nilar = ()=>{
    return <main className="bg-white">

        <Navbar/>
        <Hero/>
        <WhatIsNilar/>

        <WhyAfricaNeedsNilar/>
        <PrinciplesOfNilar/>
        <NilarAndAfriconomicsFlow/>
        <FAQAccordion/>
  <NilarNote/>
        <PublicationsResearch/>
        <GetInvolved/>
       <Footer/>







    </main>
  }


  export default Nilar