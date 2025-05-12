"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

export default function AlertDialogDemo({ isOpen }: { isOpen: string }) {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    setError(isOpen !== "Success");
    setOpen(true);
  }, [isOpen]);

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent className="px-0 py-0 border-none rounded-[10px] overflow-hidden max-w-[260px] lg:max-w-sm">
        <IoMdClose
          className="text-white absolute top-2 right-2"
          size={"1.5rem"}
          onClick={handleClose}
        />
        <div className="bg-secondary w-full py-[60px] flex justify-center">
          <div className="w-[80px] h-[80px] rounded-full border-white border-[3px] bg-transparent flex items-center justify-center">
            {isError ? (
              <IoMdClose className="text-white h-14 w-auto" />
            ) : (
              <FaCheck className="text-white h-14 w-auto" />
            )}
          </div>
        </div>
        <div className="bg-white pt-[50px] pb-20 text-center px-5">
          <h3 className="font-semibold text-2xl leading-[24px] lg:text-[50px] lg:leading-[50px] font-inter_tight mb-6">
            {isError ? "Error" : "Thank You"}
          </h3>
          <p className="text-lg lg:text-2xl font-inter_tight text-[#323232]">
            {!isError
              ? "Subscription successful"
              : isOpen === "Subscribed"
              ? "Email already subscribed"
              : "Failed to subscribe. Please try again."}
          </p>
        </div>
        {/* </div> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
