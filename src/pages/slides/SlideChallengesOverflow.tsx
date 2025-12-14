import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideChallengesOverflow: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const points = [
    'Spatial DOM still requires layered rendering; overflow clipping uses stencil buffers per layer',
    'Multiple overflow layers significantly increase draw call counts',
    'Optimizing stencil usage and batch merging is a key metric for spatial DOM',
  ];

  const outlook = [
    'With generative GUIs, highly complex interfaces will appear less often',
    'Extreme optimization for complex overflow becomes less critical, but robust solutions remain necessary',
  ];

  return (
    <SlideLayout {...nav} title="Challenge: Layered Spatial DOM and Overflow Rendering">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">Problem overview</h3>
          <div className="space-y-3 text-gray-300">
            {points.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">Reality and trends</h3>
          <div className="space-y-3 text-gray-300">
            {outlook.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-4 rounded-xl bg-indigo-600/10 border border-white/10">
                {o}
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-4">Metric: achieve complex overflow clipping and rendering with fewer draw calls</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideChallengesOverflow;
