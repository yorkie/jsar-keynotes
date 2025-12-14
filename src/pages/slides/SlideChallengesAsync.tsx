import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideChallengesAsync: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const reasons = [
    'Process isolation prevents JS/TS from slowing the global frame rate',
    'Binocular XR is highly latency-sensitive; views must remain consistent',
    "Pre-rendered FBO/GPU command buffers make the 'current view' hard to maintain at composition",
  ];

  const solution = [
    'Deferred computation: compute in real time at composition for the current view',
    'Computation graph: unify rendering dependencies and data flow to ensure accurate composition',
    'Cross‑process scheduling: coordinate batches and timelines at the compositor side to reduce jitter',
  ];

  return (
    <SlideLayout {...nav} title="Challenge: Async Rendering vs Spatial Composition">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">Why async rendering is needed</h3>
          <div className="space-y-3 text-gray-300">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                {r}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">JSAR approach</h3>
          <div className="space-y-3 text-gray-300">
            {solution.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-4 rounded-xl bg-indigo-600/10 border border-white/10">
                {s}
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-4">Goal: composed frames strictly match the user’s current view</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideChallengesAsync;
