"use client";

import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { links, paths } from "./pc";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const MobileDevV2 = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <div className={`${ibmPlexSans.className} xl:hidden`}>
      {/* Top Navbar */}
      <header className="fixed w-full top-0 left-0 bg-white z-50">
        <div className="flex items-center justify-between px-3 py-4">
          <div className="flex items-center">
            {/* Sidebar Toggle */}


            {/* Logo */}
            <Link href="/">
              <Image
                src={`/Afridependen_2.png`}
                alt="Afrindependent"
                width={180}
                height={1}
                className="relative z-30"
                priority
              />
            </Link>
          </div>

          
         <button onClick={toggleSidebar}>
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
        </div>
      </header>

      {/* Backdrop + Animated Sidebar */}
      <div className="relative z-40">
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-16  left-0 w-8/12 h-screen bg-[#ffd700] z-50 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {[...links, { name: "Donate", link: paths.donate }].map(
            ({ name, link }) => {
              const isActive = pathname === link;
              return (
                <Link
                  key={name}
                  href={link}
                  className={`flex relative items-center border-b  `}
                >
                   {
                    isActive &&  <div className="h-full w-[10px] z-10 bg-deepForest absolute l-0"></div>
                   }
                <div className="flex relative items-center px-4 py-7 border-b pl-6 ">
                      {/* <div className="w-6 h-6 bg-gray-300 mr-3 rounded-sm flex-shrink-0" /> */}
                  <span className="text-lg font-semibold">{name}</span>
                </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
