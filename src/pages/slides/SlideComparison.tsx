import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const SlideComparison: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  return (
    <SlideLayout {...nav} title="Why Not Extend Traditional Browsers?">
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr,0.75fr] gap-8 h-full items-center">
        {/* Left: Table */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/5 rounded-2xl p-6 border border-white/10"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-gray-400 font-normal">Aspect</th>
                <th className="py-4 px-4 text-red-400">Traditional Browser Extension</th>
                <th className="py-4 px-4 text-green-400">JSAR Redesign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { label: 'Architecture', old: '2D Document Flow + Compositor', new: 'Native 3D Spatial Architecture' },
                { label: 'Render Pipeline', old: 'Complex layered rendering', new: 'Optimized 3D pipeline' },
                { label: 'Performance', old: 'DOM repaint overhead', new: 'Efficient batched draws' },
                { label: 'XR Integration', old: 'Canvas constrained', new: 'Native mixed rendering' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-4 px-4 font-medium text-gray-300">{row.label}</td>
                  <td className="py-4 px-4 text-gray-400 text-sm">{row.old}</td>
                  <td className="py-4 px-4 text-white text-sm font-semibold">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Right: Core Points */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Why JSAR Chooses Redesign</h3>
            {[
              { title: 'Architecture Fit', desc: '3D spatial needs conflict fundamentally with 2D browser design' },
              { title: 'Performance', desc: 'GPU batch optimizations tailored for spatial computing' },
              { title: 'Developer Simplicity', desc: 'Build 3D apps without learning game engines' },
              { title: 'Future-Ready', desc: 'Native for next-generation platforms like Apple Vision Pro' },
            ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-1 bg-green-500/20 rounded-full mt-1">
                <Check size={16} className="text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideComparison;
