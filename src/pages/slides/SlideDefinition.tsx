import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Axis3d, Eye, Globe, Component } from 'lucide-react';

const SlideDefinition: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const features = [
    { icon: Axis3d, label: '3D Coordinate System', desc: 'Each element has real x, y, z coordinates' },
    { icon: Eye, label: 'Spatial Rendering', desc: 'Native support for mono and stereo rendering' },
    { icon: Globe, label: 'Web Standards', desc: 'Compatible with HTML5/CSS3/TypeScript ecosystem' },
    { icon: Component, label: 'Immersive Experience', desc: 'Native integration with WebXR Device API' },
  ];

  return (
    <SlideLayout {...nav} title="Concept Definition">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
            The <span className="font-bold text-blue-400">Spatial Web Browser Engine</span> renders traditional 2D web content directly into a
            <span className="font-bold text-purple-400 mx-2">3D coordinate space</span>.
          </p>
          <p className="mt-6 text-xl text-gray-400">
            Instead of flattening content into a rectangular viewport, HTML elements gain real depth and spatial attributes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-center"
            >
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4 text-white">
                <feat.icon size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feat.label}</h3>
              <p className="text-sm text-gray-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideDefinition;
