import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const Hero = () => {
  return (
    <section className={`${ibmPlexSans.className} text-[#002813] py-24 px-6 sm:px-12 lg:px-24 `}>
    <div className="max-w-5xl mx-auto text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Support the Mission</h2>
      <p className="text-xl font-medium text-[#ffd700] mb-2">Truth. Liberty. Sound Money. Structural Justice.</p>
      <p className="text-lg leading-relaxed">
        As the Home of Africonomics, the Afrindependent Institute is a pioneering think tank advancing principled
        frameworks for postcolonial liberation, economic sovereignty, and human civilizational advancement. <br />
        <br />
        We do not accept funding that compromises our vision, values, or intellectual integrity.
      </p>
    </div>
  
    <div className="max-w-4xl mx-auto border-t border-[#002813] pt-12 grid lg:grid-cols-2 gap-16">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Why Give?</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Challenge failed economic models with principled alternatives</li>
          <li>Promote sound money and expose fiat fraud</li>
          <li>Defend individual rights, structural justice, and liberty</li>
          <li>Build a prosperous Africa rooted in Africonomics—not Western economics</li>
        </ul>
      </div>
  
      <div>
        <h3 className="text-2xl font-semibold mb-4">Ways to Give</h3>
        <ul className="text-lg space-y-3">
          <li><strong>One-Time Gift</strong> – Support current initiatives</li>
          <li><strong>Monthly Contribution</strong> – Sustain research and outreach</li>
          <li><strong>Major Gift or Partnership</strong> – Fund transformative regional projects</li>
        </ul>
      </div>
    </div>
  
    <div className="max-w-3xl mx-auto mt-16 text-center">
      <p className="text-lg font-medium mb-6">
        Every contribution—large or small—moves Africa closer to intellectual and economic sovereignty.
      </p>
     <button className="bg-deepForest text-white w-full px-6 py-4 text-xl font-bold rounded-xl">
     <Link
              className="dbox-donation-button"
              id="preview_inline_popup_button"
              href="https://donorbox.org/afrindependent-donations?default_interval=o"
            >
              Donate now
            </Link>
     </button>
    </div>
  </section>
  
  );
};

export default Hero;
