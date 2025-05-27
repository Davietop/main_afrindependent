"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import { mutate } from "swr";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { LuMailCheck } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Comments from "./comments";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { createComment } from "@/service/sanity-queries";
import { useButtonLoader } from "@/lib/hooks/useButtonLoader";
import { storage } from "@/contants/storage-def";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const formSchema = z.object({
  name: z.string(),
  email: z.string().email("This is not a valid email.").nonempty(),
  text: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

const Reaction = () => {
  const { publicationId } = useParams<{ publicationId: string }>();
  const { setSending, setSent, setError, sending, sent } = useButtonLoader();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:
        typeof window !== "undefined"
          ? localStorage.getItem(storage.afrindependentUserName) || ""
          : "",
      email:
        typeof window !== "undefined"
          ? localStorage.getItem(storage.afrindependentUserMail) || ""
          : "",
      text: "",
    },
  });

  const storedName =
    typeof window !== "undefined"
      ? localStorage.getItem(storage.afrindependentUserName) || ""
      : "";

  const name = form.watch("name", "");

  const initials = useMemo(() => {
    const nameArray = (name || storedName).split(" ");
    return `${nameArray[0]?.[0] || ""}${nameArray[1]?.[0] || ""}`;
  }, [name, storedName]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true);
    setSent(false);
    setError(false);
    const { name, email, text } = values;
    try {
      const response = await createComment({
        postId: publicationId,
        author: name,
        email,
        text,
      });
      if (response) {
        localStorage.setItem(storage.afrindependentUserMail, email);
        localStorage.setItem(storage.afrindependentUserName, name);
        form.reset({ text: "" });
        mutate(`comment-${publicationId}`);
        setSending(false);
        setSent(true);
      }
    } catch (error) {
  
      setSending(false);
      setError(true);
    }
  }

  return (
    <div className={`${ibmPlexSans.className}`}>
      {/* <FaRegHeart className="h-4 lg:h-[26px] w-auto" /> */}
      <Sheet>
        <div className="flex flex-col items-start space-y-2">
          <SheetTrigger asChild>
            <FaRegCommentAlt className="text-black h-4 lg:h-[26px] w-auto cursor-pointer" />
          </SheetTrigger>
          <span className=" text-sm text-[#878787]">
            Click to Comment. Courteous and engaging comments are welcome.
          </span>
        </div>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="">Thoughts</SheetTitle>
          </SheetHeader>
          <Form {...form}>
            <form
              className="py-4 flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex items-center gap-1">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-deepForest text-[#ffd700] font-inter_tight">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          id="name"
                          className="border-none outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none  font-medium"
                          placeholder="Enter name"
                          type="text"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-1">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-deepForest font-inter_tight text-xl">
                    @
                  </AvatarFallback>
                </Avatar>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          id="mail"
                          className="border-none outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none font-inter_tight font-medium"
                          placeholder="Enter email address"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Textarea
                        placeholder="Let us know what you think"
                        className="mt-2 min-h-28 shadow-lg border-none focus-visible:ring-0"
                        typeof="string"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-2 flex justify-end">
                <Button
                  type="submit"
                  aria-disabled={sending || sent}
                  className="text-base"
                  size={"sm"}
                >
                  {sending ? (
                    <LuLoader2 className="text-deepForest w-[30px] h-auto animate-spin" />
                  ) : (
                    <>
                      {sent ? (
                        <LuMailCheck
                          className="text-deepForest"
                          size={"1.5rem"}
                        />
                      ) : (
                        <IoIosArrowRoundForward className="text-deepForest w-[40px] h-auto" />
                      )}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <Comments slug={publicationId} />
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Reaction;
