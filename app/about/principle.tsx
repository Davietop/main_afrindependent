import { IBM_Plex_Sans } from 'next/font/google';
import { FaBookOpen, FaDove, FaCoins, FaGavel } from "react-icons/fa";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const principles = [
    {
      icon: <FaBookOpen className="text-[#002813] w-6 h-6" />,
      title: "Truth",
      desc: "We believe truth is objective, discoverable, and essential to any just society. Our research unmasks deception in policy, economics, and global narratives.",
    },
    {
      icon: <FaDove className="text-[#002813] w-6 h-6" />,
      title: "Liberty",
      desc: "All individuals possess inherent rights to life, liberty, and self-ownership. We promote systems that uphold human dignity, agency, liberty, and moral responsibility.",
    },
    {
      icon: <FaCoins className="text-[#002813] w-6 h-6" />,
      title: "Sound Money",
      desc: "A just and stable economy cannot exist without sound money. We expose the fraud of fiat money and advocate for market-based, sound monetary systems.",
    },
    {
      icon: <FaGavel className="text-[#002813] w-6 h-6" />,
      title: "Justice",
      desc: "Justice is not a political slogan—it is the structural design of society in accordance with natural rights and universal moral law. We advance structural justice through principled analysis and policy recommendation.",
    },
  ];
  

const Principle = ()=>{
    return <div className={`pb-10  ${ibmPlexSans.className}`}>
    
    


        
      <h2 className=" text-2xl px-6 sm:px-10 lg:px-20 pt-10  sm:text-3xl font-bold text-[#00210d] dark:text-yellow-300 ">
        <p className="border-l-4 border-yellow-400 pl-4"> Our Principles</p>
      </h2>
      <p className='pl-6 lg:pl-24 mt-2   lg:font-medium text-[#323232]   text-lg leading-[28px] mb-6 lg:text-xl lg:leading-[40px]'>We are guided by four foundational principles that undergird all our work:
</p>
      <section className="px-6  ">
      <div className="max-w-6xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#ffd700]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#ffd700] p-3 rounded-full">{p.icon}</div>
                <h3 className="text-xl font-semibold text-[#002813]">{p.title}</h3>
              </div>
              <p className="text-gray-800 text-base">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    </div>
}

export default Principle