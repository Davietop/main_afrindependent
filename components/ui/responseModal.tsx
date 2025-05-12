'use client';

import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],          // Or 'latin-ext' if needed
    weight: ['400', '500', '700'], // Optional: choose weights you use
    display: 'swap',             // Optional: improves text rendering
  });

interface Props {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function ResponseModal({ isOpen, message, onClose }: Props) {
  return (
    <Dialog as="div" className={`${ibmPlexSans.className} relative z-50`} open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Centering container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm bg-white rounded-xl p-6 shadow-xl text-center">
          <Dialog.Title className="text-lg font-semibold mb-3">Notification</Dialog.Title>
          <Dialog.Description className="text-gray-700 mb-5">{message}</Dialog.Description>
          <button
            onClick={onClose}
            className="inline-block bg-deepForest text-white px-4 py-2 rounded "
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
