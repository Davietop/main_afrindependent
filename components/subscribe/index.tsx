'use client';

import { useState } from 'react';
import { LuLoader2 } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IBM_Plex_Sans } from 'next/font/google';
import ResponseModal from '../ui/responseModal';
import { Resend } from 'resend';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');


    

    try {
      const res = await fetch('/api/add-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

    

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Contact added successfully!');
        setEmail('');
   
        setStatus('success');
      } else {
        setMessage(`⚠️ ${data.error || 'Failed to add contact'}`);
        setStatus('error');
      }
    } catch (error) {
      setMessage('❌ Server error, please try again.');
      setStatus('error');
    } finally {
      setShowModal(true);
    }
  };

  return (
    <div className={`${ibmPlexSans.className} w-full max-w-3xl mx-auto`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 justify-between items-center w-full"
      >
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-300 shadow-sm px-5 py-3 text-[#1E1E1E]"
        />

        <div className="w-full flex justify-center">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center gap-2 bg-deepForest text-base border-2 border-deepForest hover:text-deepForest hover:bg-white text-[#ffd700] font-medium px-10 py-1 rounded-full transition duration-200"
          >
            {status === 'loading' ? (
              <LuLoader2 className="animate-spin w-6 h-6 text-[#ffd700]" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
      </form>

      <ResponseModal
        isOpen={showModal}
        message={message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default SubscribeForm;
