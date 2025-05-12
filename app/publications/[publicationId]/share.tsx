"use client";

import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface PropType {
  title: string;
}

const Share = ({ title }: PropType) => {
  const path = usePathname();
  const url = `https://afrindependent.org${path}`;
  return (
    <div className="flex flex-wrap items-center gap-3 mb-5 lg:gap-6">
      <EmailShareButton url={url} subject={title}>
        <MdEmail className="text-black h-4 lg:h-[26px] w-auto" />
      </EmailShareButton>
      <LinkedinShareButton url={url} title={title}>
        <FaLinkedinIn className="text-black h-4 lg:h-[26px] w-auto" />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <FaXTwitter className="text-black h-4 lg:h-[26px] w-auto" />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp className="text-black h-4 lg:h-[26px] w-auto" />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
