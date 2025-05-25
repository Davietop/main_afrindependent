import { Metadata } from "next";
import Footer from "@/components/ui/page-sections/footer";
import Navbar from "@/components/ui/page-sections/nav-bar";
import Hero from "./hero";


export const metadata: Metadata = {
  title: "Donate – Afrindependent Institute",
  description:
    "Support Afrindependent Institute’s mission of truth, liberty, sound money, and structural justice. Your contribution empowers independent African thought and transformation.",
  applicationName: "Afrindependent Institute",
  manifest: "https://www.afrindependent.org/donate",
  openGraph: {
    title: "Donate – Afrindependent Institute",
    description:
      "Join our mission to reshape African economies with Africonomics. Your donation supports original research, education, and gold-based monetary reform.",
    url: "https://www.afrindependent.org/donate",
    images: [
      {
        url: "https://www.afrindependent.org/donate.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Support Afrindependent Institute – Donate Today",
      },
    ],
  },
  twitter: {
    title: "Donate – Afrindependent Institute",
    description:
      "Support truth, liberty, and African prosperity through Africonomics. Donate to Afrindependent today.",
    images: [
      {
        url: "https://www.afrindependent.org/donate.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Support Afrindependent Institute – Donate Today",
      },
    ],
    site: "https://www.afrindependent.org/donate",
  },
  keywords: [
    "Donate to Afrindependent",
    "Africonomics donation",
    "Support African economic justice",
    "African Think Tank Funding",
    "Sound Money Africa",
    "Gold-backed Currency",
    "Support African Sovereignty",
    "Free Market in Africa",
    "Truth and Liberty",
    "Postcolonial Economic Reform",
    "Economic Liberation Africa",
    "African Civilizational Advancement",
  ],
};


const Donate = () => {
  return (
    <>
      <main
        className={` bg-white`}
      >
        <div>
          <div className=" z-50">
            <Navbar />
          </div>
          <Hero />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Donate;
