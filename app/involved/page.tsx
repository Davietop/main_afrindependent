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
  manifest: 'https://afrindependent.org/getInvolved',
  openGraph: {
    title: 'Get Involved – Afrindependent Institute',
    description:
      'Be part of a transformative mission to build a free, prosperous, and sovereign Africa through Africonomics and principled action.',
    url: 'https://afrindependent.org/getInvolved',
    images: [
      {
        url: 'https://afrindependent.org/images/get-involved-og.jpg', // Replace with your actual image path
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
        url: 'https://afrindependent.org/images/get-involved-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Involved – Afrindependent Institute',
      },
    ],
    site: 'https://afrindependent.org/getInvolved',
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
        <p className="text-xl text-[#002813] dark:text-[#d6d6d6]">
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

      {/* Closing Statement */}
      <div className="max-w-3xl mx-auto text-center mt-20 border-t border-[#ffd700] pt-10">
        <p className="text-xl text-[#002813] dark:text-[#ffd700] font-semibold">
          Africa’s future depends on principled action.<br />
          Help us build the foundation. Share the Nilar vision.
        </p>
      </div>
    </section>

    <Footer/>
        </main>
     
    );
  }
  