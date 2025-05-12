"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

import useIntersection from "@/lib/hooks/useIntersection";

const PcModel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const tradeRef = useRef<HTMLDivElement>(null);
  const enterpriseRef = useRef<HTMLDivElement>(null);
  const soundRef = useRef<HTMLDivElement>(null);

  const tradeInView = useIntersection(tradeRef, "0px");
  const enterpriseInView = useIntersection(enterpriseRef, "0px");
  const soundInView = useIntersection(soundRef, "0px");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const active = useMemo(() => {
    if (tradeInView) return "trade";
    if (enterpriseInView) return "enterprise";
    if (soundInView) return "monetary";
  }, [tradeInView, enterpriseInView, soundInView]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [1.3, 0.7, 0.7, 0.7]
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["0px", "-336px", "-336px", "-336px"]
  );

  return (
    <div className="hidden lg:block py-20 max-lg:overflow-hidden">
      <div className="flex sticky top-0 left-0 w-full h-[calc(100vh-100px)]">
        <div className="flex-1 flex items-center justify-center">
          <m.div
            style={{
              scale,
              translate,
            }}
            className="rotate font-nohemi h-[432px] w-[432px] border border-secondary rounded-full flex items-center justify-center relative"
          >
            <div
              className={`rev-rotate px-4 py-1 rounded-[40px] absolute z-10 top-2 -right-[60px] ${
                active === "trade"
                  ? "bg-secondary"
                  : "border border-secondary bg-[#f2f2f2]"
              }`}
            >
              <span
                className={`${
                  active === "trade" ? "text-white" : "text-secondary"
                } text-nowrap font-semibold`}
              >
                Free Trade
              </span>
            </div>
            <div
              className={`rev-rotate px-4 py-1 rounded-[40px] absolute z-10  -top-2 -left-[60px]  ${
                active === "enterprise"
                  ? "bg-secondary"
                  : "border border-secondary bg-[#f2f2f2]"
              }`}
            >
              <span
                className={`${
                  active === "enterprise" ? "text-white" : "text-secondary"
                } text-nowrap font-semibold`}
              >
                Free Enterprise
              </span>
            </div>
            <div
              className={`rev-rotate px-4 py-1 rounded-[40px] absolute z-10 -bottom-8 -left-[60px] ${
                active === "monetary"
                  ? "bg-secondary"
                  : "border border-secondary bg-[#f2f2f2]"
              }`}
            >
              <span
                className={`${
                  active === "monetary" ? "text-white" : "text-secondary"
                } text-nowrap font-semibold`}
              >
                Sound Monetary System
              </span>
            </div>

            <div
              className={`h-[36px] w-[36px] rounded-full ${
                active === "trade" ? "bg-secondary" : "bg-primary"
              } absolute top-20 right-4`}
            ></div>
            <div
              className={`h-[36px] w-[36px] rounded-full ${
                active === "enterprise" ? "bg-secondary" : "bg-primary"
              } absolute top-14 left-9`}
            ></div>
            <div
              className={`h-[36px] w-[36px] rounded-full ${
                active === "monetary" ? "bg-secondary" : "bg-primary"
              } absolute bottom-4 left-20`}
            ></div>

            <div
              className={`h-[260px] w-[260px] rounded-full  flex flex-col items-center justify-center rev-rotate ${
                active ? "bg-secondary" : "bg-primary"
              }`}
            >
              <span
                className={`${
                  active ? "text-primary" : "text-secondary"
                } font-nohemi font-semibold text-2xl`}
              >
                The
              </span>
              <span
                className={`${
                  active ? "text-primary" : "text-secondary"
                } font-nohemi font-semibold text-2xl`}
              >
                Nilar
              </span>
              <span
                className={`${
                  active ? "text-primary" : "text-secondary"
                } font-nohemi font-semibold text-2xl`}
              >
                Model
              </span>
            </div>
          </m.div>
        </div>
        {/* <div className="flex-1"></div> */}
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <div
          ref={ref}
          className="flex-1 flex flex-col items-center overflow-y-auto"
        >
          <div
            className="mb-[calc(100vh)] max-w-[520px] space-y-4"
            ref={enterpriseRef}
          >
            <h3 className="text-secondary font-nohemi font-semibold text-5xl leading-[60px]">
              Free Enterprise
            </h3>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              Afrindependent advocates for a free enterprise system because it
              is morally superior to the statist/socialist approach adopted in
              the postcolonial era, which is characterized by centralized
              systems of bureaucracy, coercion, and repression.
            </p>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              Since the statist approach was clearly proven repressive and
              ruinous, African economies would benefit tremendously by
              transitioning to a free-enterprise system through AfCFTA to
              achieve integrated, stable, and thriving African economies.
            </p>
          </div>
          <div
            className="mb-[calc(100vh)] max-w-[520px] space-y-4"
            ref={tradeRef}
          >
            <h3 className="text-secondary font-nohemi font-semibold text-5xl leading-[60px]">
              Free Trade
            </h3>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              The AfCFTA is a remarkable achievement and a crucial step forward
              in the right direction. Free enterprise and free trade have long
              been integral components of Africa’s economic heritage, dating
              back centuries before the colonial era. Free enterprise and free
              trade are indigenous, not foreign, to Africa.
            </p>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              Afrindependent calls on African leaders to dismantle the numerous
              artificial barriers that suppress savings, investment, free
              enterprise, and free trade within and among African societies.
              This action is vital in paving the way to integrated, stable, and
              thriving African economies while fostering genuine peace,
              fraternity, and collaboration among African people.
            </p>
          </div>
          <div
            className="mb-[calc(30vh)] max-w-[520px] space-y-4"
            ref={soundRef}
          >
            <h3 className="text-secondary font-nohemi font-semibold text-5xl leading-[60px]">
              Sound Monetary System (i.e. the nilar)
            </h3>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              The nilar, a gold currency system designed for African societies,
              is the backbone of the economic model Africonomics presents for
              achieving integrated, stable, and prosperous African economies.
            </p>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              The monetary history of postcolonial Africa can be summed up in
              three words: chaos and ruination. The era of central bank-managed
              fiat currency systems under the fiat dollar standard has caused
              much turmoil and poverty in Africa. Instead of pinning hopes on a
              speculated BRICS currency, African economies should transition
              from unjust and ruinous fiat currency systems to the nilar, an
              entirely sound monetary system.
            </p>
            <p className="text-2xl font-medium leading-[40px] font-inter_tight">
              This monetary shift is essential, as the nilar provides a
              much-needed stable and trustworthy single currency to achieve
              integrated, stable, and prosperous African economies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcModel;
