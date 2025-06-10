"use client";

import { useCallback, useMemo, useRef } from "react";
import { m, useCycle } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";
import { useDimensions } from "@/lib/hooks/useDimension";
import { paths } from "./pc";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    backgroundColor: "#ffd700",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    backgroundColor: "#202020",
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = ({ turnBrown = false }: { turnBrown?: boolean }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef)! || {};
  const pathname = usePathname();

  const shouldRenderWhite = useMemo(() => {
    if (isOpen || !width) return true;
    if (turnBrown) return false;
    return (
      pathname === paths.home || (pathname === paths.donate && width <= 1024)
    );
  }, [width, isOpen, pathname, turnBrown]);

  const handleToggle = useCallback(() => {
    const body = document.body;
    toggleOpen();
    if (isOpen) {
      body.style.overflowY = "auto";
    } else {
      body.style.overflowY = "hidden";
    }
  }, [isOpen, toggleOpen]);

  return (
    <m.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="flex   w-full items-center justify-between xl:hidden"
    >
      <m.div className="flex w-full py-6 items-center justify-between px-2     z-40 ">
      <Link href="/">
        <Image
          src={`/Afridependen_2.png`}
          alt="Afrindependent"
          width={200}
          height={1}
          className="  relative z-30"
          priority
        />
      </Link>
      
      <MenuToggle
        isOpen={isOpen}
        toggle={handleToggle}
        containerRef={containerRef}
        turnBrown={turnBrown}
      />
      </m.div>
    
      <m.div
        className={`h-screen absolute right-0 bottom-0 top-0 w-full z-30`}
        variants={sidebar}
      />
      <Navigation isOpen={isOpen} />
    </m.nav>
  );
};
