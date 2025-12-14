import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Glasses, Hand, Smartphone, Cpu, Layers, Zap } from 'lucide-react';

const SlideCapabilities: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const capabilities = [
    { icon: Glasses, title: 'Stereo Rendering', desc: 'Optimized left/right-eye pipeline, supports spatial="stereo"' },
    { icon: Hand, title: 'Spatial Interaction', desc: 'Gesture tracking, controller input, and eye tracking (planned)' },
    { icon: Smartphone, title: 'Cross-Platform', desc: 'Android (OpenGLES), macOS (Metal/GL), Windows (D3D)' },
    { icon: Cpu, title: 'WebXR Compatibility', desc: 'Full WebXR Device API implementation' },
    { icon: Layers, title: 'Spatial DOM', desc: 'CSS transforms like translate3d and spatial properties' },
    { icon: Zap, title: 'High Performance', desc: 'Dynamic batching, ≤10 GPU draw calls per frame' },
  ];

  return (
    <SlideLayout {...nav} title="Core Capabilities">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full content-center">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-all cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 text-blue-400">
              <cap.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{cap.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default SlideCapabilities;
