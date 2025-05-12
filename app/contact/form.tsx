"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { LuMailCheck } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email("This is not a valid email.").nonempty(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit() {
    setSending(true);
    setSent(false);
    setError(false);
    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey).then(
      (result) => {
        setSending(false);
        setSent(true);
        form.reset();
      },
      (error) => {
        setSending(false);
        setError(true);
      }
    );
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (sent || error) {
      timeout = setTimeout(() => {
        if (sent) setSent(false);
        if (error) setError(false);
      }, 5000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [sent, error]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 lg:space-y-10"
        ref={formRef}
      >
        <div className="flex items-center gap-x-[10px] lg:gap-x-[30px]">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="px-[15px] h-[51px] lg:h-[66px] rounded-[6px] lg:rounded-[15px] bg-[#f6f6f6] border-none text-[#636363] placeholder:text-[#636363] text-sm lg:text-xl"
                    placeholder="First name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="px-[15px] h-[51px] lg:h-[66px] rounded-[6px] lg:rounded-[15px] bg-[#f6f6f6] border-none text-[#636363] placeholder:text-[#636363] text-sm lg:text-xl"
                    placeholder="Last name"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="px-[15px] h-[51px] lg:h-[66px] rounded-[6px] lg:rounded-[15px] bg-[#f6f6f6] border-none text-[#636363] placeholder:text-[#636363] text-sm lg:text-xl"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  className="resize-none px-[15px] h-[51px] lg:h-[66px] rounded-[6px] lg:rounded-[15px] bg-[#f6f6f6] border-none text-[#636363] placeholder:text-[#636363] text-sm lg:text-xl min-h-52"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error ? (
          <div className="border-red-400 border rounded-[15px] py-2 px-5 text-center animate-pulse">
            <span className="text-red-400 text-sm font-nohemi">
              Message failed to send. Please try again.
            </span>
          </div>
        ) : null}
        <Button
          aria-disabled={sending || sent}
          type="submit"
          className={`${
            sent ? "bg-green-500" : "bg-secondary"
          } text-white font-semibold font-nohemi text-sm lg:text-xl max-lg:flex max-lg:mx-auto lg:w-full py-5 lg:rounded-[15px] hover:bg-secondary/80 transition-all`}
        >
          {sending ? "Sending" : sent ? "" : "Send"} Message
          {sending ? "..." : ""} {sent ? "sent" : ""}{" "}
          {sent ? (
            <LuMailCheck className="text-white ml-3" size={"1.5rem"} />
          ) : null}
        </Button>
      </form>
    </Form>
  );
}
