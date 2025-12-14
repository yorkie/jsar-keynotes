import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';

const SlidePathCompare: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const rows = [
    { label: 'Focus', safari: 'New standards and media capabilities', jsar: 'Redefine per-element spatial semantics' },
    { label: 'Extension', safari: 'Reuse DOM/compositor, incremental extension', jsar: 'Full redesign from pipeline to interaction model' },
    { label: 'Compatibility', safari: 'Compatibility-first for existing sites', jsar: '2D content runs naturally in 3D space' },
    { label: 'Rendering View', safari: 'Window/scene-driven media presentation', jsar: 'Element-level spatial layout with batched rendering' },
    { label: 'Trajectory', safari: 'Enhanced spatial browsing', jsar: 'Native spatial web engine' },
  ];

  return (
    <SlideLayout {...nav} title="Path Comparison & Common Goal">
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr,0.75fr] gap-8 h-full items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-3 text-gray-400 font-normal">Aspect</th>
                <th className="py-3 px-3 text-blue-300">visionOS · Safari</th>
                <th className="py-3 px-3 text-green-400">JSAR · Spatial Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="py-3 px-3 font-medium text-gray-300">{r.label}</td>
                  <td className="py-3 px-3 text-gray-400 text-sm">{r.safari}</td>
                  <td className="py-3 px-3 text-white text-sm font-semibold">{r.jsar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">Common Goal</h3>
          <div className="space-y-3 text-gray-300">
            <div className="p-4 rounded-xl bg-green-600/10 border border-white/10">Advance the Web toward pure spatial evolution</div>
            <div className="p-4 rounded-xl bg-green-600/10 border border-white/10">Enable immersive experiences with familiar web tech</div>
            <div className="p-4 rounded-xl bg-green-600/10 border border-white/10">Deliver first-class browsing on new hardware ecosystems</div>
          </div>
          <div className="text-xs text-gray-400">Both paths share the same vision; they differ in technical approach and execution</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlidePathCompare;
