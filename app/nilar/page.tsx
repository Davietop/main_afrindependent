


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
  manifest: 'https://afrindependent.org/nilar',
  openGraph: {
    title: 'Nilar Currency Framework',
    description: 'Nilar is a sound monetary alternative promoting liberty, prosperity, and postcolonial empowerment.',
    url: 'https://afrindependent.org/nilar',
    images: [
      {
        url: 'https://afrindependent.org/images/nilar-og.jpg', // Replace with actual hosted image
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
        url: 'https://afrindependent.org/images/nilar-og.jpg', // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: 'Nilar Gold Currency',
      },
    ],
    site: 'https://afrindependent.org/nilar',
  },
  keywords: [
    'Nilar Currency',
    'Gold Standard Africa',
    'Sound Money Africa',
    'African Economic Sovereignty',
    'Nilar Monetary Framework',
    'Gold-Based Currency Africa',
    'Africonomics Currency',
    'Afrindependent Currency',
    'Postcolonial Economics',
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