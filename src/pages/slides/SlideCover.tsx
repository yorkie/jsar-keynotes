import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideCover: React.FC = () => {
  const location = useLocation();
  const { slideNumber, totalSlides, prevPath, nextPath } = getSlideNavigation(location.pathname);

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      prevPath={prevPath}
      nextPath={nextPath}
      className="text-center"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            JSAR
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Spatial Web Browser Engine
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12"
        >
          Redefining the boundaries of web browsing
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-24 text-sm text-gray-500"
        >
          M-CreativeLab / 2025
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideCover;
