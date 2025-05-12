import Image from "next/image";

const Founder = () => {
  return (
    <section className="px-5 lg:px-14 pb-14 lg:pb-36 bg-[#f2f2f2]">
      <h1 className="text-3xl lg:text-7xl leading-[60px] font-nohemi font-semibold mb-6 lg:mb-20 text-secondary">
        Meet Our Founder
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-40">
        <div className="flex-1 space-y-6 lg:space-y-12">
          <p className="font-inter_tight lg:font-medium text-[#323232] text-lg leading-[28px] lg:text-2xl lg:leading-[40px]">
            Manuel Tacanho is a social philosopher and economist. He&apos;s the
            founder and president of the Afrindependent Institute, a think-tank
            dedicated to developing and promoting Africonomics, a school of
            African philosophical and economic thought.
          </p>
          <p className="font-inter_tight lg:font-medium text-[#323232] text-lg leading-[28px] lg:text-2xl lg:leading-[40px]">
            Mr. Tacanho&apos;s professional journey began in the Oil and Gas
            industry, where he gained skills in supervision of offshore drilling
            operations for over five years after graduating from a technical
            petroleum school in Angola. A pivotal career transition led him to
            South Africa, where he pursued and completed his BA in International
            Relations at Stellenbosch University.
          </p>
          <p className="font-inter_tight lg:font-medium text-[#323232] text-lg leading-[28px] lg:text-2xl lg:leading-[40px]">
            Upon his return to Angola, Mr. Tacanho furthered his expertise by
            joining the Angola Sovereign Wealth Fund (FSDEA) in 2015, following
            his successful completion of the Future Leaders of Angola Program in
            Switzerland at the ZHAW School of Management and Law.
          </p>
          <p className="font-inter_tight lg:font-medium text-[#323232] text-lg leading-[28px] lg:text-2xl lg:leading-[40px]">
            Mr. Tacanho founded two ventures, one in the retail gas sector in
            Angola and a digital banking startup in Germany. While these
            initiatives did not reach the desired success, they provided
            valuable insights, entrepreneurial experience, and enduring
            relationships.
          </p>
          <p className="font-inter_tight lg:font-medium text-[#323232] text-lg leading-[28px] lg:text-2xl lg:leading-[40px]">
            As a scholar, Mr. Tacanho dedicates his efforts to building the
            foundations of Africonomics, the African approach to economics and
            other social sciences based on a natural-moral law philosophical
            framework. As an entrepreneur he leads the Afrindependent Institute,
            which he founded in 2022.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative h-fit">
            <Image
              src="/founder.jpg"
              className="lg:max-h-[460px] lg:w-auto w-full h-auto object-cover"
              alt="africa"
              width={567}
              height={655}
            />
            <div className="absolute bottom-4 left-4 text-primary font-nohemi text-[28px] leading-[28px] lg:text-6xl lg:leading-[50px] z-0">
              <h3 className="font-light">Manuel</h3>
              <h3 className="font-medium">Tacanho</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
