import Navbar from "@/components/ui/page-sections/nav-bar";
import { IBM_Plex_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { Megaphone, Users, HandHeart, Share2 } from "lucide-react";

// app/getInvolved/metadata.ts
import type { Metadata } from 'next';
import Footer from "@/components/ui/page-sections/footer";

export const metadata: Metadata = {
  title: 'Get Involved – Afrindependent Institute',
  description:
    'Join the movement to advance African liberty, sound economics, and structural justice. Discover how you can contribute, collaborate, or volunteer.',
  applicationName: 'Afrindependent Institute',
  manifest: 'https://www.afrindependent.org/involved',
  openGraph: {
    title: 'Get Involved – Afrindependent Institute',
    description:
      'Be part of a transformative mission to build a free, prosperous, and sovereign Africa through Africonomics and principled action.',
    url: 'https://www.afrindependent.org/involved',
    images: [
      {
        url: 'https://www.afrindependent.org/hero_landing.jpg', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Get Involved – Afrindependent Movement',
      },
    ],
  },
  twitter: {
    title: 'Get Involved – Afrindependent Institute',
    description:
      'Help shape Africa’s economic and intellectual future. Explore how to support, partner, or volunteer with Afrindependent.',
    images: [
      {
        url: 'https://www.afrindependent.org/hero_landing.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Involved – Afrindependent Institute',
      },
    ],
    site: 'https://www.afrindependent.org/involved',
  },
  keywords: [
    'Get Involved Afrindependent',
    'Volunteer Africa',
    'African Think Tank Support',
    'African Sovereignty',
    'Economic Justice',
    'Africonomics Movement',
    'Join Afrindependent',
    'African Freedom',
    'Postcolonial Solutions',
    'Institutional Partnership Africa',
  ],
};


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
export default function GetInvolvedSection() {
    return (
        <main className={`${ibmPlexSans.className}`}>
           <div className="bg-white">
           <Navbar /> 
           </div>
           <section className="bg-white dark:bg-[#0b1a14] px-6 sm:px-10 lg:px-24 py-24 ">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#002813] dark:text-[#ffd700] mb-4 tracking-tight">
          Get Involved
        </h2>
        <p className="text-xl text-[#36454f] font-medium dark:text-[#d6d6d6]">
          Be Part of Africa’s Intellectual and Economic Rebirth
        </p>
        <p className="mt-4 text-[#002813] dark:text-[#bbbbbb] text-lg leading-relaxed">
          The Afrindependent Institute is more than a think tank—it’s a movement for African truth, justice, and sovereignty. Whether you’re an individual, organization, or institution, there are powerful ways you can join and amplify the work.
        </p>
      </div>

      {/* Engagement Pathways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Support Our Work */}
        <div className="bg-[#002813] dark:bg-[#173329] p-8 rounded-3xl shadow-md border border-[#ffd700] transition hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <HandHeart className="text-[#ffd700] w-6 h-6" />
            <h3 className="text-2xl font-semibold text-white dark:text-white">Support Our Work</h3>
          </div>
          <p className="text-white dark:text-[#e2e2e2] mb-5">
            Help us expand research, produce publications, and reach wider audiences. Your contribution fuels independent African scholarship and the development of principled alternatives.
          </p>
          <a href="#" className="text-[#ffd700] hover:underline font-medium transition">Donate Now →</a>
        </div>

        {/* Spread the Vision */}
        <div className="bg-[#002813] dark:bg-[#173329] p-8 rounded-3xl shadow-md border border-[#ffd700] transition hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Share2 className="text-[#ffd700] w-6 h-6" />
            <h3 className="text-2xl font-semibold text-white dark:text-white">Spread the Vision</h3>
          </div>
          <p className="text-white dark:text-[#e2e2e2] mb-5">
            Use your voice to share our mission. Download social media assets, quote cards, or email links to help us reshape the conversation about African development and global justice.
          </p>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[#ffd700] hover:underline font-medium transition">Share the Vision →</a>
            <a href="#" className="text-[#ffd700] hover:underline font-medium transition">Download Social Assets →</a>
          </div>
        </div>

        {/* Invite Us to Speak */}
        <div className="bg-[#002813] dark:bg-[#173329] p-8 rounded-3xl shadow-md border border-[#ffd700] transition hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Megaphone className="text-[#ffd700] w-6 h-6" />
            <h3 className="text-2xl font-semibold text-white dark:text-white">Invite Us to Speak</h3>
          </div>
          <p className="text-white dark:text-[#e2e2e2] mb-5">
            Bring Africonomics to your conference, classroom, institution, or media platform. We offer keynotes, lectures, and briefings on economic sovereignty, sound money, and postcolonial justice.
          </p>
          <a href="#" className="text-[#ffd700] hover:underline font-medium transition">Invite Us to Speak →</a>
        </div>

        {/* Volunteer or Collaborate */}
        <div className="bg-[#002813] dark:bg-[#173329] p-8 rounded-3xl shadow-md border border-[#ffd700] transition hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-[#ffd700] w-6 h-6" />
            <h3 className="text-2xl font-semibold text-white dark:text-white">Volunteer or Collaborate</h3>
          </div>
          <p className="text-white dark:text-[#e2e2e2] mb-5">
            Have skills in research, media, design, policy, or translation? Want to partner institutionally? We welcome collaborators aligned with our mission and ready to contribute meaningfully.
          </p>
          <a href="#" className="text-[#ffd700] hover:underline font-medium transition">Become a Collaborator →</a>
        </div>
      </div>

  

    </section>

        <section id="submit" className="px-5  lg:px-10 bg-white mb-8  pb-16  text-deepForest">
      
   

       <div className="mb-8 ">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-deepForest text-center  pl-4">
            Article Submissions
            </h3>
             <p className="text-base ml-4 lg:text-lg text-gray-700 mb-4 text-center">Share your voice. Shape the future.</p>
              <p className="ml-4 text-base lg:text-lg  text-gray-700 mb-6 text-center">
      At the <span className="font-semibold">Afrindependent Institute</span>, we believe in the power of principled ideas to change societies. If you’re an aspiring or established writer, scholar, or thinker with bold insights grounded in truth, liberty, sound money, and structural justice—we welcome your contribution.
    </p>

    <p className="text-base lg:text-lg ml-4 text-gray-700 mb-12 text-center">
      We accept submissions for two distinct publication platforms:
    </p>
          </div>
   
  <div className="max-w-full w-10/12 mx-auto">
  

   

    <div className="grid md:grid-cols-2 gap-10 mb-16">
      {/* The Lens */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-yellow-400 flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-2">The Afrindependent Lens</h2>
        <p className="text-sm font-medium uppercase text-gray-500 mb-4">Longform Essays | Strategic Frameworks | Civilizational Thought</p>
        <p className="text-gray-700 mb-4">
          Our flagship platform for in-depth analysis, theoretical exploration, and high-level commentary. The Lens publishes essays that challenge dominant paradigms and help shape African intellectual and economic sovereignty.
        </p>
        <p className="text-gray-700 mb-3 font-medium">Ideal topics include:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Natural-moral law and African policy</li>
          <li>Sound money and monetary reform</li>
          <li>Decolonizing economics and education</li>
          <li>Structural justice, liberty, and postcolonial renewal</li>
          <li>Africonomics-based critiques of global governance, aid, or finance</li>
        </ul>
        <div className="mt-auto text-sm text-gray-600">
          <p><span className="font-semibold">Word count:</span> 1,500–4,000 words</p>
          <p><span className="font-semibold">Tone:</span> Analytical, rigorous, and original</p>
        </div>
      </div>

      {/* The Post */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-yellow-400 flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-2">The Afrindependent Post</h2>
        <p className="text-sm font-medium uppercase text-gray-500 mb-4">Timely Commentary | Reflections | Emerging Insights</p>
        <p className="text-gray-700 mb-4">
          A space for shorter reflections, topical commentary, and thought-provoking takes on current events, policies, or public debates. Designed to spark engagement and invite principled perspectives rooted in the Africonomics worldview.
        </p>
        <div className="mt-auto text-sm text-gray-600">
          <p><span className="font-semibold">Word count:</span> 600–1,500 words</p>
          <p><span className="font-semibold">Tone:</span> Accessible, insightful, and grounded</p>
        </div>
      </div>
    </div>

    {/* How to Submit */}
    <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-400 mb-12">
      <h3 className="text-2xl font-semibold mb-4">How to Submit</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Send your article as a Word or Google Doc to: <a href="mailto:submissions@afrindependent.org" className="text-blue-600 underline">submissions@afrindependent.org</a></li>
        <li>Include a short bio (max 100 words) and a preferred author photo (optional)</li>
        <li>Indicate whether your piece is intended for <strong>The Lens</strong> or <strong>The Post</strong></li>
      </ul>
      <p className="mt-4 text-sm text-gray-600">
        All submissions are reviewed by our editorial team. Accepted pieces will be lightly edited in collaboration with the author. We aim to respond within 10–14 business days.
      </p>
    </div>

    {/* Closing Statement */}
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-2 text-deepForest">The world needs principled African voices.</h4>
      <p className="text-gray-700 text-lg font-medium">Add yours to the conversation. Submit your work today.</p>
    </div>
  </div>
</section>

    <Footer/>
        </main>
     
    );
  }
  