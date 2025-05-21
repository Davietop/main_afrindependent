"use client"
import ReactPlayer from 'react-player/youtube';
import { IBM_Plex_Sans } from 'next/font/google';
import ReactPaginate from "react-paginate";

import { useState } from 'react';
const videoData = [
    { id: 1, url: "https://www.youtube.com/watch?v=tWGMd_iUZyg" },
    { id: 2, url: "https://www.youtube.com/watch?v=Awfl5uw29mw" },
    { id: 3, url: "https://www.youtube.com/watch?v=1Jxp27cs6vo" },
    { id: 4, url: "https://www.youtube.com/watch?v=dppTGpcVGHc" },
    { id: 5, url: "https://www.youtube.com/watch?v=tWGMd_iUZyg" },
    { id: 6, url: "https://www.youtube.com/watch?v=_tmPnH-JkNg" },
    { id: 7, url: "https://www.youtube.com/watch?v=BPtm1KUu2Yk" },
  ];
  
  const ITEMS_PER_PAGE = 6;

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Videos = ()=>{

    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = videoData.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(videoData.length / ITEMS_PER_PAGE);
  
    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
      };



    return  <div className={`${ibmPlexSans.className} text-black `}>
        <h3 className="mt-14  text-left mb-10 text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4 lg:ml-10 ">Most Recent Videos</h3>
     
    
      
         <div className="grid grid-cols-1 md:grid-cols-12 md:px-10  gap-y-8 gap-x-8">
        {currentItems.map((video) => (
          <div key={video.id} className="aspect-video rounded-2xl overflow-hidden w-full h-full col-span-4 max-w-4xl">
            <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
  <ReactPaginate
    previousLabel="← Prev"
    nextLabel="Next →"
    pageCount={pageCount}
    onPageChange={handlePageChange}
    containerClassName="flex space-x-2"
    pageClassName="px-3 py-1 border rounded"
    activeClassName="bg-deepForest text-white"
    previousClassName="px-3 py-1 border rounded"
    nextClassName="px-3 py-1 border rounded"
    disabledClassName="opacity-50 cursor-not-allowed"
  />
</div>

    </div>
}


export default Videos