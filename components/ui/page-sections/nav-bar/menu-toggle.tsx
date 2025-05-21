"use client";

import { m } from "framer-motion";
import { MutableRefObject, useMemo } from "react";
import { usePathname } from "next/navigation";

import { paths } from "./pc";
import { useDimensions } from "@/lib/hooks/useDimension";

const Path = (props: any) => (
  <m.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({
  isOpen,
  toggle,
  containerRef,
  turnBrown,
}: {
  isOpen: boolean;
  toggle: () => void;
  containerRef: MutableRefObject<null>;
  turnBrown?: boolean;
}) => {
  const pathname = usePathname();
  const { width } = useDimensions(containerRef)! || {};

  const shouldRenderWhite = useMemo(() => {
    if (isOpen || !width) return true;
    if (turnBrown) return false;
    return (
      pathname === paths.home || (pathname === paths.donate && width <= 1024)
    );
  }, [width, isOpen, pathname, turnBrown]);

  return (
    <button onClick={toggle} className="relative z-30">
      <svg width="30" height="30" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={ "#031f18" }
          fill={ "#031f18" }
        />
        <Path
          d="M 2 9.423 L 15 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke={ "#031f18" }
          fill={ "#031f18" }
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 10 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={ "#031f18" }

          fill={ "#031f18" }
        />
      </svg>
    </button>
  );
};
