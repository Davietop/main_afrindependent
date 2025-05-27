"use client";

import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  

  
} from "react-share";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaWhatsapp, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { FaYoutube } from "react-icons/fa";

interface PropType {
  title: string;
}

const Share = ({ title }: PropType) => {
  const path = usePathname();
  const url = `https://afrindependent.org${path}`;
  return (
    <div className="flex flex-wrap  items-center gap-2 mb-5  lg:gap-3">
      <EmailShareButton className="" url={url} subject={title}>
        <MdEmail className="text-black  h-4 lg:h-[20px] w-auto" />
      </EmailShareButton>
      <LinkedinShareButton url={url} title={title}>
        <FaLinkedinIn className="text-black  h-4 lg:h-[20px] w-auto" />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <FaXTwitter className="text-black  h-4 lg:h-[20px] w-auto" />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp className="text-black  h-4 lg:h-[20px] w-auto" />
      </WhatsappShareButton>
      <FacebookShareButton url={url} title={title}>
        <FaFacebook className="text-black  h-4 lg:h-[20px] w-auto"/>
      </FacebookShareButton>
      <InstapaperShareButton url={url} title={title}>
        <FaInstagram className="text-black  h-4 lg:h-[20px] w-auto"/>
      </InstapaperShareButton>

      <FaYoutube className="text-black  h-4 lg:h-[20px] w-auto"/>
    </div>
  );
};

export default Share;
