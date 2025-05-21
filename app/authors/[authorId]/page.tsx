import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";

import Navbar from "@/components/ui/page-sections/nav-bar";
import List from "@/app/publications/list";
import Footer from "@/components/ui/page-sections/footer";
import { getCategories, getFacultyMember } from "@/service/sanity-queries";

const Author = async ({ params }: { params: { authorId: string } }) => {
  const categories = await getCategories();
  const { name, image, slug, about, body, social } =
    (await getFacultyMember({ slug: params.authorId })) || {};
  const { instagram, linkedin, email, twitter } = social || {};

  const names = name.trim().split(" ");

  const firstname = names[0];
  const lastname = names[1];

  return (
    <main className="pt-8 lg:pt-[70px]">
      <div className="px-5 lg:px-14">
        <Navbar />
        <header className="relative lg:min-h-screen 2xl:min-h-[900px] lg:flex items-end gap-14 pb-14 lg:pb-0 mt-[60px] lg:mt-0 lg:pl-24">
          <h1 className="lg:absolute top-36 left-20 z-10 text-[40px] lg:text-[150px] font-nohemi leading-[40px] lg:leading-[75px] text-center lg:text-start max-lg:mr-20 text-secondary">
            {firstname}
          </h1>
          <h1 className="lg:absolute bottom-5 lg:-right-10 xl:right-0 z-10 text-[40px] lg:text-[100px] xl:text-[150px] font-nohemi leading-[40px] lg:leading-[75px] text-center lg:text-start max-lg:ml-20 text-secondary font-semibold">
            {lastname}
          </h1>
          <div className="hidden lg:block max-w-[402px] h-fit space-y-4">
            <p className="font-inter_tight text-2xl font-medium text-[#323232] leading-[48px]">
              {about}
            </p>
            <Social
              email={email}
              twitter={twitter}
              linkedin={linkedin}
              instagram={instagram}
            />
          </div>
          <div className="flex-1 mt-4 lg:mt-0">
            <div className="w-full h-auto lg:mb-20 lg:w-[387px] lg:h-[465px] overflow-hidden">
              <Image
                src={image}
                alt={name}
                width={387}
                height={465}
                className="w-full h-auto lg:h-full lg:w-auto object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:hidden">
            <Social
              email={email}
              twitter={twitter}
              linkedin={linkedin}
              instagram={instagram}
            />
          </div>
        </header>
        <div className="hidden lg:block h-[1px] my-[60px] bg-[#000000]" />
        <section className=" grid grid-cols-1 lg:grid-cols-5">
          <aside className="mb-7 lg:mb-0 lg:col-span-2">
            <p className="font-nohemi text-[#0E102A] font-semibold  text-2xl lg:text-5xl">
              About the author
            </p>
          </aside>
          <article className="lg:col-span-3">
            <div className="lg:font-medium text-lg lg:text-2xl font-inter_tight leading-[28px] lg:leading-[40px] mb-[52px] text-[#323232] prose">
              <PortableText value={body} />
            </div>
          </article>
        </section>
        <div className="hidden lg:block h-[1px] my-[60px] bg-[#000000]" />
        <div>
          <h2 className="mb-7 lg:mt-0 lg:mb-20 text-black font-medium text-xl lg:text-[62px] leading-[62px] font-nohemi">
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
        className="flex items-center gap-6 bg-primary rounded-[70px] py-1 lg:py-[6px] px-3 lg:px-5"
      >
        <span className="text-[#4F4F4F] font-inter_tight text-sm lg:text-xl">
          Email
        </span>
        <div className="bg-secondary h-[50px] w-[50px] rounded-full flex items-center justify-center">
          <MdEmail className="text-white h-[24px] w-auto" />
        </div>
      </Link>
      <Link href={linkedin}>
        <FaLinkedinIn className="text-secondary h-[25px] w-auto" />
      </Link>
      <Link href={twitter}>
        <FaXTwitter className="text-secondary h-[25px] w-auto" />
      </Link>
      <Link href={instagram}>
        <FaInstagram className="text-secondary h-[25px] w-auto" />
      </Link>
    </div>
  );
};
