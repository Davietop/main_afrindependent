import PcNav from "./pc";
import { MobileNav } from "./mobile";

const Navbar = ({ turnBrown }: { turnBrown?: boolean }) => {
  return (
    <>
      <MobileNav turnBrown={turnBrown} />
      <PcNav />
    </>
  );
};

export default Navbar;
