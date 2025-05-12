import { Button } from "@/components/ui/button"; 
import { FaFileAlt, FaBookOpen, FaVideo } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

function PublicationsResearch() {
  return (

    <div className={`${ibmPlexSans} mb-20 mt-6`}>
  <div  className="bg-white  pt-10 px-5 lg:px-10">
          <h3 className=" text-left  text-2xl lg:text-3xl border-l-4 text-deepForest border-[#ffd700] font-bold pl-4">
       
  Publications & Research
     </h3>
       <p className="text-lg text-gray-600 max-w-full mx-auto ml-4">
          <span className="italic ">  The intellectual foundation of the Nilar framework.</span>
            <br />
        <p className="mt-4">    The Nilar is the product of moral clarity, sound economic reasoning, and a factual understanding of Africa’s postcolonial economic woes. Grounded in Africonomics, our publications offer the philosophical, historical, and practical insights that shape the vision and viability of the Nilar.</p>
          </p>
          </div>
  
    <section className={`bg-white text-gray-800  px-6 sm:px-10 lg:px-20 ${ibmPlexSans.className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Top Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-deepForest"></h2>
       
        </div>

        {/* Featured Publication */}
        <div className="bg-yellow-100 rounded-2xl shadow-md p-8 mb-20 flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <FaBookOpen className="text-5xl text-deepForest" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-deepForest">The Nilar: The Path to African Economic Sovereignty and Prosperity</h3>
            <p className="text-gray-700 text-base mb-4">
            This Afrindependent Institute Policy Paper lays out the full case for a gold-based African currency rooted in sound money, structural justice, and postcolonial liberation. It outlines the moral, economic, and civilizational imperative of adopting the Nilar—and how African nations can lead the world toward a more principled and just monetary reality.
            </p>
            <Button variant="default" className="bg-deepForest text-base text-white hover:bg-green-800">
              Read the Full Paper →
            </Button>
          </div>
        </div>

        {/* Related Research & Commentary */}
        <div className="space-y-10">
          <h4 className="text-2xl font-semibold mb-6 text-deepForest">Related Research & Commentary</h4>

          {/* List of Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {[
    "The Fraudulent and Ruinous Nature of Fiat Monetary Systems",
    "The Fiat Dollar Standard: Its Uncivilized and Destructive Nature",
    "Fractional Reserve Banking Is Fraudulent and Ruinous",
    "Money Demystified: Understanding Why, How, and What It Is",
    "The Africonomics Theory Of Monetary Justice",
    "The Africonomics Theory of Economic Cycles",
  ].map((title, index) => (
    <div
      key={index}
      className="bg-gray-50 dark:bg-[#1a2c23] rounded-xl p-6 flex items-start gap-4 border border-gray-200 dark:border-[#2e4638] hover:shadow-md transition"
    >
      <FaFileAlt className="text-3xl text-yellow-500 mt-1" />
      <div>
        <h5 className="font-semibold mb-2 text-lg text-[#00210d] dark:text-white">
          {title}
        </h5>
        <Button
          variant="link"
          className="text-yellow-600 dark:text-yellow-400 p-0 text-base"
        >
          Read Paper →
        </Button>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
      </div>
  );
}

export default PublicationsResearch;
