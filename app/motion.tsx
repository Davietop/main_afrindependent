"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { useEffect } from "react";
import "./locomotive.css";

const Motion = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </>
  );
};

export default Motion;
