import Image from "next/image";

interface ImageData {
  id: string;
  image: string;
  width: number;
  height: number;
}

interface BannerProps {
  images: ImageData[];
  isSub?: boolean;
}

const Banner = ({ images, isSub = false }: BannerProps) => {
  const marginValues = ["mb-4", "mb-10", "mb-14", "mb-16", "mb-20"];

  const heightValues = [
    "h-[200px] lg:h-[320px]",
    "h-[260px] lg:h-[460px]",
    "h-[220px] lg:h-[420px]",
    "h-[160px] lg:h-[260px]",
    "h-[220px] lg:h-[420px]",
  ];

  const randomMargins = Array.from(
    { length: 4 },
    () => marginValues[Math.floor(Math.random() * marginValues.length)]
  );

  const randomHeights = Array.from(
    { length: 4 },
    () => heightValues[Math.floor(Math.random() * heightValues.length)]
  );

  return (
    <div className="h-full">
      <div
        className={`${
          isSub ? "rev-section-animate" : "section-animate"
        } lg:w-96 h-full flex flex-col translate-y-full lg:-translate-y-full`}
      >
        {images.map(({ id, image, width, height }, index) => {
          return (
            <div key={id} className={`w-fit h-fit`}>
              <Image
                className={` ${
                  isSub
                    ? `${
                        randomHeights[index]
                          ? randomHeights[index]
                          : "h-[220px] lg:h-[450px]"
                      } w-auto`
                    : "h-auto w-40 lg:w-80"
                }  block ${
                  randomMargins[index] ? randomMargins[index] : "mb-14"
                }`}
                src={image}
                alt={id}
                height={height}
                width={width}
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
