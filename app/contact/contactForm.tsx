"use client"
import { FC, useState, FormEvent } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${ibmPlexSans.className} text-[#002813] px-6 sm:px-10 lg:px-24 py-14 bg-white`}>
     

      {/* Contact Form Section */}
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold border-t border-[#002813] pt-10 mb-4">General Inquiries</h3>
          <p className="mb-6">
            Use the form below to contact our team regarding our work, publications, or opportunities to collaborate.
          </p>
          {submitted ? (
            <p className="text-lg font-medium">Thank you—your message has been sent.</p>
          ) : (
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
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
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
              <a href="mailto:hello@afrindependent.org" className="underline hover:no-underline">
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
            <h3 className="text-2xl font-semibold border-t border-[#002813] pt-10 mb-4">Media & Press Inquiries</h3>
            <p className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <a href="mailto:media@afrindependent.org" className="underline hover:no-underline">
                media@afrindependent.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

