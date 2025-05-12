import { Metadata } from "next";

import Navbar from "@/components/ui/page-sections/nav-bar";
import { ContactForm } from "./form";
import { getCompany } from "@/service/sanity-queries";
import Footer from "@/components/ui/page-sections/footer";
import FormSend from "./contactForm";
import ContactSection from "./contactForm";

export const metadata: Metadata = {
  title: "Contact Afrindependent",
  description: "We'd like your support in advancing Africonomics. Reach out.",
  applicationName: "Afrindenpendent Organisation",
  manifest: "https://afrindependent.org/contact",
  openGraph: {
    title: "Contact Afrindependent",
    description: "We'd like your support in advancing Africonomics. Reach out.",
    images: [
      {
        url: "https://afrindependent.org/header-web-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    url: "https://afrindependent.org/contact",
  },
  twitter: {
    title: "Contact Afrindependent",
    description: "We'd like your support in advancing Africonomics. Reach out.",
    images: [
      {
        url: "https://afrindependent.org/header-web-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Afrindependent Institute - Unlocking Africa's Prosperity",
      },
    ],
    site: "https://afrindependent.org/contact",
  },
  keywords: [
    "Advancing Africonomics",
    "Contact Afrindependent Institute",
    "Afrindependent Institute",
    "Afrindependent Email",
    "Afrindependent Address",
    "Afrindependent Phone",
  ],
};

const ContactPage = async () => {
  const companyDetails = await getCompany();
  return (
 
    <>
    <main
      className={`bg-white`}
    >
      <div>
        <div className=" z-50">
          <Navbar />
        </div>
     
        <ContactSection/>
      </div>
      <Footer/>
    </main>
 
  </>
  );
};

export default ContactPage;
