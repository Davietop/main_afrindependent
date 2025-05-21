"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaGlobeAfrica, FaCoins } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const faqs = [
  {
    question: "Is gold practical in a digital age?",
    answer:
      "Yes. The Nilar is a gold-based currency that can be easily transacted digitally. Gold provides the reliable and ethical foundation for its value, while transactions can happen physically or through modern, secure, and scalable digital platforms. This makes it as usable as mobile money, banking apps, and crypto wallets",
  },
  {
    question: "Can African countries realistically adopt the Nilar?",
    answer:
      "Absolutely. African nations have the sovereign right and capacity to establish sound monetary systems, especially because the current era of fiat currency systems has proven unjust and destructive. The Nilar is designed to be implemented gradually, nationally or regionally, with complete transparency. More importantly, African leaders have the moral, cultural, and material obligation to provide African nations with an entirely sound monetary system. ",
  },
 
  {
    question: "How does the Nilar compare to Bitcoin or CBDCs?",
    answer: {
      bullets: [
        "Bitcoin is decentralized and strictly digital, not backed by any tangible asset. Its price volatility, permanent cap of 21 million coins, and other factors make it unsuitable for large-scale commerce, practical daily transactions, and economic planning. The Nilar remains a more viable and workable form of sound money.",
        "CBDCs (Central Bank Digital Currencies) are digital fiat currencies—still inflationary, fraudulent, centrally controlled, and backed by coercion.",
      ],
      paragraph:
        "The Nilar combines the best of both worlds: gold-based, decentralized governance, independence of political manipulation, and digital availability through tokenization. It offers ethical stability, usability, and long-term reliability.",
    },
  },
  {
    question:
      "Would the Nilar replace existing currencies or work alongside them?",
    answer:
      "The Nilar can function alongside existing currencies as an alternative or complementary system. Over time, as trust builds and adoption grows, it will become the preferred medium of exchange and store of value for individuals, businesses, and even governments seeking currency stability and reliability. Fiat currencies are to be gradually phased out concurrently.",
  },
  {
    question: "  How is the Nilar secured and audited",
    answer: {
      header: ` All gold reserves backing the Nilar are independently audited and securely stored, with full transparency for public trust. Digital issuance is strictly limited to the actual gold held—eliminating inflation risk and monetary manipulation.`
    }
  },

 
];

export default function FAQAccordion() {
  return (

   <div className={`${ibmPlexSans.className}`}>
       <div  className="bg-white mb-4  pt-10 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
    Frequently Asked Questions
     </h3>
          </div>
    <div
      className={`${ibmPlexSans.className} relative  py-20 px-6 sm:px-10 lg:px-20 text-black overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-5"></div>

      {/* Decorative background icons */}
      <FaGlobeAfrica className="absolute top-10 left-5 text-[250px] text-[#ffd700] opacity-60" />
      <FaCoins className="absolute bottom-10 right-5 text-[200px] text-[#ffd700]  opacity-60" />

    

      <div className="max-w-4xl mx-auto space-y-5 relative z-10">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "black",
              boxShadow: "none",
              borderRadius: 2,
              backdropFilter: "blur(4px)",
              "&::before": { display: "none" },
              border: "1px solid #002813",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#faf9f6",
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
            >
              <Typography fontWeight="bold">{faq.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {typeof faq.answer === "string" ? (
                <Typography className="text-black">{faq.answer}</Typography>
              ) : (
                <div className="space-y-4">
                       <p className="text-black">{faq.answer.header}</p>
                 
                  <p className="text-black">{faq.answer.paragraph}</p>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
   </div>
  );
}
