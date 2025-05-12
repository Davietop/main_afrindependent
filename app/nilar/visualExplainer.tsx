// components/VisualExplainer.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBalanceScale,
  FaCoins,
  FaWifi,
  FaExchangeAlt,
  FaArrowRight
} from 'react-icons/fa';

const steps = [
  {
    title: 'Gold Reserve Basis',
    description: 'Every Nilar is backed 1:1 by physical gold reserves.',
    icon: <FaBalanceScale className=" text-5xl" />,
  },
  {
    title: 'Currency Unit Creation',
    description: 'New units are minted only as gold reserves increase.',
    icon: <FaCoins className=" text-5xl" />,
  },
  {
    title: 'Digital Circulation',
    description: 'Secure blockchain-based transfer and storage.',
    icon: <FaWifi className=" text-5xl" />,
  },
  {
    title: 'Market-Based Exchange & Trade',
    description: 'Traded freely and transparently in open markets.',
    icon: <FaExchangeAlt className=" text-5xl" />,
  },
];

function VisualExplainer() {
  const [current, setCurrent] = useState(0);

  // Autoplay Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % steps.length);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl my-10 max-w-6xl mx-auto overflow-hidden relative">
      {/* Step Navigation */}
      <div className="flex justify-around py-4 border-b bg-deepForest">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex flex-col items-center transition-all px-2 sm:px-4 ${
              current === i
                ? 'text-yellow-600 font-semibold' // Active state - bright colors
                : 'text-gray-400' // Inactive state - dim colors
            }`}
          >
            <div className={`${current === i ? "text-[#ffd700] " : "text-gray-400"} `}>{step.icon}</div>
            
            <span className="text-xs mt-1 text-center">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="bg-yellow-500 h-1 transition-all"
          style={{ width: `${((current + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Animated Content */}
      <div className="relative px-6 py-6 sm:py-8 min-h-[100px] mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="absolute w-full"
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              {steps[current].title}
            </h3>
            <p className="text-gray-700 text-center max-w-xl mx-auto">
              {steps[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default VisualExplainer;
