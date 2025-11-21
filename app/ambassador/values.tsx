import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const Values = () => {
  return (
    <section
      className={`${ibmPlexSans.className} bg-gradient-to-b from-white via-amber-50/30 to-white pb-10 px-5   lg:px-10`}
    >
      <div className=" ">
      
         <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide ">
             Program Goals & Values
          </h3>
         <div className=" sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
               Program Goals & Values
            </h3>
          </div>
        <p className="text-lg text-gray-700 mt-4   mb-6">
          Grounded in Africonomics, our ambassador program nurtures intellectual
          freedom, principled leadership, and a culture of moral responsibility
          across African campuses.
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white/80 border border-[#d0d5cd] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d0d5cd]  rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-deepForest"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Intellectual Liberation
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Challenge Western-dominated models and foster a rebirth of African
              intellectual traditions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white/80 border border-[#d0d5cd] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-deepForest"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Leadership Development
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Cultivate principled young leaders rooted in truth, justice, and
              moral conviction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white/80 border border-[#d0d5cd] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-deepForest"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-3-3h-4v5zM9 20H4v-2a3 3 0 013-3h4v5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Community Building
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Create forums for dialogue, collaboration, and intellectual growth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white/80 border border-[#d0d5cd] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d0d5cd] rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-deepForest"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Civic Responsibility
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Advance a culture of liberty, ethics, and nonaggression in
              academic and civic life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
