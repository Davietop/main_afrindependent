"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ name, link }: { name: string; link: string }) => {
  const pathname = usePathname();
  const active = pathname === link;

  const onLinkClick = () => {
    const body = document.body;
    body.style.overflowY = "auto";
  };

  return (
    <m.li
      variants={variants}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="list-none pointer border-t border-deepForest pb-6"
      onClick={onLinkClick}
    >
      <Link
        href={link}
        className={`flex ${
          active ? "text-[#333333]" : "text-deepForest"
        } text-2xl font-medium font-nohemi mt-6 px-5`}
      >
        {name}
      </Link>
    </m.li>
  );
};
