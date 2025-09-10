"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { Button } from "../../button";
import { HeartHandshake } from "lucide-react";
import Page from "@/app/dashboard/page";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

export const paths = {
  home: "/",
  about: "/about",
  publications: "/publications",
  articles: "/articles",
  donate: "/donate",
  contact: "/contact",
  authors: "/authors",
  concept: "/concepts",
  Nilar: "/nilar",
  videos: "/video",
  getInvolved: "/involved",
};

export const links = [
  {
    name: "About Us",
    link: paths.about,
  },
  {
    name: "Key Concepts",
    link: paths.concept,
  },
  {
    name: "Publications",
    link: paths.publications,
  },
  {
    name: "The Nilar",
    link: paths.Nilar,
  },
  {
    name: "Videos",
    link: paths.videos,
  },
  {
    name: "Get Involved",
    link: paths.getInvolved,
  },
  {
    name: "Contact Us",
    link: paths.contact,
  },
];

const PcNav = () => {
  const pathname = usePathname();

  const shouldRenderWhite = pathname === paths.home;

  return (
    <nav
      className={`text-white    h-[80px] hidden xl:flex justify-around  relative z-10  items-center  ${
        pathname === paths.contact ? "lg:relative" : ""
      }  ${ibmPlexSans.className} `}


    >
      {
        pathname.includes("/publications") ?  <div className="flex items-center">
        <Link href="/">
          <Image
            src={`/Afridependen_2.png`}
            alt="Afrindependent.svg"
            width={170}
            height={52}
            priority
          />
        </Link>

        <ul className="flex items-center text-base font-semibold">
          {links.map(({ name, link }, index) => {
            const active = pathname === link;
            return (
              <li key={link} className="flex items-center">
                <Link
                  href={link}
                  className={`px-4 ${
                    shouldRenderWhite
                      ? `text-deepForest ${
                          active
                            ? "border-b-2 border-b-white font-extrabold"
                            : ""
                        }`
                      : `text-deepForest`
                  } pb-1 block`}
                >
                  {name}
                </Link>

                {/* Add vertical divider except after the last link */}
                {index !== links.length - 1 && (
                  <div className="h-6  w-0.5 bg-[#ffd700]"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div> : <>  <Link href="/">
          <Image
            src={`/Afridependen_2.png`}
            alt="Afrindependent.svg"
            width={170}
            height={52}
            priority
          />
        </Link>

        <ul className="flex items-center text-base font-semibold">
          {links.map(({ name, link }, index) => {
            const active = pathname === link;
            return (
              <li key={link} className="flex items-center">
                <Link
                  href={link}
                  className={`px-4 ${
                    shouldRenderWhite
                      ? `text-deepForest ${
                          active
                            ? "border-b-2 border-b-white font-extrabold"
                            : ""
                        }`
                      : `text-deepForest`
                  } pb-1 block`}
                >
                  {name}
                </Link>

                {/* Add vertical divider except after the last link */}
                {index !== links.length - 1 && (
                  <div className="h-6  w-0.5 bg-[#ffd700]"></div>
                )}
              </li>
            );
          })}
        </ul></>
      } 

     
     

      <div className="flex items-center gap-x-4">
        {pathname.includes("/publications") ? <Page /> : ""}

        <Link
          href="/donate"
          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-1.5 px-6 rounded-xl shadow-md transition duration-300"
        >
          <HeartHandshake className="w-5 h-5" />
          Donate
        </Link>
      </div>
    </nav>
  );
};

export default PcNav;
