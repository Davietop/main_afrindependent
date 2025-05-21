"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center px-[6px] py-[10px] w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-main text-[48px] lg:text-[84px] font-bold font-nohemi leading-[100%] lg:leading-[125%]">
        404
      </h1>
      <p className="font-medium text-lg mt-[3px] mb-[2px] font-inter_tight">
        Page Not Found
      </p>
      <p className="text-gray-500 mb-[6px] font-inter_tight">
        The page you&apos;re looking for does not seem to exist
      </p>
      <p className="font-medium mt-3 font-inter_tight">
        Redirecting you to the homepage...
      </p>
    </div>
  );
}
