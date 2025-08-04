"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IBM_Plex_Sans } from 'next/font/google';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaCopy, FaShareAlt } from "react-icons/fa";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);

  const [open, setOpen] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      label: "Facebook",
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      label: "Twitter",
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`,
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      url: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
    },
  ];

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: currentUrl,
      });
    } catch (err) {
      console.log("Native share failed:", err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <main className={`${ibmPlexSans.className} pt-16 xl:pt-0 xl:mt-0`}>
      <div className="bg-white">
        <section className="relative py-16 xl:py-32 min-h-fit bg-deepForest flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-nilar_coin bg-cover bg-center opacity-30 z-0" />
          <div className="absolute inset-0 bg-opacity-80 z-0" />
          <div className="relative w-full z-10 lg:max-w-5xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl leading-snug font-extrabold lg:leading-tight mb-6 lg:mb-6">
              The Nilar: <br className="block md:hidden" />
              A Gold-Based Currency for African Economic Sovereignty
            </h1>

            <p className="text-lg md:text-xl mb-6 text-[#ffd700] lg:mb-6">
              Rooted in Africonomics. Grounded in justice. Built for Prosperity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button className="flex items-center justify-center gap-3 border-2 bg-deepForest border-deepForest text-[#ffd700] hover:text-deepForest hover:bg-white font-semibold py-3 px-6 rounded-3xl shadow-md transition duration-300">
                <a href="https://www.afrindependent.org/publications/why-the-nilar-is-superior-to-bitcoin-as-a-comprehensive-monetary-solution?type=policy-papers">
                  Read the Policy Paper
                </a>
              </button>

              {/* Share Button */}
              <div className="relative">
                <button
                  onClick={() =>
                    typeof navigator.share !== "undefined"
                      ? nativeShare()
                      : setOpen(!open)
                  }
                  className="flex w-full items-center justify-center gap-3 border-2 bg-deepForest border-deepForest text-[#ffd700] hover:text-deepForest hover:bg-white font-semibold py-3 px-6 rounded-3xl shadow-md transition duration-300"
                >
                  <FaShareAlt /> Share this Page
                </button>

                {open && (
                  <div className="absolute z-50 mt-2 right-0 bg-white border border-gray-200 shadow-lg rounded-md w-52 p-2 space-y-2 text-sm text-gray-800">
                    {shareLinks.map((platform) => (
                      <a
                        key={platform.label}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 hover:text-deepForest"
                      >
                        {platform.icon} {platform.label}
                      </a>
                    ))}
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 px-3 py-1 hover:text-deepForest "
                    >
                      <FaCopy /> Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
