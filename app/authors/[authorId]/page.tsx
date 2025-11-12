
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
import LatestPub from "./latest_pug";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ✅ Define type for params
type AuthorPageProps = {
  params: Promise<{
    authorId: string;
  }>;
};

const Author = async ({ params }: AuthorPageProps) => {
  // ✅ Await params before using
  const { authorId } = await params;

  const categories = await getCategories();
  const { name, image, slug, about, body, social } =
    (await getFacultyMember({ slug: authorId })) || {};

  const { instagram, linkedin, email, twitter } = social || {};

  const names = (name ?? "").trim().split(" ");
  const firstname = names[0] ?? "";
  const lastname = names[1] ?? "";
 

  return (
    <main className={`${ibmPlexSans.className} bg-white`}>
      <div>
        <Navbar />

        <div className="mt-20 xl:mt-0" />

        <header className="relative flex flex-col items-center justify-center px-6 py-10 mt-[60px] bg-white text-deepForest text-center space-y-10">
          {/* Name Block */}
          <div className="w-full max-w-6xl space-y-2">
            <h1 className="text-5xl lg:text-6xl leading-tight font-bold break-words">
              {firstname} {lastname}
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

        {/* About Section */}
        <div className={`${ibmPlexSans.className}`}>
        
            <div className="mt-6 md:px-5   lg:px-10 ">
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
          About the Author
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
                About the Author
            </h3>
          </div>
        </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-x-10 my-10 ">
            <div className="relative w-11/12 md:w-9/12 lg:h-[400px] h-[400px] xl:w-4/12 text-white overflow-hidden">
              <Image
                src={founder}
                height={600}
                width={400}
                alt="mission_img"
                className="absolute object-contain left-1/2 transform -translate-x-1/2"
              />
            </div>

            <div className="w-11/12 md:w-10/12 md:text-center xl:text-left xl:w-7/12 mt-4 lg:mt-0">
              <p className="lg:font-medium text-[#323232] mt-4 text-lg leading-[28px] lg:text-xl lg:leading-[40px]">
                Manuel Tacanho is a social philosopher, economist, and the
                founder of the Afrindependent Institute. He is the author of
                Africonomics: A School of African Philosophical and Economic
                Thought and several works exploring sound money, natural-moral
                law, and African economic sovereignty. His work challenges
                dominant Western philosophical and economic models and presents
                principled alternatives rooted in truth, justice, liberty, and
                the African worldview.
              </p>
            </div>
          </div>
        </div>

      

        {/* Latest Works Section */}
        <div>
      
            <div className="mb-6 md:px-5   lg:px-10 ">
          {" "}
          <h3 className="text-xl hidden sm:block lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-4 -tracking-wide">
          Latest Work from {name}
          </h3>
          <div className="px-5 sm:hidden">
            <h3 className="text-xl lg:text-2xl font-semibold text-deepForest border-l-4 border-[#ffd700] leading-relaxed pl-3 -tracking-wide">
               Latest Work from {name}
            </h3>
          </div>
        </div>
          <LatestPub firstName={firstname} lastName={lastname}/>
          {/* <List authorSlug={slug} isComponent categories={categories} /> */}
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
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
}) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-[15px] lg:gap-6 mt-7 lg:mt-0">
      {email && (
        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-6 bg-[#ffd700] rounded-[70px] py-1 lg:py-[6px] px-3 lg:px-5"
        >
          <span className="text-[#4F4F4F] text-sm lg:text-xl">Email</span>
          <div className="bg-deepForest h-[50px] w-[50px] rounded-full flex items-center justify-center">
            <MdEmail className="text-white h-[24px] w-auto" />
          </div>
        </Link>
      )}
      {linkedin && <Link href={linkedin}><FaLinkedinIn className="text-deepForest h-[25px] w-auto" /></Link>}
      {twitter && <Link href={twitter}><FaXTwitter className="text-deepForest h-[25px] w-auto" /></Link>}
      {instagram && <Link href={instagram}><FaInstagram className="text-deepForest h-[25px] w-auto" /></Link>}
    </div>
  );
};


