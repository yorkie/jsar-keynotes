import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideChallengesEffects: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const challenges = [
    'CSS effects like filters and shadows are layer‑oriented; spatial scenes require redefinition',
    'Consider scene‑wide blending, occlusion, volume, and depth relationships',
    'Ensuring performance and visual consistency in spatial composition increases complexity significantly',
  ];

  const directions = [
    'Abstract effects as spatial shading stages with unified batching and ordering',
    'Define volumetric parameters: range, depth, and relationships to lighting models',
    'Introduce composable effect nodes that co‑run with the computation graph',
  ];

  return (
    <SlideLayout {...nav} title="Challenge: Redesigning Filters and Shadows for Spatial Scenes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">Problems and challenges</h3>
          <div className="space-y-3 text-gray-300">
            {challenges.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 rounded-2xl p-6 border border-white/10 self-start">
          <h3 className="text-xl font-bold text-white mb-4">Design directions</h3>
          <div className="space-y-3 text-gray-300">
            {directions.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-4 rounded-xl bg-indigo-600/10 border border-white/10">
                {d}
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-4">Goal: preserve consistent CSS effect semantics and high performance in spatial scenes</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideChallengesEffects;
