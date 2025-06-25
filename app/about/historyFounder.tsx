import Image from "next/image";
import mission_img from "../../public/AfridependentLogo.svg";
import founder from "../../public/founder.jpg";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

const HistoryFounder = () => {
  return (
    <div className={`${ibmPlexSans.className}`}>
      <h2 className=" text-2xl px-6 sm:px-10 lg:px-20 pt-10  sm:text-3xl font-bold text-[#00210d] dark:text-yellow-300 ">
        <p className="border-l-4 border-yellow-400 pl-4">History And Founder</p>
      </h2>

      <div
        className={`${ibmPlexSans.className} flex flex-col xl:flex-row items-center justify-center gap-x-10 mt-10 mb-10`}
      >
        <div className="relative w-11/12 md:w-9/12 lg:h-[400px] h-[400px] xl:w-4/12   text-white  overflow-hidden">
          <Image
            src={founder}
            height={600}
            width={400}
            alt="mission_img"
            className="absolute object-contain  left-1/2  transform -translate-x-1/2"
          />
        </div>

        <div className="w-11/12 md:w-10/12 md:text-center xl:text-left xl:w-7/12 mt-4 lg:mt-0 ">
          <p className="lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px] ">
            The Afrindependent Institute was founded by{" "}
            <span className="font-bold"> Manuel Tacanho</span>, a social
            philosopher and economist, to reframe the global conversation around
            African economic development, governance, and justice.
          </p>
          <p className="lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
            Dissatisfied with the moral emptiness and structural failures of
            mainstream economics and state-led development models, Tacanho began
            formulating Africonomics—a school of African philosophical and
            economic thought grounded in natural-moral law, human dignity, and
            voluntary exchange.
          </p>
          <p className=" lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
            What began as a critique of fiat money and statist economics evolved
            into a far-reaching intellectual project: to reconstruct African
            social and economic thought from first principles, restore truth in
            economic science, and support African nations in building free,
            just, and prosperous postcolonial societies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryFounder;
