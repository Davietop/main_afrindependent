"use client";

import { m, useScroll, useTransform } from "framer-motion";

const Library = () => {
  const { scrollYProgress } = useScroll();

  const rotateValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1440, 2880]
  );

  const translateYValue = useTransform(scrollYProgress, [0, 1], [-200, 300]);

  return (
    <figure className="h-[628px] lg:h-[728px] flex items-center justify-center relative overflow-hidden bg-[#F2F2F2]">
      <m.img
        style={{
          translateY: translateYValue,
        }}
        className="absolute -top-[80px] inset-0 h-[120%] w-full object-cover"
        src="/library.jpg"
        alt=""
        width={2082}
        height={1204}
      />
      <div className="h-fit w-fit absolute left-4 bottom-20 lg:bottom-24 lg:left-14">
        <m.img
          style={{ rotate: rotateValue }}
          className="z-20 w-36 lg:w-48 h-auto"
          src="/circular.svg"
          alt=""
          width={343}
          height={343}
        />
      </div>
    </figure>
  );
};

export default Library;
