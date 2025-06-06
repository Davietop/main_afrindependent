import { FaEye, FaPlayCircle } from "react-icons/fa";
import { IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/ui/page-sections/nav-bar";
import Footer from "@/components/ui/page-sections/footer";
import { Metadata } from "next";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Africonomics Video Series | Sound Money & African Philosophy Explained",
  description:
    "Explore the Africonomics video series — educational videos on African philosophy, economic justice, sound money, and principled governance. Produced by the Afrindependent Institute.",
  keywords: [
    "Africonomics video series",
    "African philosophy explained",
    "sound money education",
    "economic justice videos",
    "Afrindependent education",
    "Africonomics YouTube videos",
    "Africonomics video tutorials",
    "African economics",
    "African sovereignty",
    "monetary justice",
    "liberty Africa",
    "postcolonial economics",
    "decolonizing economics",
  ],
  openGraph: {
    title:
      "Africonomics Video Series | Sound Money & African Philosophy Explained",
    description:
      "Watch and learn with Africonomics — a video series demystifying African economic thought, philosophy, and justice-oriented development.",
    type: "website",
    url: "https://www.afrindependent.org/video",
    images: [
      {
        url: "https://www.afrindependent.org/hero_landing.jpg",
        width: 1200,
        height: 630,
        alt: "Africonomics Video Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africonomics Video Series",
    description:
      "Sound money. African philosophy. Economic justice. Learn through video from the Afrindependent Institute.",
    images: ["https://www.afrindependent.org/hero_landing.jpg"],
  },
};

export default function VideoSection() {
  return (
    <div className="bg-white">
      <Navbar />

      <section
        className={`py-20 px-4 bg-white dark:bg-[#0f1c16] text-[#002813] dark:text-white ${ibmPlexSans.className}`}
      >
        <div className="max-w-6xl mx-auto text-center">
         
            <FaEye className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-[#002813] dark:text-[#ffd700]">
              Visual Insight. Moral Clarity. African Sovereignty in Focus.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our video content brings the principles of Africonomics to
              motion—breaking down complex ideas, exposing unjust systems, and
              presenting bold solutions for Africa and the world.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              From short explainers to full-length lectures and policy
              breakdowns, these videos are crafted to educate, challenge, and
              inspire a new generation of African thinkers, leaders, and
              builders.
            </p>
          

          <div
            
            className="bg-[#f9f9f6] dark:bg-[#1a2c23] border border-gray-200 dark:border-[#2e4638] rounded-xl p-10 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <FaPlayCircle className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                First Video Coming Soon
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Watch, reflect, and share the vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
