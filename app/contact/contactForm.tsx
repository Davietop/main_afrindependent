"use client";
import { FC, useState, FormEvent } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 function isGibberish(text:string) {
  if (!text) return true;

  // Normalize
  const cleaned = text.toLowerCase().replace(/[^a-z]/g, "");

  // Too short → gibberish
  if (cleaned.length < 10) return true;

  // Too few spaces (no proper words)
  const wordCount = text.trim().split(/\s+/).length;
  if (wordCount < 2) return true;

  // Ratio check: vowels vs consonants
  const vowels = (cleaned.match(/[aeiou]/g) || []).length;
  const consonants = cleaned.length - vowels;
  const ratio = vowels / (consonants || 1);
  if (ratio < 0.2 || ratio > 0.8) return true; // too skewed → gibberish

  // Long consecutive same-type sequences
  if (/[bcdfghjklmnpqrstvwxyz]{6,}/i.test(cleaned)) return true;

  // Check for repetition patterns
  if (/(.)\1{3,}/.test(cleaned)) return true;

  // Low number of recognizable English words
  const commonWords = ["the","and","you","for","this","that","with","have","are","was","not","but","they","what","can"];
  const words = text.toLowerCase().split(/\s+/);
  const knownWords = words.filter(w => commonWords.includes(w));
  if (knownWords.length === 0) return true;

  return false;
}
 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isGibberish(formData.message) ) {
        throw new Error("Rejected Data Content, Message looks like gibberish.");
      } else {
        const res = await fetch("/api/send-contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setShowModal(true);
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        }
      }
    } catch (err) {
      alert( err)
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`${ibmPlexSans.className} text-[#002813] px-6 sm:px-10 bg-white`}
    >
      {/* Contact Form Section */}
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold border-t border-[#002813] pt-10 mb-4">
            General Inquiries
          </h3>
          <p className="mb-6">
            Use the form below to contact our team regarding our work,
            publications, or opportunities to collaborate.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="p-4 rounded-xl border bg-white text-[#002813]"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="p-4 rounded-xl border bg-white text-[#002813]"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border bg-white text-[#002813] col-span-full"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border bg-white text-[#002813] h-40"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#002813] text-[#ffd700] px-6 py-3 rounded-xl font-medium hover:bg-[#001d0f] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-10">
          {/* Email & Address */}
          <div>
            <h3 className="text-2xl font-semibold border-t border-[#002813] pt-10 mb-4">
              Email & Institutional Address
            </h3>
            <p className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hello@afrindependent.org"
                className="underline hover:no-underline"
              >
                hello@afrindependent.org
              </a>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Afrindependent Institute <br />
                10, Route Abattoir, P.O. Box 73103 <br />
                Port Louis, Mauritius
              </span>
            </p>
          </div>

          {/* Media & Press Inquiries */}
          <div>
            <h3 className="text-2xl font-semibold border-t border-[#002813] pt-10 mb-4">
              Media & Press Inquiries
            </h3>
            <p className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <a
                href="mailto:media@afrindependent.org"
                className="underline hover:no-underline"
              >
                media@afrindependent.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl text-center">
            <h2 className="text-xl font-semibold mb-2">Message Sent</h2>
            <p className="mb-4 text-[#002813]">
              Thank you—your message has been successfully sent. We’ll be in
              touch soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#002813] text-[#ffd700] px-6 py-2 rounded-xl font-medium hover:bg-[#001d0f] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
