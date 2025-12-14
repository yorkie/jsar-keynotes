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
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c14] to-[#151725] text-white overflow-hidden relative font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(100%_60%_at_50%_0%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
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
      <main className={`relative z-0 h-screen flex flex-col justify-center px-10 md:px-20 lg:px-28 pt-12 ${className}`}>
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
                className="text-center -mt-4 text-4xl md:text-6xl font-semibold tracking-tight mb-10 bg-gradient-to-r from-[#8ab4ff] to-[#c3a5ff] bg-clip-text text-transparent"
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
