import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { sanityClient } from "@/service/sanity";

const ImageComponent = ({ value, isInline }: { value: any; isInline: any }) => {
  const { width, height } = getImageDimensions(value);
  const source = value?.source || "";
  const source_title = value?.source_title || "";
  return (
    <div className="flex flex-col gap-0 my-5 ">
      <Image
        src={urlBuilder(sanityClient)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        width={width}
        height={height}
        className={`max-w-[${width}px] h-auto my-0`}
      />
      {source && (
        <span className="text-center text-sm mt-2">
          Source:{" "}
          <Link href={source} rel={"noreferrer noopener"} target="_blank">
            {source_title}
          </Link>
        </span>
      )}
    </div>
  );
};

const LinkComponent = ({ children, value }: { children: any; value?: any }) => {
  const internalLink = value.href.startsWith("/");
  const rel = !internalLink ? "noreferrer noopener" : undefined;
  return (
    <Link
      href={value.href}
      rel={rel}
      target={!internalLink ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
};

const customComponentsDef = {
  types: {
    image: ImageComponent,
  },
  marks: {
    link: LinkComponent,
  },
};

interface PropType {
  value: any;
}

const TextComponent = ({ value }: PropType) => {
  return <PortableText value={value} components={customComponentsDef} />;
};

export default TextComponent;
