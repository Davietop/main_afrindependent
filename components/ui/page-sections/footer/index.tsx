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

  return (
<footer className={`${ibmPlexSans.className} bg-[#d0d5cd]  text-white py-4`}>
   
      <div className="container mx-auto px-4">
    <div className="w-fit">
           <Link href="/">
        <Image
          src={`/Afridependent.svg`}
          alt="Afrindependent.svg"
          width={250}
          height={52}
          priority
        />
      </Link>
    </div>
        <div className="relative top-[-40px] grid grid-cols-1 text-black md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-xl mb-4">GENERAL</h2>
            <ul className="space-y-2">
            <li><a href="/contact" className="">Contact</a></li>
             
          <li><a href="/about" className="">About Us</a></li>
              <li><a href="/nilar" className="">The Nilar</a></li>
              <li><a href="/involved" className="">Get Involved</a></li>
            
            </ul>
          </div>
          <div>
          
       
            <h2 className="font-bold text-xl mb-4">Writings</h2>
            <ul className="space-y-2">
             <li><a href="/concepts" className="">Key Concepts</a></li>
              <li><a href="/publications" className="">Publication</a></li>
         <li><a href="/video" className="hover:text-white">Videos</a></li>
           
            </ul>
          </div>
         <div className="text-base space-y-1 ">
          <h2 className="font-bold text-xl mb-4">Contact Details</h2>
            {companyDetails?.title && <p>{companyDetails.title}</p>}
            {companyDetails?.location && <p>{companyDetails.location}</p>}
            {companyDetails?.email && <p>{companyDetails.email}</p>}
            {companyDetails?.phoneNumber && <p>{companyDetails.phoneNumber}</p>}
          </div>
        </div>

       
           <div className="flex gap-3 flex-wrap mb-4 text-lg">
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


        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-black">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 font-medium">
            <Link href="/concepts">KEY CONCEPTS</Link>
            <Link href="/publications">PUBLICATIONS</Link>
            <Link href="/nilar">THE NILAR</Link>
           
            <Link href="/about">ABOUT US</Link>
           
           <Link
                href="/donate"
                className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
              >
                <HeartHandshake className="w-5 h-5" />
                Donate
              </Link>
          </div>
          
        </div>
      </div>
    </footer>
  


   
  );
};

export default Footer;




