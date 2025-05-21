"use client";

import { m, useScroll, useTransform } from "framer-motion";

const Yard = () => {
  const { scrollYProgress } = useScroll();

  const rotateValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1440, 2880]
  );

  const translateYValue = useTransform(scrollYProgress, [0, 1], [-200, 300]);

  return (
    <figure className="h-[728px] transform flex items-center justify-center relative overflow-hidden bg-[#F2F2F2]">
      <div className="absolute inset-0 h-[120%] ">
        <m.img
          style={{
            translateY: translateYValue,
          }}
          className="h-full w-full object-cover"
          src="/elephant-about.jpg"
          alt=""
          width={2082}
          height={1204}
        />
      </div>
      <div className="h-fit w-fit absolute left-4 bottom-8 lg:bottom-14 lg:left-14">
        <m.img
          style={{ rotate: rotateValue }}
          className="z-20 w-36 lg:w-56 h-auto"
          src="/circular.svg"
          alt=""
          width={343}
          height={343}
        />
      </div>
    </figure>
  );
};

export default Yard;
