import Navbar from "@/components/ui/page-sections/nav-bar";
import HeroSection from "./hero";
import KeyConcept from "./keyConcept";
import Footer from "@/components/ui/page-sections/footer";
// app/keyConcepts/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Concepts – Afrindependent Thought',
  description: 'Explore foundational ideas shaping Africonomics, liberty, sound money, and postcolonial justice.',
  applicationName: 'Afrindependent Institute',
  manifest: 'https://afrindependent.org/keyConcepts',
  openGraph: {
    title: 'Key Concepts – Afrindependent Thought',
    description: 'Key philosophical and economic principles underlying Afrindependent’s vision.',
    url: 'https://afrindependent.org/keyConcepts',
    images: [
      {
        url: 'https://afrindependent.org/images/key-concepts-og.jpg', // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: 'Afrindependent Key Concepts',
      },
    ],
  },
  twitter: {
    title: 'Key Concepts – Afrindependent Thought',
    description: 'Explore our intellectual foundation: liberty, sound economics, and African sovereignty.',
    images: [
      {
        url: 'https://afrindependent.org/images/key-concepts-og.jpg', // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: 'Afrindependent Key Concepts',
      },
    ],
    site: 'https://afrindependent.org/keyConcepts',
  },
  keywords: [
    'Africonomics',
    'African Liberty',
    'Key Economic Concepts',
    'Postcolonial Justice',
    'African Philosophy',
    'Sound Money',
    'Structural Justice',
    'Free Enterprise Africa',
    'Afrindependent Thought',
  ],
};


const Concepts = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection/>
      <KeyConcept/>
      <Footer/>
    </div>
  );
};

export default Concepts;
