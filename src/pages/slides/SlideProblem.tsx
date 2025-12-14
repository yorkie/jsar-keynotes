import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Monitor, Box, Layers, MousePointer2 } from 'lucide-react';

const SlideProblem: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const challenges = [
    { icon: Monitor, title: 'Screen Constraints', desc: 'Content confined to rectangular viewports; cannot leverage infinite space' },
    { icon: Box, title: 'Missing Depth', desc: 'HTML elements have width/height but no native depth semantics' },
    { icon: Layers, title: 'Fragmented Experience', desc: 'VR/AR require dedicated apps, disconnected from the Web ecosystem' },
    { icon: MousePointer2, title: 'Interaction Limits', desc: 'Mouse/keyboard-centric flat interaction struggles with natural gestures' },
  ];

  return (
    <SlideLayout {...nav} title="When 2D Web Meets 3D World">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <div className="space-y-8 max-h-[60vh]">
          <p className="text-base text-gray-300 leading-relaxed">
            Traditional browser architectures are optimized for 2D documents and compositors, facing fundamental challenges in the era of spatial computing.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          {/* Conceptual Visualization */}
          <div className="relative w-64 h-48 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center transform -rotate-y-12 shadow-2xl z-10">
            <span className="text-gray-500">2D Web</span>
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">Limited</div>
          </div>
          <motion.div 
            animate={{ 
              rotateY: [0, 360],
              z: [0, 50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-80 h-80 border border-blue-500/30 rounded-full flex items-center justify-center"
          >
             <div className="absolute w-full h-full border border-purple-500/30 rounded-full transform rotate-x-45" />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideProblem;
