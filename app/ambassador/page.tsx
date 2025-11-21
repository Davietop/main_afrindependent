import Navbar from "@/components/ui/page-sections/nav-bar";
import { Metadata } from "next";
import Footer from "@/components/ui/page-sections/footer";
import Hero from "./hero";
import Intro from "./intro";
import Values from "./values";
import WhatAmbassadorDo from "./whatAmbassadorDo";
import EligibilitySection from "./eligibility";

export const metadata: Metadata = {
  title: "Africonomics Campus Ambassador Program | Afrindependent Institute",
  description:
    "Join the Africonomics Campus Ambassador Program and become a voice for African intellectual and economic sovereignty through truth, liberty, and sound ideas.",
  applicationName: "Afrindependent Institute",
  manifest: "https://www.afrindependent.org/ambassador",
  keywords: [
    "Africonomics",
    "Afrindependent Institute",
    "Campus Ambassador Program",
    "African students",
    "intellectual sovereignty",
    "economic sovereignty",
    "African leadership",
    "youth development",
    "African philosophy",
    "Africonomics movement",
    "student leadership Africa",
    "free enterprise Africa",
    "truth and liberty",
    "African universities",
    "Africonomics ambassador"
  ],
  openGraph: {
    title: "Africonomics Campus Ambassador Program | Afrindependent Institute",
    description:
      "Empowering African students to promote Africonomics — a movement for intellectual and economic sovereignty rooted in liberty and justice.",
    url: "https://www.afrindependent.org/ambassador",
    siteName: "Afrindependent Institute",
    type: "website",
    images: [
      {
        url: "https://www.afrindependent.org/africonomics-ambassador.jpg", // Replace with actual hosted hero image
        width: 1200,
        height: 630,
        alt: "Africonomics Campus Ambassador Program - Afrindependent Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africonomics Campus Ambassador Program",
    description:
      "Become a campus leader advancing Africa’s intellectual and economic renaissance through Africonomics.",
    site: "https://www.afrindependent.org/ambassador",
    images: [
      {
        url: "https://www.afrindependent.org/africonomics-ambassador.jpg", // Replace with actual hosted hero image
        width: 1200,
        height: 630,
        alt: "Africonomics Campus Ambassador Program - Afrindependent Institute",
      },
    ],
  },
};

const AmbassadorPage = () => {
  return (
    <main className="bg-white">
      <Navbar />
    <Hero/>
    <Intro/>
    <Values/>
    <WhatAmbassadorDo/>
    <EligibilitySection/>
      <Footer mail='campus@afrindependent.org' />
    </main>
  );
};

export default AmbassadorPage;
