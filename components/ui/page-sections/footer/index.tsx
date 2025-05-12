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
  FaWhatsapp,FaFacebook
} from "react-icons/fa"
import { links, paths } from "../nav-bar/pc";
import { getCompany } from "@/service/sanity-queries";
import { IBM_Plex_Sans } from 'next/font/google';

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

  return (
    <footer className={`${ibmPlexSans.className}  bg-[#D0D5CD] text-gray-300 px-6 py-14`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-5">
      {/* Logo */}
      <div className="md:col-span-1 border border-1 border-deepForest font-bold text-white bg-logo_bg bg-center bg-cover h-[200px] w-[200px] ">
       
       
      </div>
  
      {/* Footer Links - visible in 4 cols on md+ */}
      <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-base">
        {/* About */}
        <div className="text-deepForest">
          <h4 className="text-lg font-semibold text-deepForest mb-3">About Us</h4>
          <ul className="space-y-2 text-base">
            <li><a href="/about" className="">Mission</a></li>
          
            <li><a href="/about" className="">About</a></li>
          
          </ul>
        </div>
  
        {/* Support */}
        <div className="text-deepForest">
          <h4 className="text-lg font-semibold  mb-3">Support</h4>
          <ul className="space-y-2 text-base">
            <li><a href="/involved" className="">Get Involved</a></li>
            <li><a href="/contact" className="">Contact</a></li>
            <li><a href="/donate" className="">Donate</a></li>
          </ul>
        </div>
  
        {/* Others */}
        <div className="text-deepForest">
          <h4 className="text-lg font-semibold  mb-3">Resources</h4>
          <ul className="space-y-2 text-base">
            <li><a href="/concepts" className="">Concept</a></li>
            <li><a href="/publications" className="">Publication</a></li>
            <li><a href="/nilar" className="">The Nilar</a></li>
            <li><a href="/video" className="hover:text-white">Videos</a></li>
          </ul>
        </div>
  
        {/* Socials & Contact */}
        <div className="text-deepForest"> 
          <h4 className="text-lg font-semibold  mb-3">Socials</h4>
          <div className="flex gap-3 flex-wrap mb-4 text-lg">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ffd700] hover:bg-gray-700 text-deepForest p-2 rounded-full"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          <div className="text-base space-y-1 ">
            {companyDetails?.title && <p>{companyDetails.title}</p>}
            {companyDetails?.location && <p>{companyDetails.location}</p>}
            {companyDetails?.email && <p>{companyDetails.email}</p>}
            {companyDetails?.phoneNumber && <p>{companyDetails.phoneNumber}</p>}
          </div>
        </div>
      </div>
    </div>
  
    {/* Bottom Bar */}
    <div className="mt-14 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-base text-deepForest gap-4">
      <p>© {new Date().getFullYear()} Afrindependent Institute. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="/terms" className="hover:text-white transition">Terms of Service</a>
        <a href="#top" className="hover:text-white font-semibold transition">Back to top</a>
      </div>
    </div>
  </footer>
  


   
  );
};

export default Footer;
