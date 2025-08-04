"use client";
import {
  FaShareAlt,
  FaEnvelopeOpenText,
  FaBullhorn,
  FaHandshake,
  FaDonate,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IBM_Plex_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { sharePage } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const GetInvolved = () => {
  return (
    <section
      className={`py-8 mt-16  bg-[#f9f9f6] dark:bg-[#0f1c16] text-[#002813] dark:text-white ${ibmPlexSans.className}`}
    >
      <div className=" px-5 lg:px-10">
        <motion.h2
          className="text-xl font-bold text-[#002813] dark:text-[#ffd700] mb-4  text-left lg:text-3xl border-l-4 text-deepForest border-[#ffd700]  pl-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Involved and Spread the Vision
        </motion.h2>
        <motion.p
          className="text-lg max-w-xl text-yellow-600 ml-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Help build a just and sovereign Africa—starting with sound money.
        </motion.p>
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center ">
        <motion.p
          className="text-base text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The Nilar is more than a strategic policy proposal it’s a framework
          for monetary truth, structural justice, and African economic
          sovereignty. Whether you’re a scholar, policymaker, entrepreneur, or
          citizen who believes Africa deserves better, there’s a way for you to
          participate.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            {
              icon: <FaShareAlt className="text-yellow-500 text-2xl mt-1" />,
              title: "Share the Vision",
              text: "Post this page. Quote our work. Share the Nilar with your network.",
              cta: "Share on Social Media →",
              path: "",
            },
            {
              icon: (
                <FaEnvelopeOpenText className="text-yellow-500 text-2xl mt-1" />
              ),
              title: "Stay Informed",
              text: "Get our latest publications and policy updates on the Nilar.",
              cta: "Subscribe to Our Newsletter →",
              path: "/#subscribe",
            },
            {
              icon: <FaBullhorn className="text-yellow-500 text-2xl mt-1" />,
              title: "Invite Us to Speak",
              text: "Hosting a panel, podcast, or university talk? Invite us to speak.",
              cta: "Submit a Speaking Request →",
              path: "/involved/#submitSpeakingRequest",
            },
            {
              icon: <FaHandshake className="text-yellow-500 text-2xl mt-1" />,
              title: "Collaborate or Support",
              text: "Are you a researcher, donor, or policymaker? Let’s connect.",
              cta: "Contact Us →",
              path: "/contact",
            },
            {
              icon: <FaDonate className="text-yellow-500 text-2xl mt-1" />,
              title: "Donate",
              text: "Your generous donation is the fuel that keeps us running.",
              cta: "Donate Now →",
              path: "/donate",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-start gap-4 bg-white dark:bg-[#1a2c23] p-6 rounded-xl border border-gray-200 dark:border-[#2e4638] ${idx === 4 ? "sm:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-600 text-base dark:text-gray-300 mb-2">
                  {item.text}
                </p>
                {item.title === "Share the Vision" ? (
                  <Button
                    variant="link"
                    className="text-yellow-600 p-0 text-base"
                    onClick={sharePage}
                  >
                    {item.cta}
                  </Button>
                ) : (
                  <a href={item.path}>
                    <Button
                      variant="link"
                      className="text-yellow-600 p-0 text-base"
                    >
                      {item.cta}
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-4 font-bold">
            Africa’s economic liberation depends on principled action. Help us
            build the foundation. Share the Nilar vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
