"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useMemo } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,FaFacebook, FaRss

} from "react-icons/fa"

import { links, paths } from "../nav-bar/pc";
import { getCompany } from "@/service/sanity-queries";
import { IBM_Plex_Sans } from 'next/font/google';
import { HeartHandshake } from "lucide-react";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});


export const useCompany = () => {
  const fetcher = () => {
    return getCompany();
  };
  const { data, isLoading, error, mutate } = useSWR("company", fetcher);
  return { data, isLoading, error, mutate };
};

const Footer = () => {
  const { data: companyDetails } = useCompany();
 
 
  const socials = useMemo(() => {
    return  [
      {
        icon: <FaLinkedin />,
        link: companyDetails?.linkedin || "",
      },
      {
        icon: <FaTwitter />,
        link: companyDetails?.Twitter || "",
      },
      {
        icon: <FaInstagram />,
        link: companyDetails?.instagram || "",
      },
      {
        icon: <FaTiktok />,
        link: companyDetails?.tiktok || "",
      },
      {
        icon: <FaYoutube />,
        link: companyDetails?.youtube || "",
      },
      {
        icon: <FaWhatsapp />,
        link: companyDetails?.youtube || "",
      },
      {
        icon: <FaFacebook />,
        link: companyDetails?.youtube || "",
      },
    ]
  }, [companyDetails]);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${ibmPlexSans.className} bg-[#f4f1e6] text-deepForest `}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Menu */}
        <div>
        <h2 className="font-bold text-xl mb-4">Menu</h2>
          <ul className="space-y-2 text-base">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/concepts" className="hover:underline">Key Concepts</a></li>
            <li><a href="/publications" className="hover:underline">Publications</a></li>
            <li><a href="/nilar" className="hover:underline">The Nilar</a></li>
            <li><a href="/video" className="hover:underline">Videos</a></li>
            <li><a href="/involved" className="hover:underline">Get Involved</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/involved#submit" className="hover:underline">Submit an Article</a></li>
          </ul>
        </div>

        {/* Special Projects */}
        <div>
        <h2 className="font-bold text-xl mb-4">Contact Details</h2>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">Ten Thousand Commandments</a></li>
            <li><a href="#" className="hover:underline">Eye on FTC</a></li>
            <li><a href="#" className="hover:underline">Children Online Safety Tools</a></li>
            <li><a href="#" className="hover:underline">Net Neutrality 101</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h2 className="font-bold text-xl mb-4">Contact Details</h2>
          <div className="text-base  space-y-1 ">
         
       {companyDetails?.title && <p>{companyDetails.title}</p>}
            {companyDetails?.location && <p>{companyDetails.location}</p>}
            {companyDetails?.email && <p>{companyDetails.email}</p>}
            {companyDetails?.phoneNumber && <p>{companyDetails.phoneNumber}</p>}
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-xl">
          {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ffd700] hover:bg-white text-deepForest p-2 rounded-full"
                >
                  {social.icon}
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-[#d0d5cd] text-center text-lg ">
        <div className="max-w-7xl flex flex-col gap-y-4 lg:flex-row lg:items-center py-10 justify-between mx-auto px-6 ">
        <Image    src={`/Afridependen_2.png`} height={230} width={230} alt=""/>
     <p className="text-left">   © {currentYear} Afrindependent Institute. All rights reserved {" "}</p>
        </div>
       
       
      </div>
    </footer>
  );
};

export default Footer;
