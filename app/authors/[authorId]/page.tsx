import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";

import Navbar from "@/components/ui/page-sections/nav-bar";
import List from "@/app/publications/list";
import Footer from "@/components/ui/page-sections/footer";
import { getCategories, getFacultyMember } from "@/service/sanity-queries";
import founder from "/public/founder.jpg";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], // Or 'latin-ext' if needed
  weight: ["400", "500", "700"], // Optional: choose weights you use
  display: "swap", // Optional: improves text rendering
});

const Author = async ({ params }: { params: { authorId: string } }) => {
  const categories = await getCategories();
  const { name, image, slug, about, body, social } =
    (await getFacultyMember({ slug: params.authorId })) || {};
  const { instagram, linkedin, email, twitter } = social || {};

  const names = name.trim().split(" ");

  const firstname = names[0];
  const lastname = names[1];

  return (
    <main className={`${ibmPlexSans.className} bg-white`}>
      <div className="">
        <Navbar />
       
        <div className=" mt-20 xl:mt-0 " />
<header className="relative flex flex-col items-center justify-center px-6 py-20 mt-[60px] bg-white text-deepForest text-center space-y-10">
  {/* Name Block */}
  <div className="w-full max-w-6xl space-y-2">
    <h1 className="text-5xl lg:text-6xl  leading-tight font-bold break-words">
      {firstname}  {lastname}
    </h1>
   
  </div>

  {/* About Text */}
  <p className="w-full max-w-3xl font-inter_tight text-lg lg:text-2xl font-medium text-[#323232] leading-relaxed">
    {about}
  </p>

  {/* Social Links */}
  <div className="w-full flex justify-center">
    <Social
      email={email}
      twitter={twitter}
      linkedin={linkedin}
      instagram={instagram}
    />
  </div>
</header>

        
          <div className={`${ibmPlexSans.className}`}>
    <h2 className=" text-2xl px-5 lg:px-10  pt-10  sm:text-3xl font-bold text-[#00210d] dark:text-yellow-300 ">
        <p className="border-l-4 border-yellow-400 pl-4">History And Founder</p>
      </h2>

   
      <div
        className={` flex flex-col xl:flex-row items-center justify-center gap-x-10 mt-10 mb-20`}
      >
       
       
           <div className="relative w-11/12 md:w-9/12 lg:h-[400px] h-[400px] xl:w-4/12   text-white  overflow-hidden">
             
          <Image
            src={founder}
            height={600}
            width={400}
            alt="mission_img"
            className="absolute object-contain  left-1/2  transform -translate-x-1/2"
          />
               
              </div>

        <div className="w-11/12 md:w-10/12 md:text-center xl:text-left xl:w-7/12 mt-4 lg:mt-0 ">
          <p className="lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px] ">
            The Afrindependent Institute was founded by{" "}
            <span className="font-bold"> Manuel Tacanho</span>, a social
            philosopher and economist, to reframe the global conversation around
            African economic development, governance, and justice.
          </p>
          <p className="lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
            Dissatisfied with the moral emptiness and structural failures of
            mainstream economics and state-led development models, Tacanho began
            formulating Africonomics—a school of African philosophical and
            economic thought grounded in natural-moral law, human dignity, and
            voluntary exchange.
          </p>
          <p className=" lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
            What began as a critique of fiat money and statist economics evolved
            into a far-reaching intellectual project: to reconstruct African
            social and economic thought from first principles, restore truth in
            economic science, and support African nations in building free,
            just, and prosperous postcolonial societies.
          </p>
        </div>
      </div>
    </div>
        <div className="hidden lg:block h-[1px] my-[60px] bg-[#000000]" />
        <div>
          <h2 className="ml-4 lg:mt-0 text-center text-black font-bold text-3xl  leading-[62px] ">
            Latest Work from {name}
          </h2>
          <List authorSlug={slug} isComponent categories={categories} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Author;

const Social = ({
  linkedin,
  twitter,
  instagram,
  email,
}: {
  linkedin: string;
  twitter: string;
  instagram: string;
  email: string;
}) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-[15px] lg:gap-6 mt-7 lg:mt-0">
      <Link
        href={`mailto:${email}`}
        className="flex items-center gap-6 bg-[#ffd700] rounded-[70px] py-1 lg:py-[6px] px-3 lg:px-5"
      >
        <span className="text-[#4F4F4F]  text-sm lg:text-xl">
          Email
        </span>
        <div className="bg-deepForest h-[50px] w-[50px] rounded-full flex items-center justify-center">
          <MdEmail className="text-white h-[24px] w-auto" />
        </div>
      </Link>
      <Link href={linkedin}>
        <FaLinkedinIn className="text-deepForest h-[25px] w-auto" />
      </Link>
      <Link href={twitter}>
        <FaXTwitter className="text-deepForest h-[25px] w-auto" />
      </Link>
      <Link href={instagram}>
        <FaInstagram className="text-deepForest h-[25px] w-auto" />
      </Link>
    </div>
  );
};




