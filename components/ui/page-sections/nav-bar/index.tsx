import PcNav from "./pc";
import { MobileNav } from "./mobile";
import { MobileDevV2 } from "./mobilev2";

const Navbar = ({ turnBrown }: { turnBrown?: boolean }) => {
  return (
    <>
      {/* <MobileNav turnBrown={turnBrown} /> */}
      <MobileDevV2/>
      <PcNav />
    </>
  );
};

export default Navbar;
