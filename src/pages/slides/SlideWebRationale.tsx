import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlideWebRationale: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const features = [
    { title: 'z-index depth semantics', desc: 'Stacking contexts express front/back; inherent notion of depth' },
    { title: 'CSS Transform', desc: 'translate3d/rotate3d/matrix3d primitives for 3D transforms' },
    { title: 'preserve-3d', desc: 'transform-style: preserve-3d maintains 3D relationships' },
    { title: 'Perspective', desc: 'perspective and perspective-origin enable projection semantics' },
    { title: 'GPU Composition', desc: 'will-change, compositing layers, plus WebGL/WebGPU' },
  ];

  const points = [
    'Compared to many native GUI frameworks, the Web already embraces spatial semantics',
    'Spatialization elevates existing semantics for consistency and native behavior',
    'JSAR treats HTML elements as spatial entities, unifying 2D/3D layout and rendering',
  ];

  return (
    <SlideLayout {...nav} title="Why the Web Can and Should Be Spatial">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-3">Spatial DNA in existing Web semantics</h3>
          <div className="grid grid-cols-1 gap-3">
            {features.map((it, i) => (
              <motion.div
                key={it.title}
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
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">Why spatialization is the right path</h3>
          <div className="space-y-3 text-gray-300">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-xl bg-indigo-600/10 border border-white/10"
              >
                {p}
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-gray-400">Conclusion: The Web has spatial foundations; it should evolve into a native spatial engine</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideWebRationale;
