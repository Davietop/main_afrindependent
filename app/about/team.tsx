"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDimensions } from "@/lib/hooks/useDimension";
import useMousePosition from "@/lib/hooks/useMousePosition";
import { TeamDto } from "@/lib/types";

const Team = ({ team }: { team: TeamDto[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const position = useMousePosition();
  const { width } = useDimensions(containerRef)! || {};

  const shouldShowArrow = width >= 1024 ? team!?.length > 3 : team!?.length > 1;
  return (
    <section className="pl-5 lg:pl-14 py-10 lg:py-24 bg-[#f2f2f2]">
      <h1 className="text-3xl lg:text-7xl font-nohemi font-semibold mb-10 lg:mb-20 text-secondary">
        Our Team
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full overflow-hidden z-20 group/parent"
        ref={containerRef}
      >
        {shouldShowArrow ? (
          <CarouselNext
            className={`${
              position === "right"
                ? "opacity-100 pointer-events-auto scale-100"
                : "opacity-0 pointer-events-none scale-50"
            } right-12 h-[165px] w-[165px] rounded-full hidden lg:group-hover/parent:flex overflow-hidden z-[90] disabled:opacity-0 disabled:pointer-events-auto duration-500 transition-all`}
          />
        ) : null}
        {shouldShowArrow ? (
          <CarouselPrevious
            className={`${
              position === "left"
                ? "opacity-100 pointer-events-auto scale-100"
                : "opacity-0 pointer-events-none scale-50"
            } left-12 h-[165px] w-[165px] rounded-full hidden lg:group-hover/parent:flex overflow-hidden z-[90] disabled:opacity-0 disabled:pointer-events-auto duration-500 transition-all`}
          />
        ) : null}
        <CarouselContent className="gap-2 lg:gap-[40px]">
          {team.map(({ id, desc, name, image }) => (
            <CarouselItem
              key={id}
              className="basis-1/2 lg:basis-1/3 h-fit w-fit"
            >
              <div className="">
                <div
                  className={`w-full h-[198px] lg:w-[427px] lg:h-[449px] overflow-hidden ${
                    !image ? "bg-[#B7B7B7]" : ""
                  }`}
                >
                  <Image
                    src={image ? image : "/user-temp.png"}
                    alt={name}
                    width={427}
                    height={449}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-nohemi font-light text-lg lg:text-3xl text-[#323232] mt-4">
                  {name}
                </h3>
                <p className="text-sm lg:text-lg font-inter_tight text-[#323232]">
                  {desc}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Team;
