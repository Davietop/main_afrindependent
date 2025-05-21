import Banner from "@/components/banner";
import {
  leftBanner,
  leftSubBanner,
  rightBanner,
  rightSubBanner,
} from "./banners";

const Home = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center relative overflow-hidden">
      <div className="bg-transparent absolute inset-0 h-full overflow-hidden z-[4] flex justify-around items-end px-5 lg:px-7 gap-10">
        <div className="w-fit h-full overflow-hidden">
          <Banner images={leftSubBanner} isSub />
        </div>
        <div className="w-fit h-full overflow-hidden hidden lg:block">
          <Banner images={rightSubBanner} isSub />
        </div>
      </div>
      <div className="bg-transparent absolute inset-0 w-full h-full z-[3] flex justify-between items-end  lg:px-7">
        <div className="w-fit h-full overflow-hidden">
          <Banner images={leftBanner} />
        </div>
        <div className="w-fit h-full overflow-hidden">
          <Banner images={rightBanner} />
        </div>
      </div>
      <div className="bg-gradient absolute inset-0 h-full w-full z-[4]"></div>
      <div className="min-h-[calc(100vh-200px)] lg:min-h-screen my-4 lg:my-12">
        <div className="bg-transparent absolute inset-0 h-full z-[7]">
          <div className="h-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-7 lg:gap-20 px-5">
            <h2 className="text-4xl lg:text-6xl max-w-md font-bold text-primary font-nohemi">
              HOME OF AFRICONOMICS
            </h2>
            <p className="text-white text-lg lg:text-2xl font-medium font-inter_tight leading-[28px] lg:leading-[40px]">
              Welcome to the Afrindependent Institute, where we pave the way for
              integrated, stable, prosperous African economies with
              Africonomics. We are a nonprofit and non-partisan organization
              whose fundamental purpose is to develop and promote Africonomics,
              the African approach to economics, jurisprudence, and other social
              sciences based on a natural-moral law philosophical framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
