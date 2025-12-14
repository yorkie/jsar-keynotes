import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
  prevPath?: string;
  nextPath?: string;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  title,
  slideNumber,
  totalSlides,
  prevPath,
  nextPath,
  className = ""
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (nextPath) navigate(nextPath);
      } else if (e.key === 'ArrowLeft') {
        if (prevPath) navigate(prevPath);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, nextPath, prevPath]);

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white overflow-hidden relative font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => navigate('/')}>
          <Home size={20} />
          <span className="text-sm font-medium tracking-wider">JSAR KEYNOTES</span>
        </div>
        <div className="text-sm text-gray-400">
          {slideNumber} / {totalSlides}
        </div>
      </header>

      {/* Main Content */}
      <main className={`relative z-0 h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-16 ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto"
          >
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {title}
              </motion.h2>
            )}
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-20">
        <button
          onClick={() => prevPath && navigate(prevPath)}
          disabled={!prevPath}
          className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all ${!prevPath ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => nextPath && navigate(nextPath)}
          disabled={!nextPath}
          className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all ${!nextPath ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
