import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideVisionSafari: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const items = [
    { title: 'Spatial Photos', desc: 'Native support for spatial photo formats for immersive media' },
    { title: 'Spatial Videos', desc: 'Enhanced playback optimized for multi-view and depth data' },
    { title: '3D Models', desc: 'Native loading of USDZ/other formats integrated with page content' },
    { title: 'Windows & Scenes', desc: 'Spatial extension of existing compositor and windowing systems' },
  ];

  return (
    <SlideLayout {...nav} title={<><span>Progressive Spatialization</span><br /><span>in Traditional Browsers</span></>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10 self-start"
        >
          <h3 className="text-xl font-bold text-white mb-3">Spatialization based on existing browser cores</h3>
          <p className="text-gray-300 mb-4">Focus on new capabilities and standards without changing DOM/compositor fundamentals, bringing spatial media and 3D to the Web.</p>
          <div className="grid grid-cols-1 gap-3">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="text-white font-semibold">{it.title}</div>
                <div className="text-xs text-gray-400">{it.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-3 self-start"
        >
          <h3 className="text-2xl font-bold">Key Points</h3>
          <div className="space-y-2 text-gray-300">
            <div className="p-3 rounded-xl bg-indigo-600/10 border border-white/10">Extend traditional Web via new standards to gain spatial capabilities</div>
            <div className="p-3 rounded-xl bg-indigo-600/10 border border-white/10">Strong compatibility with existing sites and developer mental models</div>
            <div className="p-3 rounded-xl bg-indigo-600/10 border border-white/10">Focus on native support for media and 3D models</div>
          </div>
          <div className="text-xs text-gray-400">Positioning: Illustrates a realistic path to spatialization based on existing browser cores</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideVisionSafari;
