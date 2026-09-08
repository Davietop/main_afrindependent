'use client';

import { useState, FormEvent } from 'react';
import { LuLoader2 } from 'react-icons/lu';
import { Input } from '@/components/ui/input';
import { IBM_Plex_Sans } from 'next/font/google';
import ResponseModal from '../ui/responseModal';
import { BellRing } from "lucide-react";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const SubscribeForm = ({ post }: any) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
    
      const res = await fetch("/api/add-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Successfully subscribed!");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message); 
    }
  };

  return (
    <div className={`${ibmPlexSans.className} w-full max-w-3xl mx-auto`}>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-wrap gap-4 justify-between items-center w-full"
      >
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-300 shadow-sm px-5 py-5 text-[#1E1E1E]"
        />

        <div className="w-full flex justify-center mt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`flex items-center gap-2 bg-deepForest border-2 border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700] font-medium px-6 py-2 rounded-full transition duration-200 disabled:opacity-75 ${
              post === "post" ? "text-sm" : "text-base"
            }`}
          >
            {status === 'loading' ? (
              <LuLoader2 className="animate-spin w-6 h-6 text-[#ffd700]" />
            ) : (
              <>
                <BellRing className="w-5 h-5" />
                Subscribe for Updates
              </>
            )}
          </button>
        </div>
      </form>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700 mt-4 text-center">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 mt-4 text-center">{message}</p>
      )}
    </div>
  );
};

export default SubscribeForm;