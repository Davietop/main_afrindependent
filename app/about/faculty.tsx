"use client";

import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { paths } from "@/components/ui/page-sections/nav-bar/pc";
import { FacultyMembersDto } from "@/lib/types";

const Faculty = ({ members }: { members: FacultyMembersDto[] }) => {
  return (
    <section className="pl-5 lg:pl-14 py-10 lg:py-24 bg-[#E7E7E7]">
      <h1 className="text-3xl lg:text-7xl font-nohemi font-semibold mb-10 lg:mb-20 text-secondary">
        Faculty Members
      </h1>
      <div className="h-fit overflow-hidden relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full overflow-hidden z-20"
        >
          <CarouselContent className="gap-2 lg:gap-[40px]">
            {members.map(({ slug, desc, name, image }, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/3 h-fit w-fit"
              >
                <div className="lg:space-y-2">
                  <div
                    className={`w-full h-[198px] lg:w-[427px] lg:h-[449px] overflow-hidden rounded-2xl lg:rounded-[34px] mb-3 lg:mb-0 ${
                      !image ? "bg-[#B7B7B7]" : ""
                    }`}
                  >
                    <Image
                      src={image ? image : "/user-temp.png"}
                      alt={name}
                      width={427}
                      height={449}
                      className="object-cover w-full"
                    />
                  </div>
                  <h3 className="font-nohemi font-semibold text-lg lg:text-3xl text-[#323232]">
                    {name}
                  </h3>
                  <p className="text-sm lg:text-lg font-inter_tight text-[#323232] mb-3 lg:mb-0">
                    {desc}
                  </p>
                  <div>
                    <Link
                      href={`${paths.authors}/${slug}`}
                      className="w-8 h-8 lg:w-[76px] lg:h-[76px] rounded-full border lg:border-[3px] border-[#202020] flex items-center justify-center"
                    >
                      <GoArrowUpRight className="text-[#202020] h-[20px] lg:h-[50px] w-auto" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Faculty;
