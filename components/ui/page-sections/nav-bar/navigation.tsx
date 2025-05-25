import { m } from "framer-motion";

import { MenuItem } from "./menu-item";
import { links, paths } from "./pc";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface PropType {
  isOpen: boolean;
}

export const Navigation = ({ isOpen }: PropType) => (
  <m.ul
    variants={variants}
    className={`absolute h-scrren  left-0 right-0 top-[117px] w-full ${
      isOpen ? "z-50" : "-z-10"
    }`}
  >
    {[...links, { name: "Donate", link: paths.donate }].map(
      ({ name, link }) => (
        <MenuItem name={name} key={name} link={link} />
      )
    )}
  </m.ul>
);
