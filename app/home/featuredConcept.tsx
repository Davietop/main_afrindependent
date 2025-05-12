"use client"
import { IBM_Plex_Sans } from 'next/font/google';
import { motion } from "framer-motion"; // for scroll animations
const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],          // Or 'latin-ext' if needed
    weight: ['400', '500', '700'], // Optional: choose weights you use
    display: 'swap',             // Optional: improves text rendering
  });
  const concepts = [
    {
      number: '1',
      title: 'Africonomics',
      desc: 'Africa’s path to economic independence.',
      link: '/concepts',
    },
    {
      number: '2',
      title: 'Sound Money',
      desc: 'Stable currency, strong economy, secure future.',
      link: '/concepts',
    },
    {
      number: '3',
      title: 'Structural Justice',
      desc: 'Fair systems, equal access, lasting equity.',
      link: '/concepts',
    },
  ];
 
const FeaturedConcept = () =>{
return  <div className={`bg-white ${ibmPlexSans.className}`}>
  <div  className="bg-white pt-10  px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
    Featured Concepts
     </h3>
          </div>
<section className="px-6 sm:px-10 lg:px-20 bg-white dark:bg-[#0f1c16] py-8">
  

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {concepts.map((item, i) => (
      <div
        key={i}
        className="group text-center bg-white dark:bg-[#11241b] p-6 rounded-xl border border-[#ffd700] dark:border-[#ffd700] shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Number Circle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 mx-auto mb-4 rounded-full bg-deepForest text-white font-semibold flex items-center justify-center z-10 shadow"
        >
          {item.number}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[#00210d] dark:text-white mb-2 group-hover:underline">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300    text-base md:text-lg mb-4">
          {item.desc}
        </p>

        {/* Learn More Link */}
        <a
          href={item.link}
          className="inline-block text-base text-yellow-500 font-medium hover:text-yellow-400"
        >
          Learn More →
        </a>
      </div>
    ))}
  </div>
</section>
</div>


}

export default FeaturedConcept