interface PropType {
  active: "trade" | "enterprise" | "monetary";
}

const ModelRotate = ({ active }: PropType) => {
  return (
    <div
      className="animation-[5s] font-nohemi h-[140px] w-[140px] border border-deepForest rounded-full flex items-center justify-center relative mx-auto mt-4"
      style={{ animationDuration: "20s" }}
    >
      <div
        className={`px-[10px] rounded-[40px] absolute top-2 -right-[60px] ${
          active === "trade"
            ? "bg-deepForest text-white"
            : "border border-deepForest bg-[#f2f2f2]"
        }`}
      >
        <span className=" text-[10px] text-nowrap">Free Trade</span>
      </div>
      <div
        className={`px-[10px] rounded-[40px] absolute  -top-2 -left-[60px]  ${
          active === "enterprise"
            ? "bg-deepForest text-white"
            : "border border-deepForest bg-[#f2f2f2]"
        }`}
      >
        <span className=" text-[10px] text-nowrap">
          Free Enterprise
        </span>
      </div>
      <div
        className={`px-[10px] rounded-[40px] absolute -bottom-8 -left-[60px] ${
          active === "monetary"
            ? "bg-deepForest text-white"
            : "border border-deepForest bg-[#f2f2f2]"
        }`}
      >
        <span className=" text-[10px] text-nowrap">
          Sound Monetary System
        </span>
      </div>

      <div
        className={`h-3 w-3 rounded-full ${
          active === "trade" ? "bg-[#ffd700]" : "bg-deepForest"
        } absolute top-12 right-[-5px]`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full ${
          active === "enterprise" ? "bg-[#ffd700]" : "bg-deepForest"
        } absolute top-6 left-1`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full ${
          active === "monetary" ? "bg-[#ffd700]" : "bg-deepForest"
        } absolute bottom-2 left-5`}
      ></div>

      <div className="h-[100px] w-[100px] rounded-full bg-deepForest font-inter_tight  flex gap-x-2 items-center justify-center">
        <span className="text-white text-xs">The</span>
        <span className="text-white text-xs">Nilar</span>
        <span className="text-white text-xs">Model</span>
      </div>
    </div>
  );
};

export default ModelRotate;
