import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FloatToTop = ({ scrollY }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg z-50"
      animate={{ 
        opacity: scrollY > 300 ? 1 : 0,
        y: scrollY > 300 ? 0 : 100
      }}
      transition={{ duration: 0.3 }}
      onClick={handleScrollToTop}
    >
      <ArrowUpRight className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatToTop;
